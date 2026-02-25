import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const root = style({ width: '100%', overflowX: 'auto' });

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const tableBody = style({
  display: 'grid',
  gap: vars.space[3],
  '@media': { 'screen and (min-width: 768px)': { display: 'table-row-group', gap: 0 } },
});

export const tableRow = style({
  display: 'grid',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.surface,
  '@media': {
    'screen and (min-width: 768px)': { display: 'table-row', border: 0, borderRadius: 0, backgroundColor: 'transparent' },
  },
});

export const th = style({
  textAlign: 'left',
  fontSize: vars.fontSize.sm,
  color: vars.color.mutedText,
  fontWeight: 600,
  padding: `${vars.space[3]} ${vars.space[4]}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const td = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: vars.space[3],
  padding: `${vars.space[3]} ${vars.space[4]}`,
  fontSize: vars.fontSize.sm,
  borderBottom: `1px solid ${vars.color.border}`,
  selectors: {
    '&:last-child': { borderBottom: 0 },
    '&::before': { content: 'attr(data-label)', color: vars.color.mutedText, fontWeight: 600 },
  },
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'table-cell',
      borderBottom: `1px solid ${vars.color.border}`,
      selectors: { '&::before': { display: 'none' } },
    },
  },
});

export const mobileHiddenHead = style({
  display: 'none',
  '@media': { 'screen and (min-width: 768px)': { display: 'table-header-group' } },
});
