import * as React from 'react';
import { styled } from '../core/stitches.config';

const StyledStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    gap: {
      1: { gap: '$1' },
      2: { gap: '$2' },
      3: { gap: '$3' },
      4: { gap: '$4' },
      5: { gap: '$5' },
      6: { gap: '$6' },
    },
  },
  defaultVariants: {
    gap: 3,
  },
});

/** Vertical flex layout primitive with gap variants. */
export const Stack = StyledStack;

export type StackProps = React.ComponentProps<typeof Stack>;
