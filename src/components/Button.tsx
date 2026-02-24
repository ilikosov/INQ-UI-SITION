import * as React from 'react';
import { styled } from '../core/stitches.config';

const StyledButton = styled('button', {
  appearance: 'none',
  border: '1px solid transparent',
  borderRadius: '$md',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 120ms ease, border-color 120ms ease, color 120ms ease',
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: 'white',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primaryHover',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: '$border',
        color: '$text',
        '&:hover:not(:disabled)': {
          backgroundColor: '$ghostHover',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        px: '$3',
        py: '$2',
      },
      md: {
        fontSize: '$md',
        px: '$4',
        py: '$2',
      },
      lg: {
        fontSize: '$lg',
        px: '$5',
        py: '$3',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

/** Responsive button with style and size variants. */
export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof StyledButton>>(
  (props, ref) => <StyledButton ref={ref} {...props} />,
);

Button.displayName = 'Button';
