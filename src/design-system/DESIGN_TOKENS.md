# Design System Tokens

## Design Philosophy
**Indian Modern + Brutalism/Neo-Brutalism Bold**

This design system combines the vibrant colors and warmth of Indian modern design with the bold, geometric, and high-contrast principles of neo-brutalism.

---

## Color Palette

### Background Colors
```
Primary Background: #FFF5E0 (Warm cream)
Card Background: #FFFFFF (White)
Surface Dark: #2D3561 (Deep navy - used for borders/shadows)
```

### Primary Colors
```
Orange: #FF6B35 (Vibrant coral orange)
Purple: #6C63FF (Electric purple)
Cyan: #00D9C0 (Bright cyan)
Pink: #FF6B9D (Hot pink)
Yellow: #FFD93D (Bright yellow)
Green: #00C896 (Success green)
Swiggy Orange: #FC8019
Amazon Orange: #FF9F40
```

### Text Colors
```
Primary Text: #1A1A1A (Near black)
Secondary Text: #808080 (Gray)
White Text: #FFFFFF (On colored backgrounds)
```

### Status Colors
```
Success: #00FF00 (Bright green)
Pending: #FFD93D (Yellow)
Error: #FF6B35 (Orange-red)
```

---

## Typography

### Font Families
```
Primary: 'Inter', sans-serif
Headings: 'Plus Jakarta Sans', sans-serif
Monospace: 'Courier New', monospace
```

### Font Weights
```
Regular: 400
Semi-bold: 600
Bold: 700
Extra-bold: 800
```

### Font Sizes
```
Display: 32px
H1: 24px
H2: 20px
H3: 18px
H4: 16px
Body Large: 16px
Body: 14px
Body Small: 13px
Caption: 12px
Micro: 11px
Tiny: 10px
```

---

## Spacing Scale
```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 20px
2xl: 24px
3xl: 32px
4xl: 40px
```

---

## Border Radius
```
None: 0px
Small: 8px
Medium: 12px
Large: 16px
XL: 20px
Full: 50% (circles)
```

---

## Borders
```
Standard: 2px solid #2D3561
Heavy: 3px solid #2D3561
```

---

## Shadows (Neo-Brutalist Style)
```
Small: 3px 3px 0px #2D3561
Medium: 4px 4px 0px #2D3561
Large: 6px 6px 0px #2D3561
Colored: 4px 4px 0px rgba(45, 53, 97, 0.3)
Glow (status): 0 0 6px #00FF00
```

---

## Layout

### Container
```
Max Width: 428px (mobile-first)
Margin: 0 auto (centered)
Padding: 20px horizontal
```

### Grid Gaps
```
Tight: 8px
Normal: 12px
Loose: 16px
Extra Loose: 20px
```

---

## Animations & Transitions
```
Duration: 0.2s
Easing: ease / cubic-bezier(0.4, 0, 0.2, 1)
Transform on Press: scale(0.95)
```

---

## Icon Sizes
```
Small: 18px
Medium: 22px
Large: 26px
XL: 32px
```

### Icon Stroke Widths
```
Default: 2
Bold: 2.5
Heavy: 3
```

---

## Component Patterns

### Interactive States (Mobile-Optimized)
- **Default**: Full shadow (e.g., 6px 6px 0px)
- **Active/Pressed**: scale(0.95) transform
- **Disabled**: opacity 0.5

Note: No hover states (mobile app)

### Card Pattern
```
Background: #FFFFFF
Border: 2px or 3px solid #2D3561
Border Radius: 12px - 20px
Shadow: 4px-6px solid shadow
Padding: 16px - 20px
```

### Button Pattern
```
Background: Colored or #FFF5E0
Border: 2px solid #2D3561
Border Radius: 12px - 16px
Shadow: 3px-5px solid shadow
Padding: 12px - 20px
Font: Bold (700-800)
Text Transform: Uppercase for labels
```

---

## Status Bar
```
Height: ~40px
Content: Time (left), Signal/Battery icons (right)
Background: Matches page background
Text Color: Matches page text
```

---

## Bottom Navigation
```
Height: ~80px
Background: #FFF5E0
Border Top: 3px solid #2D3561
Shadow: 0 -4px 20px rgba(0,0,0,0.1)
Fixed: bottom, full width
Max Width: 428px
```

---

## Z-Index Scale
```
Base: 0
Card: 1
Dropdown: 10
Modal: 100
Navigation: 50
Toast: 1000
```
