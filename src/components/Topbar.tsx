import type * as React from 'react';
import { styled } from '../core/stitches.config';

const Root = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  px: '$4',
  py: '$3',
  borderBottom: '1px solid $border',
  backgroundColor: '$background',
  '@md': {
    px: '$6',
    py: '$4',
  },
});

const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  '@md': {
    gap: '$3',
  },
});

export interface TopbarProps extends React.ComponentProps<typeof Root> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

/** Responsive topbar with flexible left and right slots. */
export function Topbar({ left, right, children, ...props }: TopbarProps) {
  return (
    <Root {...props}>
      <Group>{left ?? children}</Group>
      <Group>{right}</Group>
    </Root>
  );
}
