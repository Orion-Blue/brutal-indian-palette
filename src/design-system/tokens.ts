// Design tokens for Catalog pages (exported as simple objects)
export const spacing = {
  'space-xxs': 4,
  'space-xs': 8,
  'space-sm': 12,
  'space-md': 16,
  'space-lg': 24,
};

export const typography = {
  'type-h1': { fontSize: '32px', lineHeight: 1.2, fontWeight: 700 },
  'type-h2': { fontSize: '24px', lineHeight: 1.25, fontWeight: 700 },
  'type-body': { fontSize: '14px', lineHeight: 1.6, fontWeight: 400 },
  'type-caption': { fontSize: '12px', lineHeight: 1.4, fontWeight: 600 },
};

export const colors = {
  background: 'var(--background)',
  card: 'var(--card)',
  border: 'var(--border)',
  foreground: 'var(--foreground)',
  muted: 'var(--muted)',
  primary: 'var(--primary)',
  success: 'var(--success, #16a34a)',
};

export type TokenUsage = {
  spacing?: string[];
  typography?: string[];
  colors?: string[];
};
