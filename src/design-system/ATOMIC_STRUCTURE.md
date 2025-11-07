# Atomic Design Structure Documentation

This document provides a complete hierarchy of all UI components following atomic design principles.

---

## 📦 Atoms (Basic Building Blocks)

### IconButton
**File**: `src/components/atoms/IconButton.tsx`

**Props**:
- `icon`: LucideIcon (required)
- `variant`: 'default' | 'colored' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `color`: string (for colored variant)
- `iconSize`: number (default: 22)
- `iconStrokeWidth`: number (default: 2.5)

**Variants**:
- `default`: White background, gray icon, 2px border
- `colored`: Colored background, white icon, shadow
- `ghost`: Transparent background, no border

**Sizes**:
- `sm`: 36x36px
- `md`: 44x44px
- `lg`: 52x52px

---

### Text
**File**: `src/components/atoms/Text.tsx`

**Props**:
- `variant`: Typography scale (display, h1-h4, body variants, caption, micro, tiny)
- `weight`: 'regular' | 'semibold' | 'bold' | 'extrabold'
- `color`: string (default: #1A1A1A)
- `font`: 'inter' | 'jakarta' | 'mono'
- `uppercase`: boolean

**Typography Scale**:
- Display: 32px
- H1: 24px
- H2: 20px
- H3: 18px
- H4: 16px
- Body Large: 16px
- Body: 14px
- Body Small: 13px
- Caption: 12px
- Micro: 11px
- Tiny: 10px

---

### Avatar
**File**: `src/components/atoms/Avatar.tsx`

**Props**:
- `initial`: string (1 character)
- `color`: string (background color)
- `size`: 'sm' | 'md' | 'lg' | 'xl'

**Sizes**:
- `sm`: 36x36px, 16px text
- `md`: 44x44px, 20px text
- `lg`: 54x54px, 24px text
- `xl`: 72x72px, 32px text

**Style**: Circular, 3px solid border, 4px shadow offset

---

### Badge
**File**: `src/components/atoms/Badge.tsx`

**Props**:
- `variant`: 'default' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md'

**Variants**:
- `default`: Gray background
- `success`: Green (#00C896)
- `warning`: Yellow (#FFD93D)
- `error`: Orange (#FF6B35)

**Style**: Uppercase, bold, rounded corners

---

### StatusIndicator
**File**: `src/components/atoms/StatusIndicator.tsx`

**Props**:
- `status`: 'active' | 'inactive' | 'pending'
- `size`: 'sm' | 'md'
- `withGlow`: boolean (default: true)

**Colors**:
- `active`: Bright green with glow
- `inactive`: Gray
- `pending`: Yellow

---

## 🔗 Molecules (Simple Combinations)

### QuickAction
**File**: `src/components/molecules/QuickAction.tsx`

**Composition**: Icon (48x48) + Label text

**Props**:
- `icon`: LucideIcon
- `label`: string
- `color`: string (icon background)

**Structure**:
- Container: 2px border, 5px shadow, cream background
- Icon box: Colored, 48x48px, 2px border
- Label: Micro size, extra bold, uppercase

---

### TransactionItem
**File**: `src/components/molecules/TransactionItem.tsx`

**Composition**: Avatar/Icon + Name + Status Badge + Time + Amount + Chevron

**Props**:
- `name`, `time`, `status`, `amount`, `type`
- `icon`: LucideIcon
- `bgColor`: string
- `initial`: optional string (for user avatar)

**Structure**:
- Full-width card with 16px padding
- Avatar/icon left, details center, amount right
- Status badge inline with name
- Chevron indicator on right

---

### BalanceCard
**File**: `src/components/molecules/BalanceCard.tsx`

**Composition**: Balance amount + Account info + Status indicator

**Props**:
- `balance`, `label`, `accountNumber`
- `type`, `validThru`, `status`
- `gradient`: CSS gradient string
- `textColor`: string

**Structure**:
- Gradient background card
- Large balance display (32px)
- Account number in monospace
- Valid thru date
- Active status indicator with glow

---

### SearchBar
**File**: `src/components/molecules/SearchBar.tsx`

**Composition**: Search icon + Input field

**Props**:
- Standard HTML input props
- `onSearchChange`: callback function

**Structure**:
- Search icon positioned absolute left
- Input with left padding for icon
- 2px border, 16px rounded corners
- 4px shadow offset

---

### ContactChip
**File**: `src/components/molecules/ContactChip.tsx`

**Composition**: Avatar + Name label

**Props**:
- `name`, `initial`, `color`
- `onClick`: callback

**Structure**:
- Vertical layout (column)
- Large avatar (54x54px)
- Name below in bold caption

---

### StatCard
**File**: `src/components/molecules/StatCard.tsx`

**Composition**: Icon/Emoji + Value + Label

**Props**:
- `label`, `value`, `color`, `icon`

**Structure**:
- White card with 16px padding
- Large icon/emoji (24px)
- Colored value text (H3, extrabold)
- Gray label text (caption)
- 6px shadow offset

---

### MenuItem
**File**: `src/components/molecules/MenuItem.tsx`

**Composition**: Icon + Label + Action (chevron/badge/toggle/value)

**Props**:
- `icon`, `label`, `color`
- `hasChevron`, `badge`, `value`
- `hasToggle`, `toggleValue`, `onToggle`

**Structure**:
- Full-width card, 16px padding
- Colored icon box (40x40px) left
- Label text center-left (flex: 1)
- Action indicator right
- 4px shadow offset

---

## 🏗️ Organisms (Complex Components)

### QuickActionsGrid
**File**: `src/components/organisms/QuickActionsGrid.tsx`

**Composition**: 3-column grid of QuickAction molecules

**Props**:
- `actions`: Array of action items with icon, label, color, onClick

**Structure**:
- Container: White background, 20px padding
- Grid: 3 columns, 12px gap
- Border: 3px solid
- Shadow: 6px offset

---

### TransactionList
**File**: `src/components/organisms/TransactionList.tsx`

**Composition**: Grouped TransactionItem molecules by date

**Props**:
- `groups`: Array of date groups with transactions
- `onTransactionClick`: callback

**Structure**:
- Date headers (caption, uppercase, gray)
- Transaction items grouped below each date
- 12px gap between items
- 24px gap between groups

---

### Header
**File**: `src/components/organisms/Header.tsx`

**Composition**: Status bar + Title + Icon + Notification button

**Props**:
- `title`: string
- `icon`: React node (optional)
- `showNotification`: boolean
- `notificationCount`: number
- `onNotificationClick`, `onBackClick`: callbacks

**Structure**:
- Status bar: Time + battery/signal icons
- Header bar: Icon + title + notification bell
- Notification badge: Absolute positioned count

---

### BottomNavigation
**File**: `src/components/BottomNav.tsx`

**Composition**: 3 navigation items (Home, Send, Profile)

**Features**:
- Active state highlighting
- Icon color changes (colored bg when active)
- Label weight changes (bold when active)
- React Router navigation

**Structure**:
- Fixed bottom, full width (max 428px)
- 3px top border
- 20px horizontal padding
- Even spacing (justify-around)
- 44x44px icon buttons

---

## 📄 Templates & Pages

### Page Structure
All pages follow this structure:

1. **Container**:
   - Min height: 100vh
   - Max width: 428px
   - Centered with auto margin
   - Padding bottom: 100px (for bottom nav clearance)

2. **Background**: #FFF5E0 (warm cream)

3. **Layout**:
   - Header (status bar + title bar)
   - Content area (scrollable)
   - Bottom navigation (fixed)

---

### HomeScreen
**File**: `src/pages/HomeScreen.tsx`

**Sections**:
1. Header with notification bell
2. Balance cards carousel (swipeable)
3. Quick actions grid (Scan, Pay, Receive)
4. Transaction list (grouped by date)
5. Bottom navigation

**Key Features**:
- Animated balance counter
- Horizontal scroll for balance cards
- Date-grouped transactions
- Different transaction types (merchants, users, services)

---

### SendMoneyScreen
**File**: `src/pages/SendMoneyScreen.tsx`

**Sections**:
1. Header with back button
2. Search bar
3. Frequent contacts (horizontal scroll)
4. Send to options (Bank, UPI, Mobile, Card)
5. Recent recipients list
6. Bottom navigation

**Key Features**:
- Contact search
- Amount entry screen (triggered on contact select)
- Quick amount buttons
- Numeric keypad

---

### ProfileScreen
**File**: `src/pages/ProfileScreen.tsx`

**Sections**:
1. Header
2. Profile avatar and name with verification badge
3. Stats grid (4 cards)
4. Settings menu (grouped by category)
   - Account section
   - Preferences section
   - Support section
5. Logout button
6. Version info
7. Bottom navigation

**Key Features**:
- Toggle switches for settings
- Chevron indicators for navigable items
- Badge indicators (e.g., payment methods count)
- Grouped menu sections

---

## 🎨 Design Patterns

### Card Pattern
Used for: Balance cards, stat cards, transaction items, menu items

**Structure**:
```
background: #FFFFFF or gradient
border: 2px-3px solid #2D3561
borderRadius: 12px-24px
padding: 16px-28px
boxShadow: 3px-8px solid shadow
```

### Button Pattern
Used for: Quick actions, icon buttons, interactive elements

**Structure**:
```
border: 2px solid #2D3561
borderRadius: 12px-16px
boxShadow: 3px-6px solid shadow
transition: all 0.2s
active: scale(0.95)
```

### List Pattern
Used for: Transactions, contacts, menu items

**Structure**:
```
Vertical stack
Gap: 12px between items
Full width cards
Consistent padding: 16px
```

---

## 🔄 State Patterns

### Interactive States
- **Default**: Full shadow (6px)
- **Active/Pressed**: scale(0.95)
- **Disabled**: opacity 0.5

### Navigation States
- **Active Route**: 
  - Colored icon background
  - White icon color
  - Bold label text
  - Primary color label
- **Inactive Route**:
  - White icon background
  - Gray icon color
  - Regular label text
  - Gray label

---

## 📱 Responsive Behavior

All components are designed for:
- Mobile-first (428px max width)
- Touch-friendly (44px minimum touch target)
- No hover states (mobile app)
- Active/pressed states instead
- Horizontal scrolling where appropriate (contacts, balance cards)

---

## 🎯 Component Usage Guidelines

### When to use each atom:
- **IconButton**: Single icon actions (notifications, back, settings)
- **Text**: All text content (use correct variant for hierarchy)
- **Avatar**: User profiles, contact lists
- **Badge**: Status indicators, counts, labels
- **StatusIndicator**: Active/live status, availability

### When to use each molecule:
- **QuickAction**: Primary action shortcuts
- **TransactionItem**: Financial transaction displays
- **BalanceCard**: Account/wallet balances
- **SearchBar**: Search/filter functionality
- **ContactChip**: Quick access to contacts
- **StatCard**: Numerical statistics display
- **MenuItem**: Settings, menu navigation

### When to use each organism:
- **QuickActionsGrid**: Primary action section on home
- **TransactionList**: Complete transaction history
- **Header**: Page title and primary actions
- **BottomNavigation**: Main app navigation

---

## 📐 Figma Recreation Guide

### Layer Naming Convention
```
[Type]-[Component]-[Variant]-[State]

Examples:
Atom-IconButton-Colored-Default
Molecule-TransactionItem-Credit-Active
Organism-Header-WithNotification
```

### Component Properties to Define
1. **Colors**: Use design tokens from DESIGN_TOKENS.md
2. **Typography**: Use text styles from Text atom
3. **Spacing**: Use spacing scale (4px increments)
4. **Shadows**: Use brutalist shadow pattern (solid color offset)
5. **Borders**: Always 2px or 3px solid #2D3561

### Auto-Layout Setup
- Most components use flexbox
- Primary direction defined in component docs
- Gaps defined in spacing scale
- Padding: 12px, 16px, or 20px typically

### Color Styles to Create
- Create color styles for all design tokens
- Name them semantically (Primary-Orange, Surface-Dark, Text-Primary)
- Include both light backgrounds and colored backgrounds

### Text Styles to Create
- Create for each variant (Display, H1-H4, Body variants, etc.)
- Include font family, size, weight, letter spacing
- Name: Typography/[Variant]/[Weight]

---

This documentation provides a complete reference for:
1. Understanding the component hierarchy
2. Using components correctly in code
3. Recreating the design system in Figma
4. Maintaining consistency across the application
