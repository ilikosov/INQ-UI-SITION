import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const track = style({
  width: '2.75rem',
  height: '1.5rem',
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  padding: '2px',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, border-color 150ms ease',
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

export const trackChecked = style({
  backgroundColor: vars.color.primary,
  borderColor: vars.color.primary,
});

export const thumb = style({
  display: 'block',
  width: '1.125rem',
  height: '1.125rem',
  borderRadius: vars.radius.full,
  backgroundColor: 'white',
  transition: 'transform 150ms ease',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
});

export const thumbChecked = style({ transform: 'translateX(1.25rem)' });
