# V14 Design System - Launch-Ready Production Standards

## Overview
Version 14 represents a production-ready refinement with enhanced typography hierarchy, standardized interaction patterns, comprehensive accessibility features, and systematic spacing. The design emphasizes consistency, accessibility, and polish for launch.

---

## Design Philosophy

**Modern Minimalism + Fintech Elegance + Production Polish**

- **Enhanced Typography**: 1.333 type scale for superior hierarchy
- **Consistent Interactions**: Unified active states (scale-[0.98]) and hover patterns
- **Accessibility First**: Focus states, ARIA labels, touch targets 44px minimum
- **Systematic Spacing**: Clear padding hierarchy (atoms: 16px, molecules: 20px, organisms: 24px)
- **Visual Consistency**: Standardized shadows, borders, and transparency
- **Mobile Optimized**: Touch-friendly with proper feedback
- **Launch Ready**: Production-grade polish and reliability

---

## Color System

### Background & Surfaces
```css
--background: 0 0% 98%        /* #FAFAFA - Light gray background */
--card: 0 0% 100%             /* #FFFFFF - Pure white cards (use with 70-80% opacity) */
--muted: 0 0% 93%             /* #EDEDED - Hover state background */
```

### Brand Colors
```css
--primary: 48 100% 50%        /* #FFCC00 - Golden yellow */
--brand-yellow: 48 100% 50%   /* Primary brand color */
--brand-yellow-dark: 48 100% 40% /* Darker yellow variant */
--brand-dark: 0 0% 8%         /* #141414 - Dark text on yellow surfaces */
```

### Accent Colors
```css
--accent-blue: 217 91% 60%    /* #4A90E2 - Sky blue */
--accent-green: 142 71% 45%   /* #27AE60 - Success green */
--accent-red: 0 84% 60%       /* #E74C3C - Error red */
--accent-purple: 258 90% 66%  /* #9B59B6 - Purple accent */
```

### Text Colors
```css
--foreground: 0 0% 10%        /* #1A1A1A - Primary text */
--muted-foreground: 0 0% 45%  /* #737373 - Secondary text */
```

### Semantic Colors
```css
--success: 142 71% 45%        /* Green */
--destructive: 0 84% 60%      /* Red */
--border: 0 0% 89%            /* #E3E3E3 - Border color (use with /30 opacity) */
```

---

## Typography

### Font Stack
- **Primary**: Inter (body text, UI elements)
- **Display**: System default (headings)
- **Mono**: System monospace (numbers, codes)

### Scale (1.333 ratio - Perfect Fourth)
```
Display: 40px / 2.5rem - font-bold - leading-tight
H1: 32px / 2rem - font-bold - leading-tight
H2: 24px / 1.5rem - font-bold - leading-snug
H3: 18px / 1.125rem - font-bold - leading-normal
H4: 16px / 1rem - font-semibold - leading-normal
Body Large: 15px / 0.9375rem - font-normal - leading-relaxed
Body: 14px / 0.875rem - font-normal - leading-relaxed
Body Small: 12px / 0.75rem - font-normal - leading-relaxed
Caption: 11px / 0.6875rem - font-medium - leading-tight
Micro: 10px / 0.625rem - font-medium - leading-tight
```

### Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Line Heights
- tight: 1.25
- snug: 1.375
- normal: 1.5
- relaxed: 1.625

---

## Spacing Scale

### Padding System
```
Atoms (Buttons, Inputs): 16px / 1rem (p-4)
Molecules (Cards, Items): 20px / 1.25rem (p-5)
Organisms (Sections): 24px / 1.5rem (p-6)
Large Cards: 32px / 2rem (p-8)
```

### Gap System
```
xs: 8px / 0.5rem (gap-2)
sm: 12px / 0.75rem (gap-3)
md: 16px / 1rem (gap-4)
lg: 24px / 1.5rem (gap-6)
xl: 32px / 2rem (gap-8)
```

### Margin System
```
Section Spacing: 16px / 1rem (mb-4)
Large Sections: 32px / 2rem (mb-8)
Bottom Safe Area: 112px / 7rem (pb-28) for floating nav
```

