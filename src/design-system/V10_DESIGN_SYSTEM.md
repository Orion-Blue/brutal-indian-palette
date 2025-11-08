# V10 Design System - Modern Clean Style

## Overview
Version 10 represents a complete design overhaul from neo-brutalism to a modern, clean aesthetic inspired by contemporary fintech applications. The design emphasizes soft shadows, subtle borders, generous spacing, and smooth interactions.

---

## Design Philosophy

**Modern Minimalism + Fintech Elegance**

- **Clean & Sophisticated**: Soft shadows and subtle borders create depth
- **Smooth Interactions**: Gentle hover states and scale animations
- **Color-Forward**: Yellow accent with complementary color palette
- **Generous Spacing**: Breathing room for better readability
- **Mobile-First**: Optimized for touch interactions

---

## Color System

### Background & Surfaces
```css
--background: 0 0% 98%        /* #FAFAFA - Light gray background */
--card: 0 0% 100%             /* #FFFFFF - Pure white cards */
--muted: 0 0% 96%             /* #F5F5F5 - Muted backgrounds */
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
- **Content**: Balance label, large amount (with toggle visibility), account details, status indicator
- **Colors**: Single solid colors (yellow) with white text and subtle backdrop blur
- **Interaction**: Eye icon to toggle balance visibility

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
- **Background**: card/80 opacity with backdrop-blur-nav
- **Items**: Icon + label, rounded-xl active state
- **Active State**: Yellow/primary color, subtle background

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
- **Buttons**: Background color change
- **Cards**: Slight shadow increase
- **Lists**: Subtle background tint

### Active/Press States
- **Transform**: scale(0.95)
- **Transition**: All 200ms

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
