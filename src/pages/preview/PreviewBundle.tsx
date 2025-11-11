import React, { useCallback, useMemo, useRef, useState } from 'react';
import JSZip from 'jszip';
import * as htmlToImage from 'html-to-image';
import { registry } from '@/design-system/catalogRegistry';
import { BREAKPOINTS } from './PreviewUtils';

function slug(s: string){ return s.replace(/\s+/g,'_'); }

export default function PreviewBundle(){
  const [running, setRunning] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const run = useCallback(async ()=>{
    setRunning(true);
    setErrors([]);

    const zip = new JSZip();
    const thumbs = zip.folder('thumbnails');
    const manifest: any[] = [];

    // We will snapshot using live DOM selection by ids if present, otherwise we mount a lightweight renderer
    for (const r of registry){
      for (const v of (r.variants||[])){
        const id = `Atomic-${r.category}-${r.name}-${v.name}`;
        manifest.push({ category: r.category, component: r.name, variant: v.name, frameId: id, link: `/previews/${r.category.toLowerCase()}#${id}` });
        const el = document.querySelector(`[data-preview-frame-id='${id}']`) as HTMLElement | null;
        if (!el) continue;
        try {
          const dataUrl = await htmlToImage.toPng(el, { pixelRatio: 1.5, backgroundColor: 'white' });
          const res = await fetch(dataUrl);
          const blob = await res.blob();
          thumbs?.file(`${slug(r.category)}_${slug(r.name)}_${slug(v.name)}.png`, blob);
        } catch (e){ setErrors((e2)=> [...e2, `${id} snapshot failed`]); }
      }
    }

    zip.file('preview-manifest.json', JSON.stringify({ items: manifest }, null, 2));
    const blob = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'preview-bundle.zip';
    a.click();
    setRunning(false);
  },[]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-4">
      <div className="flex items-center gap-4">
        <button onClick={run} disabled={running} className="px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50">{running? 'Generating…' : 'Download preview-bundle.zip'}</button>
        {errors.length>0 && <div className="text-xs text-destructive">{errors.join('; ')}</div>}
      </div>
    </div>
  );
}
