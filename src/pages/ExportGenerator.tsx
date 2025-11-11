import React, { useCallback, useMemo, useRef, useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { registry, ComponentMeta } from '@/design-system/catalogRegistry';
import { collectComputed, elementBounds, mapTokens, serializeHtmlWithInlineStyles, TokenManifest, diffStyles, inlineComputedRecursive } from '@/utils/cssUtils';
import { Text } from '@/components/atoms/Text';

const BREAKPOINTS = [
  { id: 'desktop', width: 1200 },
  { id: 'tablet', width: 834 },
  { id: 'mobile', width: 390 },
];

function frameName(category: string, component: string, variant: string){
  return `ExportFrame/${category}/${component}/${variant}`;
}

async function dataURLToBlob(dataUrl: string){
  const res = await fetch(dataUrl);
  return await res.blob();
}

function slug(...parts: string[]){
  return parts.join('-').replace(/\s+/g,'_');
}

export default function ExportGenerator(){
  const containerRef = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [summary, setSummary] = useState<{ atoms: number; molecules: number; organisms: number; templates: number; pages: number; variants: number; errors: string[] }|null>(null);

  const metas = useMemo(()=> registry, []);

  const pushLog = useCallback((m:string)=> setLog(l => [...l, m]), []);

  const run = useCallback(async ()=>{
    if (!containerRef.current) return;
    setRunning(true);
    setLog([]);
    const root = containerRef.current;
    root.innerHTML = '';

    const designTokens: TokenManifest = await fetch('/design-tokens.manifest.json').then(r=>r.json()).catch(()=>({}));

    const zip = new JSZip();
    const htmlDir = zip.folder('html');
    const jsonDir = zip.folder('computed-json');
    const pngDir = zip.folder('preview-screens');

    const catalog: any[] = [];

    let counts = { atoms: 0, molecules: 0, organisms: 0, templates: 0, pages: 0, variants: 0 };
    const errors: string[] = [];

    for (const meta of metas){
      // Count by category
      if (meta.category === 'Atom') counts.atoms++; else if (meta.category==='Molecule') counts.molecules++; else if (meta.category==='Organism') counts.organisms++; else if (meta.category==='Template') counts.templates++; else if (meta.category==='Page') counts.pages++;
      for (const variant of (meta.variants||[])){
        counts.variants++;
        const name = frameName(meta.category, meta.name, variant.name);
        pushLog(`Rendering ${name}`);

        // For each breakpoint, render and measure
        const bpData: any[] = [];
        let lastStyles: Record<string,string>|null = null;
        let responsive: any[] = [];
        let desktopPng: Blob | null = null;

        for (const bp of BREAKPOINTS){
          const wrap = document.createElement('div');
          wrap.style.width = `${bp.width}px`;
          wrap.style.minWidth = `${bp.width}px`;
          wrap.style.maxWidth = `${bp.width}px`;
          wrap.style.padding = '0';
          wrap.style.margin = '0';
          wrap.style.boxSizing = 'border-box';
          wrap.setAttribute('data-export-frame', name);
          wrap.setAttribute('data-breakpoint', bp.id);

          const inner = document.createElement('div');
          inner.style.width = '100%';
          inner.style.display = 'block';

          root.appendChild(wrap);
          wrap.appendChild(inner);

          // Mount React render into container via portal approach
          // We create a temporary root by using React 18 hydration on a detached node via createRoot
          // But since we are inside React already, we simply use ReactDOM to render variant content via a placeholder
          // Simpler: set inner HTML by creating a small React portal component inline next to this page.
          // Instead of complex portals, we will use a known trick: render a React element into a DOM node with ReactDOM.
          const { createRoot } = await import('react-dom/client');
          const r = createRoot(inner);
          r.render(<div aria-label={name}> {variant.render()} </div>);
          // wait for layout
          await new Promise(res=>setTimeout(res, 30));

          const bounds = elementBounds(inner as HTMLElement);
          const styles = collectComputed(inner as HTMLElement);

          // diff responsive from previous
          if (lastStyles){
            const d = diffStyles(lastStyles, styles);
            if (Object.keys(d).length){ responsive.push({ breakpoint: bp.id, changed: d }); }
          }
          lastStyles = styles;

          // snapshot PNG only for desktop
          if (bp.id === 'desktop'){
            try {
              const dataUrl = await htmlToImage.toPng(wrap, { pixelRatio: 2, backgroundColor: 'transparent' });
              desktopPng = await dataURLToBlob(dataUrl);
            } catch (e){ errors.push(`${name}: PNG snapshot failed`) }
          }

          // computed JSON for root and some child selectors
          const important: Record<string, Record<string,string>> = {
            root: styles,
          };
          const selectors = ['.icon','.label','img','svg','button'];
          for (const sel of selectors){
            const node = (inner as HTMLElement).querySelector(sel);
            if (node){ important[sel] = collectComputed(node); }
          }

          const tokens = mapTokens(styles, designTokens);
          bpData.push({ breakpoint: bp.id, bounds, styles: important, tokensUsed: tokens });

          // HTML snapshot (self-contained) with ExportFrame wrapper and exact bounds
          const clone = (inner as HTMLElement).cloneNode(true) as HTMLElement;
          inlineComputedRecursive(clone);
          const doc = `<!doctype html>\n<html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>${name} — ${bp.id}</title></head><body style=\"margin:0;\"><div id=\"${name}\" style=\"width:${bounds.width}px;height:${bounds.height}px;display:inline-block;\">${clone.outerHTML}</div></body></html>`;
          const htmlPath = `${slug(meta.category, meta.name)}/${slug(variant.name)}/${bp.id}.html`;
          htmlDir?.file(htmlPath, doc);

          // cleanup this breakpoint DOM
          r.unmount();
          root.removeChild(wrap);
        }

        // single computed json per variant (aggregate)
        const computedJson = {
          component: meta.name,
          variant: variant.name,
          frames: bpData,
        };
        const jsonPath = `${slug(meta.category, meta.name)}/${slug(variant.name)}/computed.json`;
        jsonDir?.file(jsonPath, JSON.stringify(computedJson, null, 2));

        if (desktopPng){
          const pngPath = `${slug(meta.category, meta.name)}_${slug(variant.name)}.png`;
          pngDir?.file(pngPath, desktopPng);
        }

        // catalog entry (desktop bounds from bpData)
        const desk = bpData.find(b=>b.breakpoint==='desktop');
        catalog.push({
          category: meta.category,
          component: meta.name,
          variant: variant.name,
          previewHtml: `html/${slug(meta.category, meta.name)}/${slug(variant.name)}/desktop.html`,
          computedJson: `computed-json/${slug(meta.category, meta.name)}/${slug(variant.name)}/computed.json`,
          desktop: desk?.bounds,
          tokens: Object.values((desk?.tokensUsed?.colors||{})).map((t:any)=> t.token).filter(Boolean),
        });
      }
    }

    // write manifests
    zip.file('catalog-index.json', JSON.stringify({ items: catalog }, null, 2));
    try {
      const dt = await fetch('/design-tokens.manifest.json').then(r=>r.text());
      zip.file('design-tokens.manifest.json', dt);
    } catch {}

    // hints per component
    const hintsDir = zip.folder('hints');
    for (const meta of metas){
      const lines: string[] = [];
      lines.push(`# ${meta.name}`);
      lines.push('Auto Layout: Enable on containers with display:flex or grid.');
      lines.push('Styles: Map colors to Figma color styles, typography to text styles, effects to shadows.');
      lines.push('Sizing: Elements with fixed width/height are fixed; those in flex with grow/shrink are flexible.');
      hintsDir?.file(`${slug(meta.category, meta.name)}.import-hint.txt`, lines.join('\n'));
    }

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'export.zip');

    setSummary({ ...counts, errors });
    setRunning(false);
  }, [metas]);

  return (
    <div className="max-w-[960px] mx-auto px-6 py-10">
      <div className="mb-6"><h1 className="text-2xl font-bold">Design System Export Generator</h1></div>
      <p className="text-sm text-muted-foreground mb-4">Generates HTML snapshots, computed JSON, PNG previews, catalog-index.json, and bundles as export.zip.</p>
      <button disabled={running} onClick={run} className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold disabled:opacity-50">{running? 'Generating…' : 'Generate Export ZIP'}</button>

      <div ref={containerRef} className="mt-8" aria-hidden />

      {log.length>0 && (
        <div className="mt-8 bg-card border border-border/30 rounded-lg p-4 max-h-64 overflow-auto text-xs">
          {log.map((l,i)=>(<div key={i}>{l}</div>))}
        </div>
      )}

      {summary && (
        <div className="mt-8 bg-card border border-border/30 rounded-lg p-4">
          <Text variant="body" weight="bold">Verification Summary</Text>
          <ul className="text-sm mt-2">
            <li>Atoms: {summary.atoms}</li>
            <li>Molecules: {summary.molecules}</li>
            <li>Organisms: {summary.organisms}</li>
            <li>Templates: {summary.templates}</li>
            <li>Pages: {summary.pages}</li>
            <li>Total variants: {summary.variants}</li>
            <li>Errors: {summary.errors.length ? summary.errors.join('; ') : 'None'}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
