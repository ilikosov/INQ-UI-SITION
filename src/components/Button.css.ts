import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const button = style({
  appearance: 'none',
  border: '1px solid transparent',
  borderRadius: vars.radius.md,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 120ms ease, border-color 120ms ease, color 120ms ease',
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.color.focus}`,
      outlineOffset: '2px',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
});

export const variant = {
  primary: style({
    backgroundColor: vars.color.primary,
    color: 'white',
    selectors: { '&:hover:not(:disabled)': { backgroundColor: vars.color.primaryHover } },
  }),
  ghost: style({
    backgroundColor: 'transparent',
    borderColor: vars.color.border,
    color: vars.color.text,
    selectors: { '&:hover:not(:disabled)': { backgroundColor: vars.color.ghostHover } },
  }),
} as const;

export const size = {
  sm: style({ fontSize: vars.fontSize.sm, padding: `${vars.space[2]} ${vars.space[3]}` }),
  md: style({ fontSize: vars.fontSize.md, padding: `${vars.space[2]} ${vars.space[4]}` }),
  lg: style({ fontSize: vars.fontSize.lg, padding: `${vars.space[3]} ${vars.space[5]}` }),
} as const;

export const fullWidth = style({ width: '100%' });
