import React, { useMemo } from 'react';
import { registry, getGroupedRegistry } from '@/design-system/catalogRegistry';
import { PreviewFrame } from './PreviewUtils';
import { Text } from '@/components/atoms/Text';

export function PreviewAtoms(){
  const groups = useMemo(()=> getGroupedRegistry(), []);
  const items = groups['Atom'] || [];
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-10" id="atoms">
      <h1 className="text-2xl font-bold">Preview — Atoms</h1>
      {items.map(meta => (
        <section key={meta.name} className="space-y-4">
          <Text variant="body" weight="bold">{meta.name}</Text>
          {(meta.variants||[]).map(v=> (
            <PreviewFrame key={v.name} category={meta.category} component={meta.name} variantName={v.name} render={v.render} frameId={`Atomic-${meta.category}-${meta.name}-${v.name}`} clippedToggle />
          ))}
        </section>
      ))}
    </div>
  );
}

export function PreviewMolecules(){
  const groups = useMemo(()=> getGroupedRegistry(), []);
  const items = groups['Molecule'] || [];
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-10" id="molecules">
      <h1 className="text-2xl font-bold">Preview — Molecules</h1>
      {items.map(meta => (
        <section key={meta.name} className="space-y-4">
          <Text variant="body" weight="bold">{meta.name}</Text>
          {(meta.variants||[]).map(v=> (
            <PreviewFrame key={v.name} category={meta.category} component={meta.name} variantName={v.name} render={v.render} frameId={`Atomic-${meta.category}-${meta.name}-${v.name}`} clippedToggle />
          ))}
        </section>
      ))}
    </div>
  );
}

export function PreviewOrganisms(){
  const groups = useMemo(()=> getGroupedRegistry(), []);
  const items = groups['Organism'] || [];
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-10" id="organisms">
      <h1 className="text-2xl font-bold">Preview — Organisms</h1>
      {items.map(meta => (
        <section key={meta.name} className="space-y-4">
          <Text variant="body" weight="bold">{meta.name}</Text>
          {(meta.variants||[]).map(v=> (
            <PreviewFrame key={v.name} category={meta.category} component={meta.name} variantName={v.name} render={v.render} frameId={`Atomic-${meta.category}-${meta.name}-${v.name}`} clippedToggle />
          ))}
        </section>
      ))}
    </div>
  );
}

export function PreviewScreens(){
  const items = registry.filter(r=> r.category === 'Page');
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-10" id="screens">
      <h1 className="text-2xl font-bold">Preview — Screens</h1>
      {items.map(meta => (
        <section key={meta.name} className="space-y-4">
          <Text variant="body" weight="bold">{meta.name}</Text>
          {(meta.variants||[]).map(v=> (
            <PreviewFrame key={v.name} category={meta.category} component={meta.name} variantName={v.name} render={v.render} frameId={`Atomic-${meta.category}-${meta.name}-${v.name}`} />
          ))}
        </section>
      ))}
    </div>
  );
}

export function PreviewTokens(){
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-6" id="tokens">
      <h1 className="text-2xl font-bold">Preview — Tokens</h1>
      <p className="text-sm text-muted-foreground">See /design-system/tokens for comprehensive tokens. This page shows live swatches used in previews.</p>
      <div className="grid grid-cols-6 gap-4">
        {['primary','success','muted','border','card','foreground'].map(c=> (
          <div key={c} className="p-4 rounded-lg border border-border/40">
            <div className={`h-16 rounded-md bg-${c}`} />
            <div className="mt-2 text-xs">color-{c}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PreviewIndex(){
  const items = useMemo(()=> registry.flatMap(r=> (r.variants||[]).map(v=> ({
    category: r.category, component: r.name, variant: v.name,
    link: `/previews/${r.category.toLowerCase()}#Atomic-${r.category}-${r.name}-${v.name}`
  }))), []);
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Preview Index</h1>
        <nav className="text-sm flex gap-3">
          <a className="underline" href="/previews/atoms">Atoms</a>
          <a className="underline" href="/previews/molecules">Molecules</a>
          <a className="underline" href="/previews/organisms">Organisms</a>
          <a className="underline" href="/previews/screens">Screens</a>
          <a className="underline" href="/previews/tokens">Tokens</a>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <a key={i} href={it.link} className="block p-4 border border-border/40 rounded-lg hover:border-border">
            <div className="text-sm font-semibold">{it.category} / {it.component} / {it.variant}</div>
            <div className="text-xs text-muted-foreground">Desktop preview</div>
          </a>
        ))}
      </div>
    </div>
  );
}
