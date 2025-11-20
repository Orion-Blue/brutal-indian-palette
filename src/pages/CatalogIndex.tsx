import React, { useMemo } from 'react';
import { manifest } from '@/design-system/catalogRegistry';

export default function CatalogIndex(){
  const base = typeof window !== 'undefined' ? `${window.location.origin}/design-system/catalog-all` : '';
  const data = useMemo(() => manifest(base), [base]);
  const json = JSON.stringify(data, null, 2);
  const href = `data:application/json;charset=utf-8,${encodeURIComponent(json)}`;
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8">
      <h1 className="type-h1 mb-4">Catalog Index</h1>
      <a download="catalog-index.json" href={href} className="inline-block bg-primary text-primary-foreground rounded-md px-4 py-2 font-bold shadow-md hover:shadow-lg">Download JSON</a>
      <pre className="mt-6 bg-card border border-border/30 rounded-xl p-4 shadow-sm overflow-auto text-xs"><code>{json}</code></pre>
    </div>
  );
}
