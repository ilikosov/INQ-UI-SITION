import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const root = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space[3],
  padding: `${vars.space[3]} ${vars.space[4]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  '@media': {
    'screen and (min-width: 768px)': { padding: `${vars.space[4]} ${vars.space[6]}` },
  },
});

export const group = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
  '@media': {
    'screen and (min-width: 768px)': { gap: vars.space[3] },
  },
});
