import React from 'react';
import { Text } from '@/components/atoms/Text';
import { Avatar } from '@/components/atoms/Avatar';
import { IconButton } from '@/components/atoms/IconButton';
import { StatusIndicator } from '@/components/atoms/StatusIndicator';
import { Badge } from '@/components/atoms/Badge';
import { BalanceCard } from '@/components/molecules/BalanceCard';
import { QuickAction } from '@/components/molecules/QuickAction';
import { TransactionItem } from '@/components/molecules/TransactionItem';
import { SearchBar } from '@/components/molecules/SearchBar';
import { StatCard } from '@/components/molecules/StatCard';
import { MenuItem } from '@/components/molecules/MenuItem';
import { ContactChip } from '@/components/molecules/ContactChip';
import { QuickActionsGrid } from '@/components/organisms/QuickActionsGrid';
import { TransactionList } from '@/components/organisms/TransactionList';
import BottomNav from '@/components/BottomNav';
import { Header } from '@/components/organisms/Header';
import { spacing, typography, colors, TokenUsage } from './tokens';
import { Bell, Scan, Send, ArrowDownToLine, Settings } from 'lucide-react';
import HomeScreen from '@/pages/HomeScreen';
import SendMoneyScreen from '@/pages/SendMoneyScreen';
import ProfileScreen from '@/pages/ProfileScreen';
import AnalyticsScreen from '@/pages/AnalyticsScreen';
import WalletScreen from '@/pages/WalletScreen';
import MessagesScreen from '@/pages/MessagesScreen';
import NotFound from '@/pages/NotFound';

