# Atomic Component Inventory – Checklist (Home, Send Money, Profile)

This checklist inventories all visible UI on the three screens (/home, /send-money, /profile) and maps each element to source code. Use it to verify all atoms/molecules/organisms and their interactive states.

How to use
- For each component, review "Used in", then tick state boxes after verifying in preview.
- Keep this living doc with PRs when components evolve.

Legend
- States: default, hover, active (pressed), focus (keyboard/mouse), disabled, selected/toggled.
- Accessibility: tab order, ARIA/labels, contrast.

================================================================================

ATOMS

1) Text
- Code: src/components/atoms/Text.tsx
- Variants: display, h1, h2, h3, h4, body-large, body, body-small, caption, micro
- Weights: normal, medium, semibold, bold
- Used in: all screens
- States checklist
  - [ ] Default (all variants render as expected)
  - [ ] Contrast meets AA for each usage
  - [ ] Truncation where applied (e.g., pills, rows)

2) Avatar
- Code: src/components/atoms/Avatar.tsx
- Props: initial, color, size (sm, md, lg, xl)
- Used in: Home header, transactions; Send Money contacts/recipients; Profile header
- States checklist
  - [ ] Default (sizes render correctly)
  - [ ] Clickable when wrapped in button (focus-visible ring propagates)

3) IconButton
- Code: src/components/atoms/IconButton.tsx
- Variants: default, ghost, primary
- Sizes: sm, md, lg
- Used in: Home bell (default), Send Money back (ghost), Profile settings (default)
- States checklist
  - [ ] Hover
  - [ ] Active (scale)
  - [ ] Focus-visible ring
  - [ ] Disabled (n/a by default)

4) StatusIndicator
- Code: src/components/atoms/StatusIndicator.tsx
- Status: active, inactive, pending; Sizes: sm, md, lg
- Used in: BalanceCard status chip
- States checklist
  - [ ] Color maps to status
  - [ ] Size maps correctly

5) Base Button (styling pattern)
- Source: multiple buttons across screens (see Send Money quick amounts, number pad, primary CTA)
- Expected states
  - [ ] Hover (bg/shadow)
  - [ ] Active (scale)
  - [ ] Focus-visible ring
  - [ ] Disabled (opacity/cursor)

6) Input (search field)
- Source: inline input in src/pages/SendMoneyScreen.tsx
- States checklist
  - [ ] Empty (placeholder visible)
  - [ ] Focus (container ring)
  - [ ] Filled (text + placeholder styles)
  - [ ] Clear affordance (via keyboard)

7) Badge (numeric pill)
- Source: Profile → Payment Methods badge
- States checklist
  - [ ] Contrast on color backgrounds
  - [ ] Screen reader reads as badge (text node)

8) Toggle (custom)
- Source: Profile → Dark Mode
- States checklist
  - [ ] Off (left, muted track)
  - [ ] On (right, colored track)
  - [ ] Keyboard toggle (Enter/Space on row)
  - [ ] Focus-visible ring on row

9) Carousel Dots
- Source: Home under BalanceCard
- States checklist
  - [ ] Active dot style (bg-primary)
  - [ ] Inactive dots style

10) Progress Bar
- Source: Home → This Month’s Overview → budget bar
- States checklist
  - [ ] Filled width reflects percentage (83%)
  - [ ] Contrast vs track

================================================================================

MOLECULES

1) BalanceCard
- Code: src/components/molecules/BalanceCard.tsx
- Shows label, balance (masked/visible), account number, type, valid thru, status chip
- Used in: Home
- States checklist
  - [ ] Eye toggle: hidden → visible
  - [ ] Eye toggle: visible → hidden
  - [ ] Focus-visible ring on eye button
  - [ ] Responsive text color on custom background

2) QuickAction
- Code: src/components/molecules/QuickAction.tsx
- Props: icon, label, color
- Used in: Home (Scan, Pay, Receive)
- States checklist
  - [ ] Hover background
  - [ ] Active scale
  - [ ] Focus-visible ring

3) TransactionItem
- Code: src/components/molecules/TransactionItem.tsx
- Layout: avatar, name, caption (type • date), amount (+/-)
- Used in: Home → Recent Transactions
- States checklist
  - [ ] Hover background
  - [ ] Active scale
  - [ ] Focus-visible ring
  - [ ] Positive amount uses success color
  - [ ] Negative amount uses default foreground

4) RecipientItem (Send Money)
- Source: inline in src/pages/SendMoneyScreen.tsx (Recent Recipients buttons)
- Layout: avatar, name/time, amount, chevron
- States checklist
  - [ ] Hover background
  - [ ] Active scale
  - [ ] Focus-visible ring

5) FrequentContactPill
- Source: inline in src/pages/SendMoneyScreen.tsx (grid buttons)
- Layout: avatar + name (truncate)
- States checklist
  - [ ] Active scale
  - [ ] Focus-visible ring
  - [ ] Name truncates

6) SearchBar
- Source: inline in src/pages/SendMoneyScreen.tsx (icon + input)
- States checklist
  - [ ] Focus ring on container
  - [ ] Placeholder style
  - [ ] Input text color

7) StatCard
- Source: src/pages/ProfileScreen.tsx (Quick Stats grid)
- Layout: icon/emoji, colored numeric value, label
- States checklist
  - [ ] Hover bg/shadow
  - [ ] Active scale
  - [ ] Focus-visible ring

