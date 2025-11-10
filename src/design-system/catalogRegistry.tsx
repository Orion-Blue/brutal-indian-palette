import React from 'react';
import { Text } from '@/components/atoms/Text';
import { Avatar } from '@/components/atoms/Avatar';
import { IconButton } from '@/components/atoms/IconButton';
import { StatusIndicator } from '@/components/atoms/StatusIndicator';
import { BalanceCard } from '@/components/molecules/BalanceCard';
import { QuickAction } from '@/components/molecules/QuickAction';
import { TransactionItem } from '@/components/molecules/TransactionItem';
import { QuickActionsGrid } from '@/components/organisms/QuickActionsGrid';
import { TransactionList } from '@/components/organisms/TransactionList';
import BottomNav from '@/components/BottomNav';
import { Header } from '@/components/organisms/Header';
import { spacing, typography, colors, TokenUsage } from './tokens';
import { Bell, Scan, Send, ArrowDownToLine, Settings } from 'lucide-react';

export type Category = 'Atom' | 'Molecule' | 'Organism';

export type Variant = {
  name: string;
  render: () => React.ReactNode;
};

export type ComponentMeta = {
  category: Category;
  name: string;
  component: React.ComponentType<any> | null;
  variants?: Variant[];
  sizes?: string[];
  states?: string[];
  props?: { name: string; type: string; default?: string }[];
  tokens?: TokenUsage;
  accessibility?: string[];
  usageNotes?: string[];
  jsxExample?: string;
};

