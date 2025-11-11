import React, { useMemo, useState } from 'react';
import { getGroupedRegistry, registry } from '@/design-system/catalogRegistry';
import { Text } from '@/components/atoms/Text';
import { cn } from '@/lib/utils';

function Card({ title, subtitle, children, id }: { title: string; subtitle: string; children: React.ReactNode; id: string; }){
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="bg-card/80 border border-border/30 rounded-2xl shadow-card p-6">
      <div className="flex items-baseline justify-between mb-4 gap-4">
        <Text id={`${id}-label`} variant="body" weight="bold" className="text-foreground">
          {title}
        </Text>
        <Text variant="caption" className="text-muted-foreground">{subtitle}</Text>
      </div>
      <div className="w-full h-full flex items-center justify-center">{children}</div>
    </section>
  );
}

function ComponentCard({ category, name, variants, sizes, states, meta, jsxExample }:{
  category: string; name: string; variants: { name: string; render: () => React.ReactNode }[]; sizes?: string[]; states?: string[]; meta?: any; jsxExample?: string;
}){
  const [open, setOpen] = useState(false);
  const frameBase = `Atomic/${category}/${name}`;

  return (
    <div className="h-full min-h-[320px] flex flex-col bg-secondary/50 border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all p-6 space-y-4 overflow-visible" role="group" aria-label={`${name} component card`} data-frame-name={`${frameBase}/Card`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Text variant="body" weight="bold">{category} / {name}</Text>
          <button className="text-xs font-semibold px-2 py-1 rounded-md bg-muted hover:bg-muted/70" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>
            {open ? 'Hide details' : 'View details'}
          </button>
        </div>
        <Text variant="caption" className="text-muted-foreground">
          Variants: {(variants||[]).map(v=>v.name).join(', ') || '—'} • Sizes: {(sizes||[]).join(', ')||'—'} • States: {(states||[]).join(', ')||'—'}
        </Text>
      </div>

      <div className="flex flex-wrap items-baseline gap-4" aria-label="Variant previews">
        {(variants||[]).map(v => (
          <div key={v.name} className="bg-card border border-border/30 rounded-xl p-4 shadow-sm flex-1 min-w-[220px] overflow-hidden" data-frame-name={`${frameBase}/${v.name}/Default`} aria-label={`${name} ${v.name} preview`}>
            <div className="mb-2 flex items-baseline justify-between"><Text variant="caption" weight="semibold" className="text-muted-foreground">{v.name}</Text></div>
            <div className="flex items-center justify-center min-h-[120px] w-full overflow-hidden">
              <div className="max-w-full w-full flex items-center justify-center">{v.render()}</div>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="bg-card border border-border/30 rounded-xl p-4 space-y-3 overflow-hidden">
          <Text variant="caption" weight="bold" className="text-muted-foreground">Code snippet</Text>
          <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto"><code>{jsxExample || '<!-- No example -->'}</code></pre>
          <Text variant="caption" weight="bold" className="text-muted-foreground">Props</Text>
          <ul className="list-disc pl-6 text-xs">
            {(meta?.props||[]).map((p:any)=> (
              <li key={p.name}><strong>{p.name}</strong>: {p.type}{p.default?` (default: ${p.default})`:''}</li>
            ))}
          </ul>
          {meta?.tokens && (
            <>
              <Text variant="caption" weight="bold" className="text-muted-foreground">Tokens used</Text>
              <div className="text-xs">{['spacing','typography','colors'].map(k=> meta.tokens[k]?.length? (<div key={k}><strong>{k}:</strong> {meta.tokens[k].join(', ')}</div>): null)}</div>
            </>
          )}
          {meta?.accessibility?.length ? (
            <>
              <Text variant="caption" weight="bold" className="text-muted-foreground">Accessibility</Text>
              <ul className="list-disc pl-6 text-xs">{meta.accessibility.map((a:string,i:number)=>(<li key={i}>{a}</li>))}</ul>
            </>
          ): null}
          {meta?.usageNotes?.length ? (
            <>
              <Text variant="caption" weight="bold" className="text-muted-foreground">Notes</Text>
              <ul className="list-disc pl-6 text-xs">{meta.usageNotes.map((a:string,i:number)=>(<li key={i}>{a}</li>))}</ul>
            </>
          ): null}
        </div>
      )}
    </div>
  );
}

export default function DesignSystemCatalogAll(){
  const groups = useMemo(()=>getGroupedRegistry(),[]);

  return (
    <div className="w-full bg-background text-foreground">
      <header className="w-full border-b border-border/30 bg-card sticky top-0 z-10">
        <div className="mx-auto max-w-[1440px] px-6 py-5 flex items-center justify-between">
          <h1 className="type-h1">Design System Catalog — Project</h1>
          <a href="#" className="text-sm font-semibold underline">Catalog Index</a>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-8 grid grid-cols-[260px_1fr] gap-6">
        {/* Sticky left nav */}
        <nav className="h-full sticky top-20 self-start bg-card border border-border/30 rounded-xl p-4 shadow-sm">
          <Text variant="caption" weight="bold" className="block mb-3 text-muted-foreground">Sections</Text>
          <ul className="space-y-2">
            <li><a href="#Atom" className="text-sm font-semibold hover:underline">Atoms</a></li>
            <li><a href="#Molecule" className="text-sm font-semibold hover:underline">Molecules</a></li>
            <li><a href="#Organism" className="text-sm font-semibold hover:underline">Organisms</a></li>
            <li><a href="#Template" className="text-sm font-semibold hover:underline">Templates</a></li>
            <li><a href="#Page" className="text-sm font-semibold hover:underline">Pages</a></li>
          </ul>
        </nav>

        <div className="space-y-16">
          {(['Atom','Molecule','Organism','Template','Page'] as const).map((section, idx) => (
            <section key={section} id={section} aria-label={section} className={cn(idx>0 && 'pt-16 mt-16 border-t border-border/40', section==='Organism' && 'bg-muted/20 rounded-xl p-4') }>
              <div className="mb-6 mt-12"><h2 className="text-[32px] font-semibold">{section}</h2></div>
              <div className="grid grid-cols-12 gap-6 items-stretch content-start">
                {groups[section]?.map(meta => (
                  <div key={`${section}-${meta.name}`} id={`${section}-${meta.name}`} className="col-span-12 md:col-span-6 xl:col-span-4 h-full">
                    <ComponentCard
                      category={meta.category}
                      name={meta.name}
                      variants={meta.variants || []}
                      sizes={meta.sizes}
                      states={meta.states}
                      meta={meta}
                      jsxExample={meta.jsxExample}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
