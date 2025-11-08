# Design System V9 - Complete Style Guide

**Version:** V9  
**Last Updated:** 2025  
**Design Philosophy:** Indian Modern + Neo-Brutalism  
**Format:** A4 (210mm × 297mm)

---

## Table of Contents

1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Shadows & Elevation](#shadows--elevation)
6. [Border Radius](#border-radius)
7. [Component Library](#component-library)
8. [Figma Export Guide](#figma-export-guide)

---

## Overview

### Design Philosophy

This design system combines the vibrant colors and warmth of **Indian Modern design** with the bold, geometric, and high-contrast principles of **Neo-Brutalism**. The result is a unique, energetic interface that feels both contemporary and culturally grounded.

### Key Principles

1. **Bold Borders:** All interactive elements feature 2-3px solid borders
2. **Offset Shadows:** Brutalist-style offset shadows (3px-6px) for depth
3. **Vibrant Colors:** Gold-based palette with complementary accent colors
4. **High Contrast:** Strong contrast for readability and accessibility
5. **Mobile-First:** Optimized for mobile interactions (no hover states)

---

## Color System

### Brand Colors

| Color Name | CSS Variable | HSL | Hex | Usage |
|------------|--------------|-----|-----|-------|
| Gold | `--brand-gold` | 43 74% 49% | #B8860B | Primary brand color |
| Gold Light | `--brand-gold-light` | 43 74% 65% | #DAA520 | Secondary brand color |
| Dark | `--brand-dark` | 0 0% 25% | #404040 | Borders, text |

### Vibrant Accent Colors

| Color Name | CSS Variable | HSL | Hex | Usage |
|------------|--------------|-----|-----|-------|
| Coral | `--coral` | 6 93% 71% | #FD8A8A | User avatars, accents |
| Coral Light | `--coral-light` | 6 93% 85% | #FEB8B8 | Lighter variant |
| Purple | `--purple` | 258 90% 66% | #6C63FF | Headers, CTAs |
| Purple Light | `--purple-light` | 258 90% 80% | #A29DFF | Lighter variant |
| Teal | `--teal` | 173 80% 40% | #14B8A6 | Success states |
| Teal Light | `--teal-light` | 173 80% 60% | #5EEAD4 | Lighter variant |
| Pink | `--pink` | 340 82% 70% | #FF6B9D | Highlights, avatars |
| Pink Light | `--pink-light` | 340 82% 85% | #FFB3CC | Lighter variant |

### Semantic Colors

| Color Name | CSS Variable | HSL | Hex | Usage |
|------------|--------------|-----|-----|-------|
| Success | `--success` | 160 84% 39% | #10B981 | Success messages, positive amounts |
| Destructive | `--destructive` | 0 84% 60% | #EF4444 | Error messages, negative amounts |

### Neutral Colors

| Color Name | CSS Variable | HSL (Light) | HSL (Dark) | Usage |
|------------|--------------|-------------|------------|-------|
| Background | `--background` | 0 0% 100% | 0 0% 10% | Page background |
| Foreground | `--foreground` | 0 0% 25% | 0 0% 98% | Primary text |
| Card | `--card` | 0 0% 100% | 0 0% 15% | Card background |
| Border | `--border` | 0 0% 25% | 0 0% 25% | Borders |
| Muted | `--muted` | 210 40% 96.1% | 0 0% 20% | Muted backgrounds |

### Color Usage Guidelines

- **Primary Actions:** Use `--brand-gold` (#B8860B)
- **Secondary Actions:** Use `--brand-gold-light` (#DAA520)
- **User-Related Elements:** Use `--coral` or `--pink`
- **App/Service Icons:** Use vibrant accent colors
- **Success States:** Use `--success` (#10B981)
- **Error States:** Use `--destructive` (#EF4444)
- **All Borders:** Use `--brand-dark` (#2D3561 or #404040)

---

## Typography

### Font Stack

**System Fonts (No Custom Fonts)**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 32px | 700 | 1.2 | Hero headlines |
| H1 | 24px | 700 | 1.3 | Page titles |
| H2 | 20px | 700 | 1.4 | Section headers |
| H3 | 18px | 600 | 1.4 | Card titles |
| H4 | 16px | 600 | 1.5 | Labels |
| Body Large | 16px | 400 | 1.5 | Emphasized body text |
| Body | 14px | 400 | 1.5 | Default body text |
| Body Small | 13px | 400 | 1.5 | Secondary text |
| Caption | 12px | 600 | 1.4 | Captions, metadata |
| Micro | 11px | 600 | 1.3 | Fine print |
| Tiny | 10px | 700 | 1.2 | Badges, tags |

### Font Weights

- **Regular:** 400 (Body text)
- **Semibold:** 600 (Headers, labels)
- **Bold:** 700 (Headlines, CTAs)
- **Extra Bold:** 800 (Not commonly used)

### Typography Guidelines

1. **Hierarchy:** Use size and weight to create clear hierarchy
2. **Contrast:** Maintain strong contrast for readability
3. **Uppercase:** Use for labels, buttons, and navigation (10-12px)
4. **Letter Spacing:** +0.5px for uppercase text

---

## Spacing & Layout

### Spacing Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| xs | 4px | `1` | Icon spacing, badge padding |
| sm | 8px | `2` | Tight gaps, small padding |
| md | 12px | `3` | Default gaps |
| lg | 16px | `4` | Card padding, section spacing |
| xl | 20px | `5` | Large padding |
| 2xl | 24px | `6` | Section margins |
| 3xl | 32px | `8` | Page margins |
| 4xl | 40px | `10` | Large sections |

### Container Guidelines

- **Max Width:** 428px (mobile-first)
- **Horizontal Padding:** 20px
- **Section Spacing:** 24px between sections
- **Card Padding:** 16-20px

### Grid Gaps

- **Tight:** 8px (3-column grids)
- **Normal:** 12px (Default)
- **Loose:** 16px (2-column grids)
- **Extra Loose:** 20px (Large cards)

---

## Shadows & Elevation

### Shadow Tokens (Neo-Brutalist Style)

| Name | Value | Usage |
|------|-------|-------|
| Small | `3px 3px 0px #2D3561` | Buttons, small cards |
| Medium | `4px 4px 0px #2D3561` | Cards, avatars |
| Large | `6px 6px 0px #2D3561` | Main containers |
| Colored | `4px 4px 0px rgba(45, 53, 97, 0.3)` | Floating elements |
| Colored Light | `3px 3px 0px rgba(45, 53, 97, 0.4)` | Transaction items |

### Elevation Hierarchy

1. **Level 0 (Base):** No shadow - backgrounds, dividers
2. **Level 1 (Raised):** Small shadow - buttons, chips
3. **Level 2 (Floating):** Medium shadow - cards, avatars
4. **Level 3 (Modal):** Large shadow - main containers, modals

### Shadow Usage Guidelines

- **Interactive Elements:** Use shadows to indicate clickability
- **Cards:** Always use shadows for depth
- **Avatars:** Use medium shadows with 3px border
- **Buttons:** Use small-medium shadows
- **Never Use:** Blur shadows or multiple shadows

---

## Border Radius

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| None | 0px | No rounding |
| Small | 8px | Badges, small buttons |
| Medium | 12px | Buttons, inputs, cards |
| Large | 16px | Large cards |
| XL | 20px | Hero cards |
| Full | 50% | Avatars, circular buttons |

### Border Guidelines

- **Standard Border:** 2px solid #2D3561
- **Heavy Border:** 3px solid #2D3561 (for emphasis)
- **All Interactive Elements:** Use borders
- **Cards:** Use rounded corners (12px-20px)
- **Avatars:** Use rounded-full (50%)

---

## Component Library

### Atoms (Basic Building Blocks)

#### Avatar

**Variants:** sm, md, lg, xl  
**Structure:**
- Circular (50% border-radius)
- Single letter initial
- Colored background
- 3px solid border
- 4px offset shadow
- White text

**Sizes:**
- **sm:** 36px × 36px, 16px font
- **md:** 44px × 44px, 20px font
- **lg:** 54px × 54px, 24px font
- **xl:** 72px × 72px, 32px font

**Props:**
```typescript
interface AvatarProps {
  initial: string;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

#### Badge

**Variants:** default, success, warning, error  
**Structure:**
- Uppercase text (10-12px, bold)
- Rounded corners (6px)
- Padding: 4px 12px
- No border

**Color Mappings:**
- **Success:** #00C896 (white text)
- **Warning:** #FFD93D (dark text)
- **Error:** #FF6B35 (white text)
- **Default:** #808080 (white text)

#### Icon Button

**Variants:** default, colored, ghost  
**Structure:**
- Square or rounded (12px)
- 2-3px border (except ghost)
- Icon: 22px, strokeWidth: 2.5
- Padding: 11px (44px total)

**Variant Styles:**
- **Default:** White background, bordered, gray icon
- **Colored:** Colored background, bordered, white icon, shadow
- **Ghost:** Transparent, no border, gray icon

#### Status Indicator

**Variants:** active, inactive, pending  
**Structure:**
- Circular dot (4-6px)
- Colored glow (optional)

**Colors:**
- **Active:** #00FF00 (green glow)
- **Inactive:** #808080 (no glow)
- **Pending:** #FFD93D (yellow glow)

---

### Molecules (Component Combinations)

#### Quick Action

**Structure:**
- Icon button (colored)
- Label below (10px, bold, uppercase)
- Vertical layout

**Specs:**
- Icon container: 64px × 64px
- Border: 3px solid
- Shadow: 4px 4px 0px rgba(45, 53, 97, 0.3)
- Border radius: 20px
- Gap: 8px

**Props:**
```typescript
interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  color: string;
  onClick?: () => void;
}
```

#### Transaction Item

**Structure:**
- Avatar/Icon (left)
- Content (center): Name, time/category
- Amount (right)

**Specs:**
- Height: auto (min 60px)
- Padding: 12px
- Gap: 12px
- Border: 2px solid
- Border radius: 12px
- Background: Card or background

**Amount Colors:**
- **Positive:** Success green (#10B981)
- **Negative:** Destructive red (#EF4444)

**Icon/Avatar:**
- Size: 44-48px
- User transactions: Circular avatar
- App/Service transactions: Rounded square (14px)
- Border: 3px solid
- Shadow: 3px 3px 0px rgba(45, 53, 97, 0.4)

#### Balance Card

**Structure:**
- Title: "TOTAL BALANCE" (small, uppercase, 12px)
- Amount: Large text (32-40px, bold)
- Stats Grid: 2 columns (Income, Expense)

**Specs:**
- Background: Primary gold
- Border: 3px solid border
- Border radius: 20px
- Padding: 24px
- Shadow: 6px 6px 0px rgba(45, 53, 97, 0.4)

**Stats:**
- Background: white/10% opacity
- Border: 2px solid white/30%
- Border radius: 12px
- Padding: 16px
- Icon: 18px
- Amount: 20px, bold

#### Contact Chip

**Structure:**
- Avatar (top)
- Name (bottom, 10px, bold, uppercase)
- Vertical layout

**Specs:**
- Avatar: 44px (md size)
- Gap: 8px
- Text: truncated, centered

#### Search Bar

**Structure:**
- Icon (left): Search or filter icon
- Input field (center)
- Optional icon (right)

**Specs:**
- Height: 44px
- Border: 2px solid
- Border radius: 12px
- Padding: 12px
- Background: card or background

---

### Organisms (Complex Components)

#### Header

**Structure:**
- Avatar (left)
- User info: Greeting, name
- Action button (right): Notification indicator

**Specs:**
- Padding: 20px horizontal
- Height: auto (min 80px)
- Gap: 12px
- Avatar: md size (44px)
- Notification: IconButton with status indicator

**Layout:**
```
[Avatar] [Greeting]           [Notification]
         [Name]
```

#### Quick Actions Grid

**Structure:**
- 3-column grid
- Container with border and shadow
- Grid gap: 12px

**Specs:**
- Container:
  - Background: white
  - Padding: 20px
  - Border: 3px solid
  - Border radius: 20px
  - Shadow: 6px 6px 0px rgba(45, 53, 97, 0.3)

#### Transaction List

**Structure:**
- Header: Title + "SEE ALL" button
- List of transaction items
- Dividers between items (optional)

**Specs:**
- Title: 16-18px, bold
- Gap between items: 12px
- "SEE ALL" button: Primary color, bold, uppercase

#### Bottom Navigation

**Structure:**
- 5 navigation items
- Icon + Label
- Active state indicator

**Specs:**
- Height: 80px
- Border top: 3px solid
- Background: card
- Shadow: 0 -4px 20px rgba(0,0,0,0.1)
- Fixed: bottom, full width
- Max width: 428px

**Active State:**
- Icon button: Colored background
- Border: 3px solid
- Shadow: 3px 3px 0px
- Text: Primary foreground color

**Inactive State:**
- Icon: Muted foreground color
- Text: Muted foreground color
- No background or shadow

---

## Figma Export Guide

### Layer Naming Convention

Use consistent naming for easy organization:

```
📁 Design System V9
  📁 Atoms
    📁 Avatar
      🔷 Avatar/sm
      🔷 Avatar/md
      🔷 Avatar/lg
      🔷 Avatar/xl
    📁 Badge
      🔷 Badge/success
      🔷 Badge/warning
      🔷 Badge/error
      🔷 Badge/default
    📁 IconButton
      🔷 IconButton/default
      🔷 IconButton/colored
      🔷 IconButton/ghost
  
  📁 Molecules
    📁 QuickAction
      🔷 QuickAction/default
    📁 TransactionItem
      🔷 TransactionItem/user
      🔷 TransactionItem/service
    📁 BalanceCard
      🔷 BalanceCard/default
  
  📁 Organisms
    📁 Header
      🔷 Header/default
    📁 BottomNav
      🔷 BottomNav/default
    📁 QuickActionsGrid
      🔷 QuickActionsGrid/default
```

### Creating Components

1. **Auto Layout:** Use auto layout for all components
2. **Constraints:** Set proper constraints for responsive behavior
3. **Variants:** Create variants for all states (size, color, active/inactive)
4. **Spacing:** Use 4px/8px grid
5. **Boolean Props:** For optional elements (icon, badge, etc.)

### Color Styles

Create color styles for:
- All brand colors (gold, gold-light, dark)
- All vibrant colors (coral, purple, teal, pink + light variants)
- All semantic colors (success, destructive)
- All neutral colors (background, foreground, card, border, muted)

### Text Styles

Create text styles for:
- Display (32px, bold)
- H1 (24px, bold)
- H2 (20px, bold)
- H3 (18px, semibold)
- H4 (16px, semibold)
- Body Large (16px, regular)
- Body (14px, regular)
- Body Small (13px, regular)
- Caption (12px, semibold)
- Micro (11px, semibold)
- Tiny (10px, bold)

### Effect Styles

Create effect styles for:
- Shadow/small (3px 3px 0px #2D3561)
- Shadow/medium (4px 4px 0px #2D3561)
- Shadow/large (6px 6px 0px #2D3561)
- Shadow/colored (4px 4px 0px rgba(45, 53, 97, 0.3))
- Shadow/colored-light (3px 3px 0px rgba(45, 53, 97, 0.4))

### Component Properties

For each component, define:
1. **Required Props:** Always needed (e.g., `label`, `icon`)
2. **Optional Props:** Can be toggled (e.g., `showBadge`)
3. **Variants:** Different styles (e.g., `size`, `variant`)
4. **States:** Interactive states (e.g., `active`, `disabled`)

### Export Settings

- **Format:** SVG for icons, PNG @2x for raster
- **Naming:** Use component name + variant (e.g., `Avatar-md-purple`)
- **Organization:** Export by category (atoms, molecules, organisms)

---

## Implementation Notes

### Code Structure

```
src/
  components/
    atoms/          # Basic building blocks
    molecules/      # Simple combinations
    organisms/      # Complex components
    ui/            # Shadcn components (if used)
  design-system/   # Documentation
  pages/           # Page templates
```

### CSS Variables Usage

Always use CSS variables from `index.css`:

```tsx
// ✅ CORRECT
<div className="bg-primary text-primary-foreground border-border" />

// ❌ WRONG
<div className="bg-[#B8860B] text-white border-[#2D3561]" />
```

### Tailwind Classes

Prefer Tailwind utility classes:

```tsx
// ✅ CORRECT
<div className="border-[3px] rounded-xl shadow-[4px_4px_0px_hsl(var(--border))]" />

// ❌ WRONG
<div style={{ border: '3px solid #2D3561', borderRadius: '12px' }} />
```

### Component Props

Keep props consistent across components:

```typescript
// Standard props for all components
interface BaseProps {
  className?: string;
  style?: CSSProperties;
}

// Variant props
interface VariantProps {
  variant?: 'default' | 'colored' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

---

## Version History

- **V9 (Current):** Complete design system with Gumroad-inspired shadows and gold palette
- **V8:** Introduced vibrant accent colors, removed gradients
- **V7:** Typography reverted to system fonts
- **V6:** Enhanced brutalist design elements
- **V5:** Initial brutalist styling
- **V4:** Indian modern color palette
- **V3:** Component library expansion
- **V2:** Typography system
- **V1:** Initial design system

---

## Contact & Support

For questions or contributions to this design system, please refer to the project documentation or contact the design team.

**Last Updated:** 2025  
**Maintained by:** Design Team  
**License:** Internal Use Only
