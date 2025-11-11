import React from 'react';
import { getGroupedRegistry } from '@/design-system/catalogRegistry';
import { Text } from '@/components/atoms/Text';

export default function DesignSystemCatalogOverview(){
  const groups = getGroupedRegistry();
  const counts = {
    atoms: groups.Atom.length,
    molecules: groups.Molecule.length,
    organisms: groups.Organism.length,
    templates: groups.Template.length,
    pages: groups.Page.length,
  };

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-8">
      <header className="mb-8">
        <h1 className="type-h1">Design System Catalog — Project</h1>
        <Text variant="body" className="text-muted-foreground">Component Overview</Text>
      </header>

      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 md:col-span-3 bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <Text variant="h3" weight="bold">Atoms</Text>
          <Text variant="body" className="text-muted-foreground">{counts.atoms} components</Text>
          <a href="/design-system/catalog-all#Atom" className="text-sm font-semibold underline">Open section</a>
        </div>
        <div className="col-span-12 md:col-span-3 bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <Text variant="h3" weight="bold">Molecules</Text>
          <Text variant="body" className="text-muted-foreground">{counts.molecules} components</Text>
          <a href="/design-system/catalog-all#Molecule" className="text-sm font-semibold underline">Open section</a>
        </div>
        <div className="col-span-12 md:col-span-2 bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <Text variant="h3" weight="bold">Organisms</Text>
          <Text variant="body" className="text-muted-foreground">{counts.organisms} components</Text>
          <a href="/design-system/catalog-all#Organism" className="text-sm font-semibold underline">Open section</a>
        </div>
        <div className="col-span-12 md:col-span-2 bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <Text variant="h3" weight="bold">Templates</Text>
          <Text variant="body" className="text-muted-foreground">{counts.templates} components</Text>
          <a href="/design-system/catalog-all#Template" className="text-sm font-semibold underline">Open section</a>
        </div>
        <div className="col-span-12 md:col-span-2 bg-card border border-border/30 rounded-xl p-6 shadow-sm">
          <Text variant="h3" weight="bold">Pages</Text>
          <Text variant="body" className="text-muted-foreground">{counts.pages} components</Text>
          <a href="/design-system/catalog-all#Page" className="text-sm font-semibold underline">Open section</a>
        </div>
      </div>

      <div className="bg-card border border-border/30 rounded-xl p-6 shadow-sm">
        <Text variant="h3" weight="bold" className="block mb-2">Pages</Text>
        <ul className="list-disc pl-6">
          <li><a className="underline" href="/design-system/catalog-all">All Components</a></li>
          <li><a className="underline" href="/design-system/tokens">Design Tokens</a></li>
          <li><a className="underline" href="/design-system/catalog-index">Catalog Index (JSON)</a></li>
        </ul>
      </div>
    </div>
  );
}
