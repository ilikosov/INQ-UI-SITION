import { style } from '@vanilla-extract/css';
import { vars } from '../core/theme.css';

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
});

export const gap = {
  1: style({ gap: vars.space[1] }),
  2: style({ gap: vars.space[2] }),
  3: style({ gap: vars.space[3] }),
  4: style({ gap: vars.space[4] }),
  5: style({ gap: vars.space[5] }),
  6: style({ gap: vars.space[6] }),
} as const;