---

## Border Radius

```
sm: 8px / 0.5rem
md: 12px / 0.75rem
lg: 16px / 1rem
xl: 20px / 1.25rem
2xl: 24px / 1.5rem (cards, buttons)
3xl: 32px / 2rem (large cards)
full: 9999px (circles, pills)
```

**Component Application:**
- **Avatars**: rounded-full
- **Icon Buttons**: rounded-full
- **Small Buttons**: rounded-xl (20px)
- **Cards**: rounded-2xl (24px) or rounded-3xl (32px)
- **Large Cards**: rounded-3xl (32px)
- **Badges**: rounded-full

---

## Shadows

### Hierarchy
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-card: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

**Application:**
- Default cards: shadow-sm
- Interactive cards: shadow-sm → hover:shadow-md
- Primary actions: shadow-md → hover:shadow-lg
- Large cards: shadow-card

---

## Interactions

### Active States
**Standardized to scale-[0.98]**
```css
active:scale-[0.98]
```

### Hover States
**Background:** hover:bg-muted/70 (darker grey for better visibility)
**Shadow:** shadow-sm → hover:shadow-md
**Transition:** transition-all duration-200

### Focus States (Accessibility)
```css
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-primary
focus-visible:ring-offset-2 (for primary buttons)
```

### Disabled States
```css
disabled:opacity-50 
disabled:cursor-not-allowed
```

### Transition Timing
```css
transition-all duration-200 ease-out
```

---

## Component Specifications

### Atoms

#### Avatar
- **Sizes**: sm (36px), md (44px), lg (56px), xl (80px)
- **Style**: Circular, solid color background, white text, no border
- **Typography**: Bold, centered initial
- **Touch Target**: Minimum 44px for interactive avatars

#### Badge
- **Variants**: default, success, warning, error
- **Style**: rounded-full (pill shape), px-3 py-1
- **Colors**: Subtle backgrounds with matching text colors
- **Typography**: caption weight-medium

#### IconButton
- **Variants**: default, ghost, primary
- **Sizes**: sm (32px), md (40px), lg (48px)
- **Style**: rounded-full, shadow-sm or transparent
- **Interaction**: active:scale-[0.98], focus-visible:ring-2
- **Icon Stroke**: strokeWidth={2} (standardized)

#### Text Component
- **Props**: variant, weight, className
- **Variants**: display, h1, h2, h3, h4, body-large, body, body-small, caption, micro
- **Weights**: normal, medium, semibold, bold
- **Usage**: Always use Text component for consistent typography

### Molecules

