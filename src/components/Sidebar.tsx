import * as React from 'react';
import { cx } from '../core/cx';
import { backdrop, backdropHidden, panel, panelOpen, shell } from './Sidebar.css';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  onClose?: () => void;
}

/** Mobile off-canvas sidebar that becomes static from md+. */
export function Sidebar({ open = false, onClose, className, children, ...props }: SidebarProps) {
  return (
    <div className={shell}>
      <button
        aria-label="Close sidebar"
        onClick={onClose}
        type="button"
        className={cx(backdrop, !open && backdropHidden)}
      />
      <aside className={cx(panel, open && panelOpen, className)} {...props}>
        {children}
      </aside>
    </div>
  );
}
