import type * as React from 'react';
import { styled } from '../core/stitches.config';

const Root = styled('div', {
  width: '100%',
  overflowX: 'auto',
});

const StyledTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',

  thead: {
    display: 'none',
    '@md': {
      display: 'table-header-group',
    },
  },

  tbody: {
    display: 'grid',
    gap: '$3',
    '@md': {
      display: 'table-row-group',
      gap: 0,
    },
  },

  tr: {
    display: 'grid',
    border: '1px solid $border',
    borderRadius: '$md',
    backgroundColor: '$surface',
    '@md': {
      display: 'table-row',
      border: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  },

  th: {
    textAlign: 'left',
    fontSize: '$sm',
    color: '$mutedText',
    fontWeight: 600,
    px: '$4',
    py: '$3',
    borderBottom: '1px solid $border',
  },

  td: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '$3',
    px: '$4',
    py: '$3',
    fontSize: '$sm',
    borderBottom: '1px solid $border',
    '&:last-child': {
      borderBottom: 0,
    },
    '&::before': {
      content: 'attr(data-label)',
      color: '$mutedText',
      fontWeight: 600,
    },
    '@md': {
      display: 'table-cell',
      borderBottom: '1px solid $border',
      '&::before': {
        display: 'none',
      },
    },
  },
});

export type TableProps = React.ComponentProps<typeof StyledTable>;

/** Mobile-first data table with responsive enhancement at md+. */
export function Table({ children, ...props }: TableProps) {
  return (
    <Root>
      <StyledTable {...props}>{children}</StyledTable>
    </Root>
  );
}
