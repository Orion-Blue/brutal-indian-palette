# V12 Design System - Modern Clean Style with Transparency

## Overview
Version 12 refines the modern clean aesthetic with enhanced transparency effects, improved visual hierarchy, and refined interaction states. The design emphasizes glassmorphism, subtle transparency layers, soft shadows, and smooth interactions.

---

## Design Philosophy

**Modern Minimalism + Fintech Elegance + Glassmorphism**

- **Clean & Sophisticated**: Soft shadows and subtle borders create depth
- **Transparency & Layers**: Glassmorphic effects with backdrop blur for visual hierarchy
- **Smooth Interactions**: Enhanced hover states with darker greys and scale animations
- **Color-Forward**: Golden yellow (#FFCC00) accent with black text on light surfaces
- **Generous Spacing**: Breathing room for better readability
- **Mobile-First**: Optimized for touch interactions
- **Consistent Transparency**: 70-80% opacity cards with backdrop blur throughout

---

## Color System

### Background & Surfaces
```css
--background: 0 0% 98%        /* #FAFAFA - Light gray background */
--card: 0 0% 100%             /* #FFFFFF - Pure white cards (use with 70-80% opacity) */
--muted: 0 0% 93%             /* #EDEDED - Darker muted for hover states */
```

### Brand Colors
```css
--primary: 48 100% 50%        /* #FFCC00 - Golden yellow */
--brand-yellow: 48 100% 50%   /* Primary brand color */
--brand-yellow-dark: 48 100% 40% /* Darker yellow variant */
--brand-dark: 0 0% 8%         /* #141414 - Dark text */
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
```

---

## Typography

### Font Stack
- **Primary**: Inter (body text, UI elements)
- **Display**: System default (headings)
- **Mono**: System monospace (numbers, codes)

### Scale (1.25 ratio for mobile)
```
Display: 36px / 2.25rem - font-bold
H1: 30px / 1.875rem - font-bold
H2: 24px / 1.5rem - font-bold
H3: 20px / 1.25rem - font-bold
H4: 18px / 1.125rem - font-semibold
Body Large: 16px / 1rem - font-normal
Body: 14px / 0.875rem - font-normal
Body Small: 12px / 0.75rem - font-normal
Caption: 12px / 0.75rem - font-medium
Micro: 10px / 0.625rem - font-medium
```

### Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Spacing Scale

```
xs: 4px / 0.25rem
sm: 8px / 0.5rem
md: 12px / 0.75rem
lg: 16px / 1rem
xl: 20px / 1.25rem
2xl: 24px / 1.5rem
3xl: 32px / 2rem
4xl: 40px / 2.5rem
```

---

## Border Radius

```
sm: 8px / 0.5rem
md: 12px / 0.75rem
lg: 16px / 1rem
xl: 20px / 1.25rem
2xl: 24px / 1.5rem
3xl: 32px / 2rem
full: 9999px (circles)
```

---

## Shadows

### Modern Soft Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

---

## Component Specifications

### Atoms

#### Avatar
- **Sizes**: sm (36px), md (44px), lg (56px), xl (80px)
- **Style**: Circular, solid color background, white text, no border
- **Typography**: Bold, centered initial

#### Badge
- **Variants**: default, success, warning, error
- **Style**: Rounded-full (pill shape), small padding
- **Colors**: Subtle backgrounds with matching text colors

#### IconButton
- **Variants**: default, ghost, primary
- **Sizes**: sm (32px), md (40px), lg (48px)
- **Style**: Circular, soft shadow or transparent
- **Interaction**: Scale on press (0.95), smooth transition

#### StatusIndicator
- **Sizes**: sm (8px), md (12px), lg (16px)
- **Colors**: success (green), inactive (gray), pending (yellow)
- **Style**: Solid circle, no glow effect

### Molecules

#### BalanceCard
- **Style**: Rounded-3xl (24px), solid color with transparency overlay, soft shadow-card
- **Padding**: 28px (1.75rem)
- **Content**: Balance label, large amount (hidden by default - toggle with eye icon), account details, status indicator
- **Colors**: Single solid colors (yellow #FFCC00) with BLACK text (#141414) for maximum contrast
- **Interaction**: Eye icon to toggle balance visibility (hidden by default showing ••••••)
- **Card Stack**: Multiple cards stacked behind main card with decreasing opacity (40%, 60%, 100%)
- **Swipe Indicator**: Pagination dots below cards (active: primary color, inactive: muted-foreground/30)

#### TransactionItem
- **Style**: Rounded-xl (16px), transparent background, hover state
- **Padding**: 16px (1rem)
- **Layout**: Avatar + details (left), amount (right)
- **Interaction**: Hover background, scale on press

#### QuickAction
- **Style**: Rounded-2xl (20px), card background, shadow-sm
- **Layout**: Colored icon circle + label below
- **Icon Container**: 48px circle, rounded-xl, shadow-sm
- **Interaction**: Scale on press, hover background

#### MenuItem
- **Style**: Rounded-xl, transparent, hover background
- **Layout**: Icon circle + label (left), value + chevron (right)
- **Icon Container**: 40px circle, muted background

### Organisms

#### Header
- **Height**: Auto (padding-based)
- **Content**: Avatar/back + title/subtitle + action button
- **Style**: Clean, minimal, no background color
- **Typography**: H2 bold for title, caption for subtitle

#### BottomNav
- **Height**: Auto (~64px)
- **Style**: Floating with 16px bottom margin, rounded-2xl, transparent backdrop blur
- **Background**: card/70 opacity with backdrop-blur-nav, border-border/30
- **Items**: Icon + label, rounded-xl active state
- **Active State**: BLACK text and icon (not yellow), primary/15 background, strokeWidth 2.5
- **Hover State**: muted/70 background (darker grey)
- **Content**: Home, Analytics, Wallet, Send Money, Profile

#### QuickActionsGrid
- **Layout**: 3-column grid, 12px gap
- **Style**: No container background, direct grid of actions

#### TransactionList
- **Layout**: Vertical stack, 4px gaps
- **Header**: Optional title (body semibold)
- **Items**: Individual transaction cards

---

## Layout

### Container
- **Max Width**: 428px (mobile-first)
- **Margin**: 0 auto (centered)
- **Padding**: 20px horizontal

### Screen Padding
- **Horizontal**: 20px (1.25rem)
- **Vertical sections**: 16px (1rem) between

---

## Interactions

### Transitions
- **Duration**: 200ms (0.2s)
- **Easing**: ease / cubic-bezier(0.4, 0, 0.2, 1)

### Hover States
- **Buttons**: Background color change to muted/70 (darker grey)
- **Cards**: Slight shadow increase + muted/70 background
- **Lists**: Subtle background tint (muted/70)
- **All Surfaces**: Use darker grey (--muted: 0 0% 93%) for better visibility

### Active/Press States
- **Transform**: scale(0.95) or scale(0.98) for larger elements
- **Transition**: All 200ms

### Transparency Guidelines
- **Cards**: 70-80% opacity (card/70 or card/80) with backdrop-blur-nav
- **Borders**: 30% opacity (border/30) for subtle separation
- **Overlays**: Use bg-white/10 or bg-black/15 for subtle layering
- **Consistency**: Apply transparency uniformly across all screens

---

## Figma Export Guidelines

### Component Structure
```
V10 Design System/
├── Atoms/
│   ├── Avatar (variants: sm, md, lg, xl)
│   ├── Badge (variants: default, success, warning, error)
│   ├── IconButton (variants: default, ghost, primary × sizes)
│   ├── StatusIndicator (variants: active, inactive, pending)
│   └── Text (all typography variants)
├── Molecules/
│   ├── BalanceCard
│   ├── ContactChip
│   ├── MenuItem
│   ├── QuickAction
│   ├── SearchBar
│   ├── StatCard
│   └── TransactionItem
└── Organisms/
    ├── Header
    ├── BottomNav
    ├── QuickActionsGrid
    └── TransactionList
```

### Auto-Layout Settings
- **Stack**: Vertical/Horizontal with specific gaps
- **Padding**: Use consistent spacing scale
- **Resizing**: Hug/Fill based on component needs
- **Constraints**: Left/Right/Center as appropriate

### Color Styles
- Create color styles for all HSL values
- Name using semantic tokens (primary, success, etc.)
- Include both light and dark mode variants

### Text Styles
- Create text styles for all typography variants
- Include weight, size, and line-height
- Use consistent naming (Display/H1/H2/Body/etc.)

### Component Variants
- Use Figma variants for size options
- Boolean properties for states (active, disabled)
- Variant properties for visual variants

---

## Dark Mode

All colors include dark mode variants:
- Background shifts to dark gray (hsl(0, 0%, 10%))
- Cards use slightly lighter dark (hsl(0, 0%, 12%))
- Text inverts to light (hsl(0, 0%, 98%))
- Shadows become more pronounced
- Accent colors remain vibrant

---

## Accessibility

- **Contrast Ratios**: All text meets WCAG AA standards
- **Touch Targets**: Minimum 44px for all interactive elements
- **Focus States**: 2px ring with primary color
- **Color Independence**: Never rely solely on color to convey information
