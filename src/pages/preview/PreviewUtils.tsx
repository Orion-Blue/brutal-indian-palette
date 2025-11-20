import React, { useEffect, useMemo, useRef, useState } from 'react';
import { collectComputed, elementBounds, mapTokens, TokenManifest } from '@/utils/cssUtils';
import { Text } from '@/components/atoms/Text';

export const BREAKPOINTS = [
  { id: 'desktop', width: 1200 },
  { id: 'tablet', width: 834 },
  { id: 'mobile', width: 390 },
] as const;

export type FrameMeta = {
  componentPath?: string;
  category: string;
  component: string;
  variant: string;
  bounds: { width: number; height: number };
  padding: { top: string; right: string; bottom: string; left: string };
  tokensUsed: string[];
  responsiveBreakpoints: { desktop: number; tablet: number; mobile: number };
  runtimeComputed?: boolean;
  propsRequired?: boolean;
};

function useDesignTokens(): TokenManifest|{}{
  const [data, setData] = useState<TokenManifest|{}>({});
  useEffect(()=>{ fetch('/design-tokens.manifest.json').then(r=>r.json()).then(setData).catch(()=>setData({})); },[]);
  return data;
}

export function MetadataBar({ meta }: { meta: FrameMeta }){
  return (
    <div className="w-full text-[11px] leading-tight bg-card border border-border/50 rounded-b-lg px-2 py-1 flex items-center gap-3">
      <span>{meta.bounds.width}×{meta.bounds.height}px</span>
      <span>padding: {meta.padding.top}/{meta.padding.right}/{meta.padding.bottom}/{meta.padding.left}</span>
      <span>tokens: {meta.tokensUsed.join(', ') || '—'}</span>
      <span>breakpoints: d{meta.responsiveBreakpoints.desktop}/t{meta.responsiveBreakpoints.tablet}/m{meta.responsiveBreakpoints.mobile}</span>
    </div>
  );
}

export function PreviewFrame({ category, component, variantName, render, frameId, clippedToggle=false }:{
  category: string; component: string; variantName: string; frameId: string; render: () => React.ReactNode; clippedToggle?: boolean;
}){
  const tokens = useDesignTokens();
  const [showIntrinsic, setShowIntrinsic] = useState(false);
  return (
    <div className="space-y-2" data-preview-frame-id={frameId}>
      <Text variant="caption" className="text-muted-foreground">Atomic/{category}/{component}/{variantName}</Text>
      <div className="flex flex-col gap-6">
        {BREAKPOINTS.map(bp => (
          <SingleBreakpointFrame key={bp.id} bpId={bp.id} width={bp.width} category={category} component={component} variantName={variantName} render={render} tokens={tokens as any} showIntrinsic={showIntrinsic} />
        ))}
      </div>
      {clippedToggle && (
        <div className="flex items-center gap-2">
          <input id={`${frameId}-intrinsic`} type="checkbox" checked={showIntrinsic} onChange={e=>setShowIntrinsic(e.target.checked)} />
          <label htmlFor={`${frameId}-intrinsic`} className="text-xs">Show intrinsic (unclipped) bounds</label>
        </div>
      )}
    </div>
  );
}

function SingleBreakpointFrame({ bpId, width, category, component, variantName, render, tokens, showIntrinsic }:{
  bpId: string; width: number; category: string; component: string; variantName: string; render: () => React.ReactNode; tokens: TokenManifest; showIntrinsic: boolean;
}){
  const mountRef = useRef<HTMLDivElement>(null);
  const [meta, setMeta] = useState<FrameMeta|null>(null);

  useEffect(()=>{
    const el = mountRef.current;
    if (!el) return;
    const target = el.querySelector('[data-preview-root]') as HTMLElement | null;
    if (!target) return;
    const bounds = elementBounds(target);
    const cs = getComputedStyle(target);
    const padding = {
      top: cs.getPropertyValue('padding-top') || '0px',
      right: cs.getPropertyValue('padding-right') || '0px',
      bottom: cs.getPropertyValue('padding-bottom') || '0px',
      left: cs.getPropertyValue('padding-left') || '0px',
    };
    const styles = collectComputed(target);
    const tokenHits = mapTokens(styles, tokens || {} as any);
    const tokenKeys = [
      ...Object.values(tokenHits.colors||{}).map(h=>h.token).filter(Boolean) as string[],
      ...Object.values(tokenHits.spacing||{}).map(h=>h.token).filter(Boolean) as string[],
      ...Object.values(tokenHits.typography||{}).map(h=>h.token).filter(Boolean) as string[],
      ...Object.values(tokenHits.elevation||{}).map(h=>h.token).filter(Boolean) as string[],
    ];
    const m: FrameMeta = {
      category, component, variant: variantName,
      bounds,
      padding,
      tokensUsed: Array.from(new Set(tokenKeys)),
      responsiveBreakpoints: { desktop: 1200, tablet: 834, mobile: 390 },
    };
    setMeta(m);
  },[category, component, variantName, tokens, showIntrinsic]);

  return (
    <div className="border border-border/40 rounded-lg overflow-hidden">
      <div className="bg-muted px-3 py-1 text-xs font-semibold border-b border-border/40">
        Atomic/{category}/{component}/{variantName}/{bpId}
      </div>
      <div className="p-4">
        <div className="mx-auto" style={{ width }}>
          <div ref={mountRef} className="bg-background border border-dashed border-border/40 rounded-md p-2">
            <div data-preview-root style={{ width: showIntrinsic ? 'auto' : '100%' }}>
              {render()}
            </div>
            {meta && (
              <details className="mt-2">
                <summary className="text-xs cursor-pointer">metadata.json</summary>
                <pre className="text-[10px] whitespace-pre-wrap">{JSON.stringify(meta, null, 2)}</pre>
              </details>
            )}
          </div>
        </div>
      </div>
      {meta && <MetadataBar meta={meta} />}
    </div>
  );
}
