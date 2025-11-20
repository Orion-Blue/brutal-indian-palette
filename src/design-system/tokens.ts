// Mobile-First Design Tokens for Catalog pages
// All values optimized for 412px mobile viewport with clear scaling hierarchy

export const spacing = {
  // Mobile-first spacing scale (4px baseline)
  'space-0': 0,
  'space-xxs': 4,
  'space-xs': 8,
  'space-sm': 12,
  'space-md': 16,
  'space-lg': 20,
  'space-xl': 24,
  'space-2xl': 32,
  'space-3xl': 40,
  'space-4xl': 48,
  // Padding presets for mobile cards
  'pad-touch': 12,     // Minimum touch target interior
  'pad-card': 16,      // Card internal padding
  'pad-section': 20,   // Section padding
};

export const borderRadius = {
  // Mobile radius scale - larger for more obvious rounded corners on small screens
  'radius-xs': 4,
  'radius-sm': 8,
  'radius-md': 12,
  'radius-lg': 16,
  'radius-xl': 20,
  'radius-2xl': 24,
  'radius-full': 9999,
  // Component-specific
  'radius-button': 12,
  'radius-input': 12,
  'radius-card': 16,
  'radius-avatar': 9999,
};

export const touchTargets = {
  // WCAG AA: minimum 44x44px
  'touch-min': 44,
  'touch-sm': 44,
  'touch-md': 48,
  'touch-lg': 56,
  'touch-xl': 64,
};

export const typography = {
  // Mobile-first typography scale (1.25 ratio, optimized readability)
  'type-micro': { fontSize: '10px', lineHeight: 1.4, fontWeight: 500 },
  'type-caption': { fontSize: '12px', lineHeight: 1.4, fontWeight: 600 },
  'type-body-sm': { fontSize: '13px', lineHeight: 1.5, fontWeight: 400 },
  'type-body': { fontSize: '14px', lineHeight: 1.6, fontWeight: 400 },
  'type-body-lg': { fontSize: '15px', lineHeight: 1.6, fontWeight: 400 },
  'type-h4': { fontSize: '16px', lineHeight: 1.5, fontWeight: 700 },
  'type-h3': { fontSize: '18px', lineHeight: 1.4, fontWeight: 700 },
  'type-h2': { fontSize: '20px', lineHeight: 1.3, fontWeight: 700 },
  'type-h1': { fontSize: '24px', lineHeight: 1.2, fontWeight: 700 },
};

export const shadows = {
  // Mobile-optimized shadow scale for depth hierarchy
  'shadow-none': 'none',
  'shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
  'shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
  'shadow-md': '0 2px 8px 0 rgba(0, 0, 0, 0.06)',
  'shadow-lg': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
  'shadow-xl': '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
  'shadow-card': '0 2px 12px 0 rgba(0, 0, 0, 0.08)',
  'shadow-elevated': '0 12px 32px 0 rgba(0, 0, 0, 0.12)',
};

export const colors = {
  background: 'var(--background)',
  card: 'var(--card)',
  border: 'var(--border)',
  foreground: 'var(--foreground)',
  'muted': 'var(--muted)',
  'muted-foreground': 'var(--muted-foreground)',
  primary: 'var(--primary)',
  'primary-foreground': 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  'secondary-foreground': 'var(--secondary-foreground)',
  success: 'var(--success)',
  'success-foreground': 'var(--success-foreground)',
  destructive: 'var(--destructive)',
  'destructive-foreground': 'var(--destructive-foreground)',
  'brand-yellow': 'var(--brand-yellow)',
  'brand-yellow-light': 'var(--brand-yellow-light)',
  'brand-yellow-dark': 'var(--brand-yellow-dark)',
  'accent-blue': 'var(--accent-blue)',
  'accent-green': 'var(--accent-green)',
  'accent-red': 'var(--accent-red)',
  'accent-purple': 'var(--accent-purple)',
  'accent-orange': 'var(--accent-orange)',
};

export const componentDefaults = {
  // Mobile component sizing guidelines
  'button-height-sm': 40,
  'button-height-md': 44,
  'button-height-lg': 48,
  'input-height': 44,
  'avatar-sm': 32,
  'avatar-md': 40,
  'avatar-lg': 56,
  'avatar-xl': 72,
  'icon-sm': 20,
  'icon-md': 24,
  'icon-lg': 32,
};

export type TokenUsage = {
  spacing?: string[];
  typography?: string[];
  colors?: string[];
  borderRadius?: string[];
  shadows?: string[];
};