#### BalanceCard
- **Style**: rounded-3xl (32px), solid color with bg-white/10 overlay, shadow-card
- **Padding**: 28px (p-7)
- **Text Color**: Black (#141414) on yellow cards for maximum contrast
- **Content**: Balance label, large amount (hidden by default), account details
- **Interaction**: Eye icon (hover:bg-black/10, active:scale-[0.98], focus-visible:ring-2)
- **Card Stack**: Multiple cards behind with decreasing opacity (40%, 60%, 100%)
- **Swipe Indicator**: Pagination dots below cards
- **Transparency**: backdrop-blur-nav on overlay

#### ContactChip
- **Style**: rounded-2xl, card/80 with backdrop-blur-nav, border-border/30
- **Padding**: 16px (p-4)
- **Layout**: Avatar + name label
- **Interaction**: active:scale-[0.98], hover:bg-muted/70, focus-visible:ring-2

#### TransactionItem
- **Style**: rounded-xl (16px), transparent background
- **Padding**: 16px (p-4)
- **Layout**: Avatar + details (left), amount (right)
- **Interaction**: hover:bg-muted/70, active:scale-[0.98], focus-visible:ring-2
- **Gap**: gap-3 (12px)

#### QuickAction
- **Style**: rounded-2xl (20px), card/80 background, backdrop-blur-nav
- **Padding**: 20px (p-5)
- **Layout**: Colored icon circle + label below
- **Icon Container**: 48px circle, rounded-xl, shadow-sm
- **Interaction**: active:scale-[0.98], hover:bg-muted/70, focus-visible:ring-2

#### MenuItem
- **Style**: rounded-xl, card/80 with backdrop-blur-nav, border-border/30
- **Padding**: 16px (p-4)
- **Layout**: Icon circle + label (left), value + chevron (right)
- **Icon Container**: 40px circle, muted background
- **Interaction**: hover:bg-muted/70, active:scale-[0.98], focus-visible:ring-2

#### SearchBar
- **Style**: rounded-2xl, card/80 with backdrop-blur-nav, border-border/30
- **Height**: 56px minimum
- **Padding**: 20px horizontal (px-5)
- **Icon**: Search icon, strokeWidth={2}, text-muted-foreground
- **Input**: bg-transparent, text-sm, font-medium

### Organisms

#### Header
- **Height**: Auto (padding-based)
- **Padding**: py-4 px-5
- **Content**: Back/Avatar + Title + Action button
- **Style**: Clean, minimal, no background color
- **Typography**: H2 bold for title, caption for subtitle
- **Gap**: gap-4 (16px)

#### BottomNav
- **Height**: Auto (~64px)
- **Style**: Floating with 16px bottom margin, rounded-2xl
- **Background**: card/70 with backdrop-blur-nav, border-border/30
- **Items**: Icon + label, rounded-xl active state
- **Active State**: text-foreground (black), bg-primary/15, strokeWidth 2.5
- **Inactive State**: text-muted-foreground
- **Hover State**: hover:bg-muted/70
- **Focus State**: focus-visible:ring-2
- **Content**: Home, Analytics, Wallet, Send Money, Profile
- **Icon Stroke**: strokeWidth={2} (inactive), strokeWidth={2.5} (active)

#### QuickActionsGrid
- **Layout**: 3-column grid
- **Gap**: gap-3 (12px)
- **Style**: No container background, direct grid of actions

#### TransactionList
- **Layout**: Vertical stack
- **Gap**: gap-3 (12px)
- **Header**: Optional title (body weight-semibold)
- **Items**: Individual transaction cards with hover states

#### SpendingInsights
- **Style**: rounded-3xl, card/80 with backdrop-blur-nav, border-border/30, shadow-card
- **Padding**: 24px (p-6)
- **Layout**: Header + Category breakdown + Progress bar
- **Category Items**: Icon circle (w-10 h-10) + label + percentage + amount
- **Icon Circles**: rounded-xl with category color at 15% opacity
- **Progress Bar**: 8px height, rounded-full, primary color fill
- **Gap**: gap-4 (16px) between sections

---

## Screen-Specific Guidelines

### HomeScreen  
- **Sections Order**: Header → Balance Cards → Quick Actions → Recent Transactions → Spending Insights
- **Card Stack**: Main balance card with 2 cards behind (40%, 60% opacity)
- **Swipe Indicator**: Dots below cards showing current position
- **Insights Position**: After transactions, before bottom nav
- **Padding Bottom**: pb-28 (112px) for floating nav clearance

### SendMoneyScreen
- **Two States**: Contact selection and amount entry
- **Contact Selection**: 
  - Search bar → Frequent contacts grid (8 contacts) → Recent recipients list (8 recipients)
  - Grid: 4 columns, gap-3
- **Amount Entry**: 
  - Recipient card → Amount display → Quick amounts (4 buttons) → Number pad (3x4 grid) → Send button
  - All buttons: card/80 with backdrop-blur-nav
- **Transparency**: Consistent card/80 with backdrop-blur-nav throughout

### ProfileScreen
- **Layout**: Centered avatar at top without card wrapper
- **Profile Section**: 
  - Avatar (xl size)
  - Name (h2 weight-bold)
  - Email (body-small text-muted-foreground)
  - Spacing: 32px bottom padding after profile
- **Stats Grid**: 2-column grid with card/80 transparent cards
- **Menu Sections**: Grouped by category with uppercase caption headers
- **All Cards**: card/80 with backdrop-blur-nav, border-border/30

---

## Transparency Guidelines

### Consistent Application
- **All Cards**: bg-card/80 with backdrop-blur-nav
- **Borders**: border-border/30 for subtle separation
- **Overlays**: bg-white/10 for subtle layering on colored surfaces
- **Nav Bar**: card/70 with backdrop-blur-nav
- **Hover States**: bg-muted/70 (not muted/50)

### Backdrop Blur
```css
backdrop-blur-nav: 12px blur for glassmorphism effect
```

---

## Accessibility Standards

### Touch Targets
- **Minimum Size**: 44x44px for all interactive elements
- **Spacing**: Minimum 8px between touch targets

### Focus Indicators
- **Ring**: 2px solid primary color
- **Offset**: 2px for primary buttons
- **Visibility**: Only on focus-visible (keyboard navigation)

### Color Contrast
- **Text on Background**: Minimum 4.5:1 (WCAG AA)
- **Text on Yellow Cards**: Black (#141414) for maximum contrast
- **Muted Text**: 0 0% 45% passes contrast requirements

### Semantic HTML
- **Buttons**: Use `<button>` for all clickable actions
- **Links**: Use `<Link>` for navigation
- **Headings**: Proper hierarchy (H1 → H2 → H3)
- **Labels**: Associate labels with inputs

---

## Icon System

### Stroke Width
**Standardized to 2** (except active nav icons at 2.5)
```tsx
<Icon size={20} strokeWidth={2} />
```

### Sizes
- **Small**: 16px
- **Default**: 20px
- **Medium**: 24px
- **Large**: 32px

### Usage
- Always use Lucide React icons
- Apply consistent strokeWidth
- Use semantic color tokens (not direct colors)

---

## Layout System

### Container
- **Max Width**: 428px (mobile-first)
- **Margin**: mx-auto (centered)
- **Padding**: px-5 (20px horizontal)

### Screen Structure
```tsx
<div className="min-h-screen bg-background text-foreground w-full max-w-md mx-auto pb-28">
  {/* Content */}
  <BottomNav />
</div>
```

### Safe Areas
- **Bottom Padding**: pb-28 (112px) on all screens for floating nav
- **Top Padding**: py-4 (16px) for headers
- **Section Gaps**: mb-4 (16px) between sections

---

## Animation & Transitions

### Duration
```css
transition-all duration-200 ease-out
```

### Common Patterns
- **Scale on Press**: active:scale-[0.98]
- **Hover Shadow**: shadow-sm → hover:shadow-md
- **Background Fade**: hover:bg-muted/70
- **Focus Ring**: Immediate appearance, no transition

---

## Implementation Checklist

### Component Requirements
- ✅ Use Text component for all typography
- ✅ Apply focus-visible states to all interactive elements
- ✅ Ensure 44px minimum touch targets
- ✅ Use backdrop-blur-nav on all cards
- ✅ Apply border-border/30 to all bordered elements
- ✅ Use active:scale-[0.98] for all pressable elements
- ✅ Apply hover:bg-muted/70 for hover states
- ✅ Use strokeWidth={2} for all icons
- ✅ Apply semantic color tokens (never hardcoded colors)
- ✅ Include proper ARIA labels where needed

### Testing Requirements
- Test keyboard navigation (Tab, Enter, Space)
- Verify focus indicators are visible
- Test touch targets on mobile (minimum 44px)
- Validate color contrast ratios
- Test with screen readers
- Verify all interactive elements have proper states

---

## Version History

- **V14**: Production-ready refinement with enhanced typography (1.333 scale), standardized interactions (scale-[0.98]), comprehensive accessibility (focus states), systematic spacing, and launch polish
- **V12**: Transparency overhaul, card stacking, updated navigation content
- **V10**: Initial modern clean design with golden yellow branding

---

## Dark Mode (Future)

All colors include dark mode variants ready for implementation:
- Background shifts to dark gray (hsl(0, 0%, 10%))
- Cards use slightly lighter dark (hsl(0, 0%, 12%))
- Text inverts to light (hsl(0, 0%, 98%))
- Shadows become more pronounced
- Accent colors remain vibrant
- Primary yellow adjusted for dark backgrounds
