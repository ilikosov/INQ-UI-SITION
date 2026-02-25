import * as React from 'react';
import { cx } from '../core/cx';
import { group, root } from './Topbar.css';

export interface TopbarProps extends React.HTMLAttributes<HTMLElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

/** Responsive topbar with flexible left and right slots. */
export function Topbar({ left, right, children, className, ...props }: TopbarProps) {
  return (
    <header className={cx(root, className)} {...props}>
      <div className={group}>{left ?? children}</div>
      <div className={group}>{right}</div>
    </header>
  );
}
