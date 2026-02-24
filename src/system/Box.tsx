import type * as React from 'react';
import { styled } from '../core/stitches.config';

/** Base layout primitive. */
export const Box = styled('div', {
  minWidth: 0,
});

export type BoxProps = React.ComponentProps<typeof Box>;
