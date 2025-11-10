import React from 'react';
import { Text } from '@/components/atoms/Text';

const colorTokens = [
  ['background','bg-background','text-foreground'],
  ['card','bg-card','text-card-foreground'],
  ['muted','bg-muted','text-foreground'],
  ['primary','bg-primary','text-primary-foreground'],
  ['success','bg-[hsl(var(--success))]','text-white'],
  ['border','bg-[hsl(var(--border))]','text-foreground'],
];

const spacing = [
  ['space-xxs',4],['space-xs',8],['space-sm',12],['space-md',16],['space-lg',24]
];

const typeTokens = [
  ['type-h1','text-4xl font-bold'],
  ['type-h2','text-2xl font-bold'],
  ['type-body','text-sm'],
  ['type-caption','text-xs font-semibold'],
];

export default function DesignTokens(){
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8 space-y-10">
      <header>
        <h1 className="type-h1">Design Tokens</h1>
      </header>

      <section>
        <Text variant="h3" weight="bold" className="block mb-4">Colors</Text>
        <div className="grid grid-cols-12 gap-6">
          {colorTokens.map(([name,bg,txt]) => (
            <div key={name as string} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className={`h-16 rounded-md ${bg as string} ${txt as string} flex items-center justify-center mb-3`}>{name as string}</div>
              <Text variant="caption" className="text-muted-foreground">{name as string}</Text>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text variant="h3" weight="bold" className="block mb-4">Spacing</Text>
        <div className="grid grid-cols-12 gap-6">
          {spacing.map(([name,val]) => (
            <div key={name as string} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className="h-6 bg-muted rounded mb-3" style={{ width: `${val as number * 2}px` }} />
              <Text variant="caption" className="text-muted-foreground">{name as string} = {val as number}px</Text>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text variant="h3" weight="bold" className="block mb-4">Typography</Text>
        <div className="grid grid-cols-12 gap-6">
          {typeTokens.map(([name,cls]) => (
            <div key={name as string} className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card border border-border/30 rounded-xl p-4 shadow-sm">
              <div className={cls as string}>The quick brown fox</div>
              <Text variant="caption" className="text-muted-foreground">{name as string}</Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