8) MenuItemRow
- Source: src/pages/ProfileScreen.tsx (Account/Preferences/Support)
- Variants: with Chevron, with Badge, with Value, with Toggle
- States checklist
  - [ ] Hover bg
  - [ ] Active scale
  - [ ] Focus-visible ring
  - [ ] Toggle on/off (keyboard operable)

================================================================================

ORGANISMS

1) QuickActionsGrid
- Code: src/components/organisms/QuickActionsGrid.tsx
- Used in: Home
- Checklist
  - [ ] Renders 3 actions
  - [ ] Grid spacing consistent

2) TransactionList
- Code: src/components/organisms/TransactionList.tsx
- Used in: Home
- Checklist
  - [ ] Optional title shown (“Recent Transactions”)
  - [ ] Items render in order

3) FrequentContactsGrid
- Source: inline in src/pages/SendMoneyScreen.tsx
- Checklist
  - [ ] 4-column layout
  - [ ] Spacing consistent

4) RecentRecipientsList
- Source: inline in src/pages/SendMoneyScreen.tsx
- Checklist
  - [ ] Vertical spacing between items
  - [ ] Right-aligned amount + chevron

5) Profile QuickStatsGrid
- Source: inline in src/pages/ProfileScreen.tsx
- Checklist
  - [ ] 2-column layout
  - [ ] Card heights consistent

6) Profile MenuSections
- Source: inline in src/pages/ProfileScreen.tsx
- Checklist
  - [ ] Section titles (Account, Preferences, Support)
  - [ ] Row separators present (border-b except last)

7) Amount Entry – Send Money (sub-screen)
- Source: conditional branch in src/pages/SendMoneyScreen.tsx when a contact is selected
- Composition: header with Back, recipient card, amount display, quick amounts, number pad, primary CTA
- Checklist
  - [ ] Back IconButton focus ring
  - [ ] Amount increments via quick buttons
  - [ ] Number pad C/← work
  - [ ] SEND button disabled at 0; enabled otherwise

================================================================================

TEMPLATES (screen composition)

/home – src/pages/HomeScreen.tsx
- [ ] Header: Avatar RK, h2 name, caption greeting, bell IconButton
- [ ] Balance area: two stacked background cards, BalanceCard, carousel dots
- [ ] QuickActionsGrid (Scan, Pay, Receive)
- [ ] TransactionList (“Recent Transactions” with mixed +/- items)
- [ ] This Month’s Overview card: total, three category rows, budget bar
- [ ] BottomNav active: Home

/send-money – src/pages/SendMoneyScreen.tsx
- [ ] Header: “Send Money” + UPI ID button
- [ ] SearchBar: icon + input (placeholder)
- [ ] FrequentContactsGrid: 8 contacts
- [ ] RecentRecipientsList: 4+ items with chevron
- [ ] Amount Entry sub-screen after selecting contact (see organism 7)
- [ ] BottomNav active: Send Money

/profile – src/pages/ProfileScreen.tsx
- [ ] Header: “Profile” + Settings IconButton
- [ ] Profile block: Avatar RK, name, email
- [ ] Quick Stats grid: 4 StatCards (Total Received/Sent, Transactions, This Month)
- [ ] Menu sections: Account, Preferences (Dark Mode toggle), Support
- [ ] Logout destructive button + version text
- [ ] BottomNav active: Profile

================================================================================

CROSS-SCREEN / NAVIGATION

Bottom Navigation
- Code: src/components/BottomNav.tsx
- Items: Home (/home), Analytics (/analytics), Wallet (/wallet), Send Money (/send-money), Profile (/profile)
- States checklist
  - [ ] Active item: bg-primary/15, thicker stroke
  - [ ] Inactive item: text-muted-foreground, hover bg
  - [ ] Focus-visible ring

Toasts/Notifications (infrastructure present)
- Code: src/components/ui/toast.tsx, src/components/ui/sonner.tsx
- Checklist
  - [ ] Toast container mounted once per app
  - [ ] No visual overlap with BottomNav on small screens

================================================================================

ACCESSIBILITY & INTERACTION AUDIT (cross-cutting)
- [ ] All interactive elements reachable via Tab
- [ ] Focus-visible is present and visible on: IconButtons, row buttons, quick actions, recipients, numpad, CTAs
- [ ] Color contrast meets AA for text on colored backgrounds (chips, icons, badges)
- [ ] Hit targets ≥ 44×44px for touch (numpad, quick amounts, quick actions)
- [ ] Icons have discernible names via labels/text context where needed

================================================================================

FILE MAP (quick reference)
- Pages
  - /home → src/pages/HomeScreen.tsx
  - /send-money → src/pages/SendMoneyScreen.tsx
  - /profile → src/pages/ProfileScreen.tsx
- Shared components
  - BottomNav → src/components/BottomNav.tsx
  - Atoms → src/components/atoms/(Text|Avatar|IconButton|StatusIndicator).tsx
  - Molecules → src/components/molecules/(BalanceCard|QuickAction|TransactionItem).tsx
  - Organisms → src/components/organisms/(QuickActionsGrid|TransactionList).tsx

Notes
- This checklist intentionally covers only the three screens provided in screenshots and code.
