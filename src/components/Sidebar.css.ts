import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const shell = style({ position: 'relative' });

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  border: 0,
  backgroundColor: 'rgba(2, 6, 23, 0.6)',
  zIndex: 20,
  '@media': { 'screen and (min-width: 768px)': { display: 'none' } },
});

export const backdropHidden = style({ display: 'none' });

export const panel = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100dvh',
  width: '16rem',
  backgroundColor: vars.color.sidebar,
  color: vars.color.sidebarText,
  transform: 'translateX(-100%)',
  transition: 'transform 180ms ease',
  zIndex: 30,
  overflowY: 'auto',
  padding: `${vars.space[5]} ${vars.space[4]}`,
  '@media': { 'screen and (min-width: 768px)': { position: 'sticky', transform: 'translateX(0)' } },
});

export const panelOpen = style({ transform: 'translateX(0)' });
