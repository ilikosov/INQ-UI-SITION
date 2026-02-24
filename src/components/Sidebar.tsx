import * as React from 'react';
import { styled } from '../core/stitches.config';

const Shell = styled('div', {
  position: 'relative',
});

const Backdrop = styled('button', {
  position: 'fixed',
  inset: 0,
  border: 0,
  backgroundColor: 'rgba(2, 6, 23, 0.6)',
  zIndex: 20,
  '@md': {
    display: 'none',
  },
  variants: {
    open: {
      true: { display: 'block' },
      false: { display: 'none' },
    },
  },
});

const Panel = styled('aside', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100dvh',
  width: '16rem',
  backgroundColor: '$sidebar',
  color: '$sidebarText',
  transform: 'translateX(-100%)',
  transition: 'transform 180ms ease',
  zIndex: 30,
  overflowY: 'auto',
  px: '$4',
  py: '$5',
  '@md': {
    position: 'sticky',
    transform: 'translateX(0)',
    height: '100dvh',
  },
  variants: {
    open: {
      true: { transform: 'translateX(0)' },
      false: { transform: 'translateX(-100%)' },
    },
  },
});

export interface SidebarProps extends React.ComponentProps<typeof Panel> {
  open?: boolean;
  onClose?: () => void;
}

/** Mobile off-canvas sidebar that becomes static from md+. */
export function Sidebar({ open = false, onClose, children, ...props }: SidebarProps) {
  return (
    <Shell>
      <Backdrop aria-label="Close sidebar" open={open} onClick={onClose} type="button" />
      <Panel open={open} {...props}>
        {children}
      </Panel>
    </Shell>
  );
}
