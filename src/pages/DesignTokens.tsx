import React from 'react';
import { Text } from '@/components/atoms/Text';

const colorTokens = [
  { key: 'color-background', classBg: 'bg-background', sample: 'Background' },
  { key: 'color-card', classBg: 'bg-card', sample: 'Card' },
  { key: 'color-muted', classBg: 'bg-muted', sample: 'Muted' },
  { key: 'color-primary', classBg: 'bg-primary', sample: 'Primary' },
  { key: 'color-success', classBg: 'bg-[hsl(var(--success))]', sample: 'Success' },
  { key: 'color-border', classBg: 'bg-[hsl(var(--border))]', sample: 'Border' },
];

const spacing = [
  ['space-xxs',4],['space-xs',8],['space-sm',12],['space-md',16],['space-lg',24],['space-xl',32]
];

const typeScale = [
  { key: 'type-display-xl', style: 'text-[40px] leading-tight font-bold', px: 40, weight: 700, lh: 1.2, ls: 0 },
  { key: 'type-h1', style: 'text-[32px] leading-tight font-bold', px: 32, weight: 700, lh: 1.25, ls: 0 },
  { key: 'type-h2', style: 'text-2xl leading-snug font-bold', px: 24, weight: 700, lh: 1.3, ls: 0 },
  { key: 'type-body-lg', style: 'text-base leading-relaxed', px: 16, weight: 400, lh: 1.6, ls: 0 },
  { key: 'type-body', style: 'text-sm leading-relaxed', px: 14, weight: 400, lh: 1.6, ls: 0 },
  { key: 'type-caption', style: 'text-[11px] leading-tight font-semibold', px: 11, weight: 600, lh: 1.3, ls: 0 },
];

const elevations = [
  ['elevation-0','none','— use for flat elements'],
  ['elevation-1','0 1px 3px rgba(0,0,0,0.04)','small cards'],
  ['elevation-2','0 2px 8px rgba(0,0,0,0.06)','popovers'],
  ['elevation-3','0 4px 12px rgba(0,0,0,0.08)','cards'],
  ['elevation-4','0 8px 24px rgba(0,0,0,0.10)','drawers'],
  ['elevation-5','0 16px 32px rgba(0,0,0,0.16)','modals'],
];

export default function DesignTokens(){
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8 space-y-16">
      <header>
        <h1 className="type-h1">Design Tokens</h1>
        <a className="underline text-sm font-semibold" href="/design-tokens.manifest.json" download>Download design-tokens.manifest.json</a>
      </header>

      <section id="colors">
        <Text variant="h3" weight="bold" className="block mb-4">Colors</Text>
        <div className="grid grid-cols-12 gap-6">
          {colorTokens.map(({key,classBg,sample}) => (
            <div key={key} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className={`h-16 rounded-md ${classBg} text-foreground flex items-center justify-center mb-3`}>{sample}</div>
              <Text variant="caption" className="text-muted-foreground">{key}</Text>
            </div>
          ))}
        </div>
      </section>

      <section id="typography">
        <Text variant="h3" weight="bold" className="block mb-4">Typography Scale</Text>
        <div className="grid grid-cols-12 gap-6">
          {typeScale.map(t => (
            <div key={t.key} className="col-span-12 sm:col-span-6 lg:col-span-4 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className={t.style}>The quick brown fox</div>
              <Text variant="caption" className="text-muted-foreground">
                {t.key} • {t.px}px / {(t.px/16).toFixed(3)}rem • weight {t.weight} • lh {t.lh} • ls {t.ls}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section id="spacing">
        <Text variant="h3" weight="bold" className="block mb-4">Spacing Scale</Text>
        <div className="grid grid-cols-12 gap-6">
          {spacing.map(([name,val]) => (
            <div key={name as string} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className="h-6 bg-muted rounded mb-3" style={{ width: `${(val as number) * 3}px` }} />
              <Text variant="caption" className="text-muted-foreground">{name as string} = {val as number}px / {((val as number)/16).toFixed(3)}rem</Text>
            </div>
          ))}
        </div>
      </section>

      <section id="layout">
        <Text variant="h3" weight="bold" className="block mb-4">Layout Grid</Text>
        <div className="bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <ul className="list-disc pl-6 text-sm">
            <li>Canvas width: 1440px</li>
            <li>Grid: 12 columns</li>
            <li>Gutter: 24px</li>
            <li>Outer margin: 24px</li>
            <li>Containers: wide 1200px, default 960px, narrow 720px</li>
          </ul>
        </div>
      </section>

      <section id="elevation">
        <Text variant="h3" weight="bold" className="block mb-4">Elevation & Shadows</Text>
        <div className="grid grid-cols-12 gap-6">
          {elevations.map(([name,css,use]) => (
            <div key={name as string} className="col-span-12 sm:col-span-6 lg:col-span-4 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className="h-16 rounded-md bg-background mb-3" style={{ boxShadow: css as string }} />
              <Text variant="caption" className="text-muted-foreground">{name as string} — {css as string} — {use as string}</Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