export type Category = 'Atom' | 'Molecule' | 'Organism' | 'Template' | 'Page';

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
      { name: 'Micro', render: () => <Text variant="micro">Micro text (10px)</Text> },
      { name: 'Caption', render: () => <Text variant="caption" weight="semibold">Caption (12px)</Text> },
      { name: 'Body', render: () => <Text variant="body">Body text (14px)</Text> },
      { name: 'H2', render: () => <Text variant="h2" weight="bold">Heading H2 (20px)</Text> },
    ],
    sizes: ['micro', 'caption', 'body-sm', 'body', 'body-lg', 'h4', 'h3', 'h2', 'h1'],
    states: ['default', 'muted', 'disabled'],
    props: [
      { name: 'variant', type: 'display|h1|h2|h3|h4|body-large|body|body-small|caption|micro', default: 'body' },
      { name: 'weight', type: 'normal|medium|semibold|bold', default: 'normal' },
      { name: 'className', type: 'string' },
      { name: 'style', type: 'CSSProperties' },
    ],
    tokens: { typography: ['type-h1', 'type-h2', 'type-h3', 'type-h4', 'type-body-lg', 'type-body', 'type-body-sm', 'type-caption', 'type-micro'], colors: ['foreground', 'muted-foreground', 'destructive'] },
    accessibility: ['Semantic role is text; always use semantic HTML headings (h1-h6) in JSX when appropriate'],
    usageNotes: ['Use for all typography; avoid hardcoded font sizes. Typography scale uses 1.25 ratio optimized for mobile.'],
    jsxExample: '<Text variant="h2" weight="bold">Heading</Text>',
  },
  {
    category: 'Atom',
    name: 'Badge',
    component: Badge as any,
    variants: [
      { name: 'Default', render: () => <Badge>Badge</Badge> },
      { name: 'Success', render: () => <Badge variant="success">Success</Badge> },
      { name: 'Warning', render: () => <Badge variant="warning">Warning</Badge> },
      { name: 'Error', render: () => <Badge variant="error">Error</Badge> },
      { name: 'Active', render: () => <Badge variant="success" className="scale-105">Active State</Badge> },
    ],
    sizes: ['sm', 'md', 'lg'],
    states: ['default', 'hover', 'active', 'disabled'],
    props: [
      { name: 'variant', type: 'default|success|warning|error', default: 'default' },
      { name: 'className', type: 'string' },
    ],
    tokens: { colors: ['muted','success','brand-yellow','destructive','accent-green'], spacing: ['space-xs', 'space-sm'] },
    accessibility: ['Text content is announced; use meaningful labels. Color should never be the only indicator of status.'],
    usageNotes: ['Use for small status indicators or count badges. Ensure sufficient color contrast. Pair with icons for status clarity.'],
    jsxExample: '<Badge variant="success">Active</Badge>',
  },
  {
    category: 'Atom',
    name: 'Avatar',
    component: Avatar as any,
    variants: [
      { name: 'SM (32px)', render: () => <Avatar initial="A" color="hsl(217, 91%, 60%)" size="sm" /> },
      { name: 'MD (40px)', render: () => <Avatar initial="A" color="hsl(217, 91%, 60%)" size="md" /> },
      { name: 'LG (56px)', render: () => <Avatar initial="R" color="hsl(48, 100%, 50%)" size="lg" /> },
      { name: 'XL (72px)', render: () => <Avatar initial="S" color="hsl(142, 71%, 45%)" size="xl" /> },
    ],
    sizes: ['32px', '40px', '56px', '72px'],
    states: ['default', 'focus'],
    props: [
      { name: 'initial', type: 'string (1-2 chars)' },
      { name: 'color', type: 'string (HSL or hex)' },
      { name: 'size', type: 'sm|md|lg|xl', default: 'md' },
      { name: 'className', type: 'string' },
    ],
    tokens: { colors: ['primary', 'accent-blue', 'accent-green', 'accent-red', 'accent-purple', 'accent-orange', 'accent-pink'] },
    accessibility: ['role="img"; must have accompanying text label. Use initials of person\'s name.'],
    usageNotes: ['Use 1-2 letter initials. Pair with name text for accessibility. Colors should be vibrant and distinct on mobile.'],
    jsxExample: '<Avatar initial="RK" color="hsl(48, 100%, 50%)" size="lg" />',
  },
  {
    category: 'Atom',
    name: 'IconButton',
    component: IconButton as any,
    variants: [
      { name: 'Default', render: () => <IconButton icon={Bell} aria-label="Notifications" /> },
      { name: 'Ghost', render: () => <IconButton icon={Bell} variant="ghost" aria-label="Notifications" /> },
      { name: 'Primary', render: () => <IconButton icon={Bell} variant="primary" aria-label="Notifications" /> },
      { name: 'Disabled', render: () => <IconButton icon={Bell} variant="default" aria-label="Notifications" disabled /> },
    ],
    sizes: ['44px (touch-sm)', '48px (touch-md)', '56px (touch-lg)'],
    states: ['default', 'hover', 'active', 'focus', 'disabled'],
    props: [
      { name: 'icon', type: 'LucideIcon' },
      { name: 'variant', type: 'default|ghost|primary', default: 'default' },
      { name: 'size', type: 'sm|md|lg', default: 'md' },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'onClick', type: '() => void' },
      { name: 'aria-label', type: 'string' },
    ],
    tokens: { colors: ['card','muted','primary', 'muted-foreground'], spacing: ['space-sm'], borderRadius: ['radius-md', 'radius-lg'] },
    accessibility: ['REQUIRED: aria-label. Focus ring present. Min 44x44px touch target. Keyboard accessible.'],
    usageNotes: ['Always provide aria-label. Size should be 44px minimum for mobile (WCAG AA). Use for single icon actions.'],
    jsxExample: '<IconButton icon={Bell} aria-label="Notifications" size="md" />',
  },
  {
    category: 'Atom',
    name: 'StatusIndicator',
    component: StatusIndicator as any,
    variants: [
      { name: 'Active', render: () => <StatusIndicator status="active" size="md" /> },
      { name: 'Inactive', render: () => <StatusIndicator status="inactive" size="md" /> },
      { name: 'Pending', render: () => <StatusIndicator status="pending" size="md" /> },
    ],
    sizes: ['8px', '12px', '16px'],
    states: ['default', 'animated'],
    props: [
      { name: 'status', type: 'active|inactive|pending', default: 'active' },
      { name: 'size', type: 'sm|md|lg', default: 'md' },
    ],
    tokens: { colors: ['success','muted-foreground','brand-yellow','accent-green'], spacing: ['space-xs'] },
    accessibility: ['Purely decorative. MUST be paired with adjacent text describing the status (e.g. "Active" label). Never use color alone.'],
    usageNotes: ['Always pair with text label. Used for transaction status, account status, etc. Mobile-sized for visibility on small screens.'],
    jsxExample: '<StatusIndicator status="active" size="md" />',
  },
  {
    category: 'Molecule',
    name: 'SearchBar',
    component: SearchBar as any,
    variants: [
      { name: 'Default', render: () => <SearchBar placeholder="Search by name, number or UPI ID" /> },
      { name: 'With Focus', render: () => <SearchBar placeholder="Search..." className="ring-2 ring-primary" /> },
    ],
    sizes: ['full-width'],
    states: ['default','focus','active'],
    props: [
      { name: 'placeholder', type: 'string' },
      { name: 'value', type: 'string' },
      { name: 'onChange', type: '(value: string) => void' },
      { name: 'onSearchChange', type: '(value: string) => void' },
    ],
    tokens: { colors: ['card','border','ring','muted-foreground'], spacing: ['space-sm','space-md'], borderRadius: ['radius-md'] },
    accessibility: ['Input must have associated label or descriptive placeholder. 44px+ height for mobile touch.'],
    usageNotes: ['Mobile-optimized with 44px+ height. Use in headers/sections. Clear button recommended. Placeholder should be descriptive.'],
    jsxExample: '<SearchBar placeholder="Search by name, number or UPI ID" />',
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
      {
        name: 'Hidden Balance',
        render: () => (
          <BalanceCard
            balance={12450}
            label="Total Balance"
            accountNumber="XXXX - 5689"
            type="VIRTUAL"
            validThru="07/29"
            status="ACTIVE"
            backgroundColor="hsl(217, 91%, 60%)"
            textColor="#ffffff"
            showBalance={false}
          />
        ),
      },
    ],
    sizes: ['full-width mobile (360-412px)'],
    states: ['default','toggle-visible','hover'],
    props: [
      { name: 'balance', type: 'number' },
      { name: 'label', type: 'string' },
      { name: 'accountNumber', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'validThru', type: 'string' },
      { name: 'status', type: 'string' },
      { name: 'backgroundColor', type: 'string (HSL/hex)' },
      { name: 'textColor', type: 'string (hex)' },
      { name: 'showBalance', type: 'boolean', default: 'true' },
    ],
    tokens: { colors: ['primary','brand-yellow','accent-blue','accent-green','foreground','border'], spacing: ['space-md','space-lg'], borderRadius: ['radius-xl', 'radius-2xl'], shadows: ['shadow-card', 'shadow-elevated'] },
    accessibility: ['Eye/toggle button for visibility has aria-label="Show/Hide Balance". Swipe gesture discoverable with visual indicator (dots).'],
    usageNotes: ['Primary card component for balance display. Supports background color customization. Sensitive data hidden by default. Mobile-optimized with 16px padding and large touch targets.'],
    jsxExample: '<BalanceCard balance={12450} label="Total Balance" accountNumber="XXXX - 5689" backgroundColor="hsl(48, 100%, 50%)" />',
  },
  {
    category: 'Molecule',
    name: 'QuickAction',
    component: QuickAction as any,
    variants: [
      { name: 'Scan', render: () => <QuickAction icon={Scan} label="Scan" color="hsl(48, 100%, 50%)" /> },
      { name: 'Send', render: () => <QuickAction icon={Send} label="Send" color="hsl(217, 91%, 60%)" /> },
      { name: 'Receive', render: () => <QuickAction icon={ArrowDownToLine} label="Receive" color="hsl(142, 71%, 45%)" /> },
    ],
    sizes: ['56x56px icon, 13px label'],
    states: ['default','hover','active','focus','disabled'],
    props: [
      { name: 'icon', type: 'LucideIcon' },
      { name: 'label', type: 'string' },
      { name: 'color', type: 'string (HSL/hex)' },
      { name: 'onClick', type: '() => void' },
      { name: 'disabled', type: 'boolean', default: 'false' },
    ],
    tokens: { colors: ['card','border','brand-yellow','accent-blue','accent-green','accent-red','accent-purple','accent-orange','accent-pink'], spacing: ['space-sm','space-md'], borderRadius: ['radius-lg'] },
    accessibility: ['Button with visible label below icon. Focus ring visible. 56px minimum height for touch.'],
    usageNotes: ['Grid of 3-4 actions. Label under icon (12-13px). Icon size 24px. Vibrant colors for mobile prominence. Used in Quick Actions section of home screen.'],
    jsxExample: '<QuickAction icon={Send} label="Send" color="hsl(217, 91%, 60%)" />',
  },
  {
    category: 'Molecule',
    name: 'StatCard',
    component: StatCard as any,
    variants: [
      { name: 'Total Sent', render: () => <StatCard label="Total Sent" value="₹32,180" color="hsl(0, 84%, 60%)" icon="↑" /> },
      { name: 'Total Received', render: () => <StatCard label="Total Received" value="₹45,230" color="hsl(142, 71%, 45%)" icon="↓" /> },
    ],
    sizes: ['half-width mobile (170-190px)'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string (₹xxx)' },
      { name: 'color', type: 'string (HSL/hex)' },
      { name: 'icon', type: 'string (↑/↓/#)' },
      { name: 'onClick', type: '() => void' },
    ],
    tokens: { colors: ['card','muted','foreground','accent-red','accent-green'], spacing: ['space-md', 'space-lg'], borderRadius: ['radius-lg'], shadows: ['shadow-sm', 'shadow-card'] },
    accessibility: ['Card is a button; focus ring visible. Icon + label clearly indicate metric direction (sent/received).'],
    usageNotes: ['Used in 2-up or 4-up grids (e.g. Quick Stats section). Color indicates direction: red=sent, green=received. Mobile-optimized card with 16px padding.'],
    jsxExample: '<StatCard label="Total Sent" value="₹32,180" color="hsl(0, 84%, 60%)" icon="↑" />',
  },
  {
    category: 'Molecule',
    name: 'TransactionItem',
    component: TransactionItem as any,
    variants: [
      { name: 'Payment (Negative)', render: () => <TransactionItem name="Swiggy" type="Payment" amount="₹340" date="Today" initial="S" color="hsl(6, 93%, 71%)" isPositive={false} /> },
      { name: 'Received (Positive)', render: () => <TransactionItem name="Priya Sharma" type="Received" amount="₹1,000" date="Today" initial="P" color="hsl(340, 82%, 70%)" isPositive /> },
    ],
    sizes: ['full-width mobile row (56px height min)'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string (Payment|Received|Transfer)' },
      { name: 'amount', type: 'string (₹xxx)' },
      { name: 'date', type: 'string (Today|Yesterday|n days ago)' },
      { name: 'initial', type: 'string' },
      { name: 'color', type: 'string (HSL/hex)' },
      { name: 'isPositive', type: 'boolean', default: 'false' },
      { name: 'onClick', type: '() => void' },
    ],
    tokens: { colors: ['foreground','success','destructive','accent-pink','muted-foreground'], spacing: ['space-sm', 'space-md'], borderRadius: ['radius-lg'] },
    accessibility: ['Entire row is a button with role="button". Screen reader reads: "[name] - [type] - [amount] - [date]". Focus ring visible.'],
    usageNotes: ['Row item in transaction list. Avatar (40px) + content section. Long names truncate with ellipsis. Amount color indicates direction: red for payment, green for received. Min 56px height for touch.'],
    jsxExample: '<TransactionItem name="Swiggy" type="Payment" amount="₹340" date="Today" initial="S" color="hsl(6, 93%, 71%)" isPositive={false} />',
  },
  {
    category: 'Molecule',
    name: 'MenuItem',
    component: MenuItem as any,
    variants: [
      { name: 'Default', render: () => <MenuItem icon={Send} label="Payment Methods" value="UPI" /> },
      { name: 'With Icon Badge', render: () => <MenuItem icon={Send} label="Notifications" value="2" rightIcon={<Badge variant="success">2</Badge>} /> },
    ],
    sizes: ['full-width row (56px+ height)'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'icon', type: 'LucideIcon or React.ReactNode' },
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string or React.ReactNode' },
      { name: 'rightIcon', type: 'React.ReactNode' },
      { name: 'onClick', type: '() => void' },
    ],
    tokens: { colors: ['card','border','muted','muted-foreground'], spacing: ['space-md', 'space-lg'], borderRadius: ['radius-md'] },
    accessibility: ['Button row with visual focus ring. Icon decorative (aria-hidden). Label and value clearly separate.'],
    usageNotes: ['Settings menu item. Icon (24px) + label on left, value/arrow on right. Min 56px height. Used in Settings, Profile screens.'],
    jsxExample: '<MenuItem icon={Send} label="Payment Methods" value="UPI" />',
  },
  {
    category: 'Molecule',
    name: 'ContactChip',
    component: ContactChip as any,
    variants: [
      { name: 'Priya', render: () => <ContactChip name="Priya" initial="P" color="hsl(340, 82%, 70%)" /> },
      { name: 'Amit', render: () => <ContactChip name="Amit" initial="A" color="hsl(217, 91%, 60%)" /> },
      { name: 'Neha', render: () => <ContactChip name="Neha" initial="N" color="hsl(258, 90%, 66%)" /> },
    ],
    sizes: ['60-70px width, 80-90px with name'],
    states: ['default','hover','active','focus'],
    props: [
      { name: 'name', type: 'string' },
      { name: 'initial', type: 'string' },
      { name: 'color', type: 'string (HSL/hex)' },
      { name: 'onClick', type: '() => void' },
    ],
    tokens: { colors: ['accent-pink','accent-blue','accent-purple','accent-green','accent-red','accent-orange'], spacing: ['space-xs', 'space-sm'], borderRadius: ['radius-lg'] },
    accessibility: ['Button chip with avatar + name below. Focus ring visible. Touch target 44px minimum in grid context.'],
    usageNotes: ['Grid of 4-8 frequent contacts. Avatar (40px) centered, name below (13px). Vibrant colors for mobile prominence. Used in Send Money screen.'],
    jsxExample: '<ContactChip name="Amit" initial="A" color="hsl(217, 91%, 60%)" />',
  },
  {
    category: 'Organism',
    name: 'QuickActionsGrid',
    component: QuickActionsGrid as any,
    variants: [
      { name: '3 Actions', render: () => (
        <QuickActionsGrid actions={[
          { icon: Scan, label: 'Scan', color: 'hsl(48, 100%, 50%)' },
          { icon: Send, label: 'Send', color: 'hsl(217, 91%, 60%)' },
          { icon: ArrowDownToLine, label: 'Receive', color: 'hsl(142, 71%, 45%)' },
        ]} />
      ) },
    ],
    sizes: ['full-width mobile, 3-column grid'],
    states: ['default'],
    props: [
      { name: 'actions', type: 'Array<QuickAction>' },
    ],
    tokens: { spacing: ['space-md', 'space-lg'], borderRadius: ['radius-lg'] },
    accessibility: ['Grid of button items. Each QuickAction has aria-label and visible label.'],
    usageNotes: ['Typically 3 actions in a row for balance. Used below Balance Card on home screen. Even distribution.'],
    jsxExample: '<QuickActionsGrid actions={[{ icon: Scan, label: "Scan", color: "hsl(48, 100%, 50%)" }, ...]} />',
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
  {
    category: 'Template',
    name: 'AmountEntry',
    component: null,
    variants: [
      { name: 'Default', render: () => (
        <div className="w-[360px]">
          <div className="bg-card/80 border border-border/30 rounded-3xl p-6 shadow-card text-center">
            <div className="mb-2"><Text variant="caption" weight="semibold" className="text-muted-foreground">Enter Amount</Text></div>
            <Text variant="h1" weight="bold">₹1,000</Text>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {['100','500','1000','2000'].map(a => (<button key={a} className="bg-card border border-border/30 rounded-2xl py-3 text-sm font-semibold">₹{a}</button>))}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {['1','2','3','4','5','6','7','8','9','C','0','←'].map(k => (<button key={k} className="bg-card border border-border/30 rounded-2xl h-12 text-lg font-semibold">{k}</button>))}
            </div>
            <button className="w-full bg-primary text-primary-foreground rounded-2xl p-4 font-bold tracking-wide mt-4">SEND ₹1000</button>
          </div>
        </div>
      )}
    ],
    sizes: ['narrow'],
    states: ['default','disabled'],
    props: [],
    tokens: { spacing: ['space-sm','space-md'], colors: ['primary','border','card'] },
    accessibility: ['Buttons have focus outlines; numeric keypad accessible'],
    usageNotes: ['Template extracted from Send Money amount screen'],
    jsxExample: '<AmountEntry />',
  },
  {
    category: 'Page',
    name: 'HomeScreen',
    component: HomeScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><HomeScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<HomeScreen />'
  },
  {
    category: 'Page',
    name: 'SendMoneyScreen',
    component: SendMoneyScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><SendMoneyScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<SendMoneyScreen />'
  },
  {
    category: 'Page',
    name: 'ProfileScreen',
    component: ProfileScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><ProfileScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<ProfileScreen />'
  },
  {
    category: 'Page',
    name: 'AnalyticsScreen',
    component: AnalyticsScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><AnalyticsScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<AnalyticsScreen />'
  },
  {
    category: 'Page',
    name: 'WalletScreen',
    component: WalletScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><WalletScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<WalletScreen />'
  },
  {
    category: 'Page',
    name: 'MessagesScreen',
    component: MessagesScreen as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><MessagesScreen /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<MessagesScreen />'
  },
  {
    category: 'Page',
    name: 'NotFound',
    component: NotFound as any,
    variants: [ { name: 'Default', render: () => <div className="max-w-md mx-auto"><NotFound /></div> } ],
    sizes: ['mobile'], states: ['default'], props: [], tokens: {}, accessibility: ['Composite screen'], usageNotes: ['Mobile preview inside frame'], jsxExample: '<NotFound />'
  },
];

export function getGroupedRegistry(){
  const groups: Record<Category, ComponentMeta[]> = { Atom: [], Molecule: [], Organism: [], Template: [], Page: [] } as any;
  for(const item of registry){ (groups as any)[item.category].push(item); }
  for(const item of placeholders){ (groups as any)[item.category].push(item); }
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

// Placeholder entries for discovered but unregistered components
export const placeholders: ComponentMeta[] = [
  {
    category: 'Atom',
    name: 'NavLink',
    component: null,
    variants: [ { name: 'Default', render: () => <div className="text-xs text-muted-foreground">⚠ Placeholder — render failed: src/components/NavLink.tsx</div> } ],
    sizes: ['n/a'], states: ['n/a'], props: [], tokens: {}, accessibility: ['n/a'], usageNotes: ['Wrapper over react-router NavLink']
  },
];
