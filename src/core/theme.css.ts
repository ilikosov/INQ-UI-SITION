import { createGlobalTheme, createTheme, globalStyle } from '@vanilla-extract/css';
import { colors, fontSizes, radii, spacing } from './tokens';

export const vars = createGlobalTheme(':root', {
  color: colors,
  space: spacing,
  radius: radii,
  fontSize: fontSizes,
});

export const darkTheme = createTheme(vars, {
  color: {
    background: '#020617',
    surface: '#0f172a',
    text: '#e2e8f0',
    mutedText: '#94a3b8',
    border: '#1e293b',
    primary: '#3b82f6',
    primaryHover: '#60a5fa',
    focus: '#93c5fd',
    ghostHover: '#1e293b',
    success: '#34d399',
    sidebar: '#020617',
    sidebarText: '#e2e8f0',
  },
  space: spacing,
  radius: radii,
  fontSize: fontSizes,
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, sans-serif',
  backgroundColor: vars.color.background,
  color: vars.color.text,
  lineHeight: 1.5,
});

globalStyle('button', {
  fontFamily: 'inherit',
});

/** Kept for compatibility with previous API. */
export const globalStyles = () => undefined;
