import * as React from 'react';
import { box } from './Box.css';
import { cx } from '../core/cx';

/** Base layout primitive. */
export const Box = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(box, className)} {...props} />
));

Box.displayName = 'Box';

export type BoxProps = React.ComponentProps<typeof Box>;
