import { createStitches } from '@stitches/react';
import { colors, fontSizes, radii, spacing } from './tokens';

export const { styled, css, createTheme, globalCss, keyframes, config } = createStitches({
  theme: {
    colors,
    space: spacing,
    radii,
    fontSizes,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
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
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, sans-serif',
    backgroundColor: '$background',
    color: '$text',
    lineHeight: 1.5,
  },
  button: {
    fontFamily: 'inherit',
  },
});
