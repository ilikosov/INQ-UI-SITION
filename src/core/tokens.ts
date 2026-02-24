/** Design tokens for inq-ui-sition. */
export const colors = {
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#0f172a',
  mutedText: '#475569',
  border: '#e2e8f0',
  primary: '#2563eb',
  primaryHover: '#1d4ed8',
  focus: '#60a5fa',
  ghostHover: '#e2e8f0',
  success: '#10b981',
  sidebar: '#0f172a',
  sidebarText: '#f8fafc',
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
} as const;

export const radii = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  full: '9999px',
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
} as const;