export const registry: ComponentMeta[] = [
  {
    category: 'Atom',
    name: 'Text',
    component: Text as any,
    variants: [
      { name: 'Body', render: () => <Text>Body text</Text> },
      { name: 'Caption', render: () => <Text variant="caption" weight="semibold">Caption</Text> },
      { name: 'H2', render: () => <Text variant="h2" weight="bold">Heading H2</Text> },
    ],
    sizes: ['n/a'],
    states: ['default'],
    props: [
      { name: 'variant', type: 'display|h1|h2|h3|h4|body-large|body|body-small|caption|micro', default: 'body' },
      { name: 'weight', type: 'normal|medium|semibold|bold', default: 'normal' },
      { name: 'className', type: 'string' },
      { name: 'style', type: 'CSSProperties' },
    ],
    tokens: { typography: ['type-h2', 'type-body', 'type-caption'], colors: ['foreground', 'muted-foreground'] },
    accessibility: ['Semantic role is text; inherits from parent'],
    usageNotes: ['Use for all typography; avoid hardcoded font sizes.'],
    jsxExample: '<Text variant="h2" weight="bold">Heading</Text>',
  },
  {
    category: 'Atom',
    name: 'Avatar',
    component: Avatar as any,
    variants: [
      { name: 'MD', render: () => <Avatar initial="A" color="hsl(217, 91%, 60%)" size="md" /> },
      { name: 'LG', render: () => <Avatar initial="R" color="hsl(48, 100%, 50%)" size="lg" /> },
      { name: 'XL', render: () => <Avatar initial="S" color="hsl(142, 71%, 45%)" size="xl" /> },
    ],
    sizes: ['sm', 'md', 'lg', 'xl'],
    states: ['default'],
    props: [
      { name: 'initial', type: 'string' },
      { name: 'color', type: 'string (HSL/hex)' },
      { name: 'size', type: 'sm|md|lg|xl', default: 'md' },
      { name: 'className', type: 'string' },
    ],
    tokens: { colors: ['primary', 'accent-blue', 'accent-green'] },
    accessibility: ['role="img" via div; ensure alt is nearby as text label if required'],
    usageNotes: ['Use initials; supply accessible name via surrounding text.'],
    jsxExample: '<Avatar initial="RK" color="hsl(48, 100%, 50%)" size="xl" />',
  },
  {
    category: 'Atom',
    name: 'IconButton',
    component: IconButton as any,
    variants: [
      { name: 'Default', render: () => <IconButton icon={Bell} aria-label="Notifications" /> },
      { name: 'Ghost', render: () => <IconButton icon={Bell} variant="ghost" aria-label="Notifications" /> },
      { name: 'Primary', render: () => <IconButton icon={Bell} variant="primary" aria-label="Notifications" /> },
    ],
    sizes: ['sm', 'md', 'lg'],
    states: ['default', 'hover', 'active', 'focus'],
    props: [
      { name: 'icon', type: 'LucideIcon' },
      { name: 'variant', type: 'default|ghost|primary', default: 'default' },
      { name: 'size', type: 'sm|md|lg', default: 'md' },
      { name: 'onClick', type: '() => void' },
    ],
    tokens: { colors: ['card','muted','primary'], spacing: ['space-sm'], typography: ['type-caption'] },
    accessibility: ['Button with aria-label; focus ring present'],
    usageNotes: ['Use for icon-only actions; always provide aria-label.'],
    jsxExample: '<IconButton icon={Bell} aria-label="Notifications" />',
  },
  {
    category: 'Atom',
    name: 'StatusIndicator',
    component: StatusIndicator as any,
    variants: [
      { name: 'Active', render: () => <StatusIndicator status="active" size="sm" /> },
      { name: 'Inactive', render: () => <StatusIndicator status="inactive" size="sm" /> },
      { name: 'Pending', render: () => <StatusIndicator status="pending" size="sm" /> },
    ],
    sizes: ['sm', 'md', 'lg'],
    states: ['default'],
    props: [
      { name: 'status', type: 'active|inactive|pending' },
      { name: 'size', type: 'sm|md|lg', default: 'md' },
    ],
    tokens: { colors: ['success','muted-foreground','brand-yellow'] },
    accessibility: ['Decorative; pair with text for meaning'],
    usageNotes: ['Never convey state by color alone.'],
    jsxExample: '<StatusIndicator status="active" size="sm" />',
  },
  {
    category: 'Molecule',
    name: 'BalanceCard',
    component: BalanceCard as any,
    variants: [
      {
        name: 'Default',
        render: () => (
          <BalanceCard
            balance={12450}
            label="Total Balance"
            accountNumber="XXXX - 5689"
            type="VIRTUAL"
            validThru="07/29"
            status="ACTIVE"
            backgroundColor="hsl(48, 100%, 50%)"
            textColor="#141414"
          />
        ),
      },
    ],
    sizes: ['responsive'],
    states: ['default','toggle-visible'],
    props: [
      { name: 'balance', type: 'number' },
      { name: 'label', type: 'string' },
      { name: 'accountNumber', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'validThru', type: 'string' },
      { name: 'status', type: 'string' },
      { name: 'backgroundColor', type: 'string' },
      { name: 'textColor', type: 'string' },
    ],
    tokens: { colors: ['primary','foreground','border'], spacing: ['space-md','space-lg'] },
    accessibility: ['Eye button toggles content visibility; button has aria-label'],
    usageNotes: ['Avoid placing sensitive info without toggle; prefer masked by default.'],
    jsxExample: '<BalanceCard balance={12450} label="Total Balance" accountNumber="XXXX - 5689" type="VIRTUAL" validThru="07/29" status="ACTIVE" backgroundColor="hsl(48, 100%, 50%)" />',
  },
  {
    category: 'Molecule',
    name: 'QuickAction',
    component: QuickAction as any,
    variants: [
      { name: 'Scan', render: () => <QuickAction icon={Scan} label="Scan" color="hsl(48, 100%, 50%)" /> },
      { name: 'Pay', render: () => <QuickAction icon={Send} label="Pay" color="hsl(217, 91%, 60%)" /> },
      { name: 'Receive', render: () => <QuickAction icon={ArrowDownToLine} label="Receive" color="hsl(142, 71%, 45%)" /> },
    ],
    sizes: ['responsive'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'icon', type: 'LucideIcon' },
      { name: 'label', type: 'string' },
      { name: 'color', type: 'string' },
    ],
    tokens: { colors: ['card','border','primary'], spacing: ['space-sm','space-md'] },
    accessibility: ['Button label visible; focus ring on keyboard'],
    usageNotes: ['Short, frequent actions; use concise labels.'],
    jsxExample: '<QuickAction icon={Send} label="Pay" color="hsl(217, 91%, 60%)" />',
  },
  {
    category: 'Molecule',
    name: 'TransactionItem',
    component: TransactionItem as any,
    variants: [
      { name: 'Negative', render: () => <TransactionItem name="Swiggy" type="Payment" amount="₹340" date="Today" initial="S" color="hsl(6, 93%, 71%)" isPositive={false} /> },
      { name: 'Positive', render: () => <TransactionItem name="Salary" type="Received" amount="₹45,000" date="Today" initial="S" color="hsl(142, 71%, 45%)" isPositive /> },
    ],
    sizes: ['responsive'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'amount', type: 'string' },
      { name: 'date', type: 'string' },
      { name: 'initial', type: 'string' },
      { name: 'color', type: 'string' },
      { name: 'isPositive', type: 'boolean', default: 'false' },
    ],
    tokens: { colors: ['foreground','success'], spacing: ['space-sm'] },
    accessibility: ['Whole row is a button; ensure descriptive name (merchant + amount) when needed'],
    usageNotes: ['Amounts include sign; long names truncate.'],
    jsxExample: '<TransactionItem name="Swiggy" type="Payment" amount="₹340" date="Today" initial="S" color="hsl(6, 93%, 71%)" />',
  },
  {
    category: 'Organism',
    name: 'QuickActionsGrid',
    component: QuickActionsGrid as any,
    variants: [
      { name: 'Default', render: () => (
        <QuickActionsGrid actions={[
          { icon: Scan, label: 'Scan', color: 'hsl(48, 100%, 50%)' },
          { icon: Send, label: 'Pay', color: 'hsl(217, 91%, 60%)' },
          { icon: ArrowDownToLine, label: 'Receive', color: 'hsl(142, 71%, 45%)' },
        ]} />
      ) },
    ],
    sizes: ['responsive'],
    states: ['default'],
    props: [
      { name: 'actions', type: 'Array<{ icon: LucideIcon; label: string; color: string; onClick?: () => void }>' },
    ],
    tokens: { spacing: ['space-md'] },
    accessibility: ['Grid of buttons; each child has accessible name'],
    usageNotes: ['Keep actions to three for balance.'],
    jsxExample: '<QuickActionsGrid actions={[{ icon: Scan, label: "Scan", color: "hsl(48, 100%, 50%)" }]} />',
  },
  {
    category: 'Organism',
    name: 'TransactionList',
    component: TransactionList as any,
    variants: [
      { name: 'Default', render: () => (
        <TransactionList
          title="Recent Transactions"
          transactions={[
            { id: '1', name: 'Swiggy', type: 'Payment', amount: '₹340', date: 'Today', initial: 'S', color: 'hsl(6, 93%, 71%)' },
            { id: '2', name: 'Salary', type: 'Received', amount: '₹45,000', date: 'Yesterday', initial: 'S', color: 'hsl(142, 71%, 45%)', isPositive: true },
          ]}
        />
      ) },
    ],
    sizes: ['responsive'],
    states: ['default'],
    props: [
      { name: 'title', type: 'string' },
      { name: 'transactions', type: 'Array<Transaction>' },
      { name: 'onTransactionClick', type: '(id: string) => void' },
    ],
    tokens: { spacing: ['space-sm'], typography: ['type-body'] },
    accessibility: ['List of interactive rows with names and amounts'],
    usageNotes: ['Use with stable keys; keep rows tappable.'],
    jsxExample: '<TransactionList title="Recent Transactions" transactions={[...]} />',
  },
  {
    category: 'Organism',
    name: 'Header',
    component: Header as any,
    variants: [
      { name: 'Title', render: () => <Header title="Page Title" /> },
      { name: 'Title+Subtitle', render: () => <Header title="Send Money" subtitle="Find a contact" /> },
      { name: 'WithBack', render: () => <Header title="Send Money" showBack /> },
      { name: 'WithAction', render: () => <Header title="Profile" rightAction={<button className="rounded-xl px-4 h-10 bg-card border border-border/30 text-sm font-semibold">UPI ID</button>} /> },
    ],
    sizes: ['responsive'],
    states: ['default','focus'],
    props: [
      { name: 'title', type: 'string' },
      { name: 'subtitle', type: 'string' },
      { name: 'rightAction', type: 'ReactNode' },
      { name: 'showBack', type: 'boolean', default: 'false' },
    ],
    tokens: { spacing: ['space-md'], typography: ['type-h2','type-caption'] },
    accessibility: ['Back button is focusable; semantic header element'],
    usageNotes: ['Use as page-level header for screens.'],
    jsxExample: '<Header title="Profile" rightAction={<IconButton icon={Settings}/>} />',
  },
  {
    category: 'Organism',
    name: 'Footer',
    component: BottomNav as any,
    variants: [
      { name: 'Default', render: () => <div className="relative h-[120px] w-full"><div className="absolute inset-x-0 bottom-0"><BottomNav /></div></div> },
    ],
    sizes: ['responsive'],
    states: ['default'],
    props: [
      { name: 'n/a', type: '—' },
    ],
    tokens: { colors: ['card','border','primary'], spacing: ['space-sm'] },
    accessibility: ['Nav with 5 buttons; active state visible'],
    usageNotes: ['Treat as app footer for Figma export; framed to fit card without cropping'],
    jsxExample: '<BottomNav />',
  },
  {
    category: 'Organism',
    name: 'HomeHero',
    component: null,
    variants: [
      { name: 'Default', render: () => (
        <div className="w-full">
          <div className="relative">
            <div className="absolute top-2 left-2 right-2 h-36 bg-[hsl(var(--accent-purple))]/90 rounded-3xl shadow-md opacity-40 -z-10" />
            <div className="absolute top-4 left-4 right-4 h-36 bg-[hsl(var(--accent-blue))]/90 rounded-3xl shadow-md opacity-60 -z-10" />
            <BalanceCard
              balance={12450}
              label="Total Balance"
              accountNumber="XXXX - 5689"
              type="VIRTUAL"
              validThru="07/29"
              status="ACTIVE"
              backgroundColor="hsl(48, 100%, 50%)"
              textColor="#141414"
            />
            <div className="flex justify-center gap-1.5 mt-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]" />
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--muted-foreground))]/30" />
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--muted-foreground))]/30" />
            </div>
          </div>
        </div>
      )}
    ],
    sizes: ['responsive'],
    states: ['default'],
    props: [],
    tokens: { colors: ['primary','accent-blue','accent-purple'], spacing: ['space-md'] },
    accessibility: ['Dots are decorative in preview'],
    usageNotes: ['Represents the stacked card hero area of Home'],
    jsxExample: '<HomeHero />',
  },
  {
    category: 'Organism',
    name: 'StatsSection',
    component: null,
    variants: [
      { name: 'Default', render: () => (
        <div className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-3xl p-6 shadow-card">
          <div className="mb-6">
            <Text variant="body-small" className="text-muted-foreground block mb-2">Total Spending</Text>
            <Text variant="h1" weight="bold" className="text-foreground block mb-1">₹12,450</Text>
            <div className="flex items-center gap-2">
              <div className="bg-[hsl(var(--accent-green))]/15 rounded-full px-3 py-1">
                <Text variant="micro" weight="bold" className="text-[hsl(var(--accent-green))]">↓ 12% less than last month</Text>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {['Food & Dining','Shopping','Transport'].map((label,i)=> (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"><Text variant="body">{['🍔','🛒','🚗'][i]}</Text></div>
                  <div>
                    <Text variant="body" weight="semibold" className="text-foreground block">{label}</Text>
                    <Text variant="body-small" className="text-muted-foreground">{[32,28,18][i]}% of budget</Text>
                  </div>
                </div>
                <Text variant="body" weight="bold" className="text-foreground">{['₹3,980','₹3,486','₹2,241'][i]}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    ],
    sizes: ['responsive'],
    states: ['default'],
    props: [],
    tokens: { spacing: ['space-sm','space-md'], typography: ['type-body','type-caption'] },
    accessibility: ['Static preview of a data section'],
    usageNotes: ['Use for spending overview'],
    jsxExample: '<StatsSection />',
  },
];

export function getGroupedRegistry(){
  const groups: Record<'Atom'|'Molecule'|'Organism', ComponentMeta[]> = { Atom: [], Molecule: [], Organism: [] };
  for(const item of registry){ groups[item.category].push(item); }
  return groups;
}

export function manifest(basePreviewUrl: string){
  const items = registry.map(r => ({
    category: r.category,
    name: r.name,
    variants: (r.variants||[]).map(v => v.name),
    sizes: r.sizes || [],
    tokens: r.tokens || {},
    previewUrl: `${basePreviewUrl}#${encodeURIComponent(`${r.category}-${r.name}`)}`,
  }));
  return { project: 'App', count: items.length, items };
}
