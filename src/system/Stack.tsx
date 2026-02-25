import * as React from 'react';
import { cx } from '../core/cx';
import { gap, stack } from './Stack.css';

type Gap = keyof typeof gap;

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: Gap;
}

/** Vertical flex layout primitive with gap variants. */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ className, gap: gapSize = 3, ...props }, ref) => (
  <div ref={ref} className={cx(stack, gap[gapSize], className)} {...props} />
));

Stack.displayName = 'Stack';
