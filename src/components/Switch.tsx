import * as React from 'react';
import { styled } from '../core/stitches.config';

const Track = styled('button', {
  width: '2.75rem',
  height: '1.5rem',
  borderRadius: '$full',
  border: '1px solid $border',
  backgroundColor: '$surface',
  padding: '2px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, border-color 150ms ease',
  '&:focus-visible': {
    outline: '2px solid $focus',
    outlineOffset: '2px',
  },
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      false: {},
    },
  },
});

const Thumb = styled('span', {
  display: 'block',
  width: '1.125rem',
  height: '1.125rem',
  borderRadius: '$full',
  backgroundColor: 'white',
  transition: 'transform 150ms ease',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  variants: {
    checked: {
      true: {
        transform: 'translateX(1.25rem)',
      },
      false: {
        transform: 'translateX(0)',
      },
    },
  },
});

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/** Accessible switch supporting controlled and uncontrolled usage. */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, defaultChecked = false, onCheckedChange, disabled, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const toggle = () => {
      if (disabled) return;
      const next = !currentChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <Track
        type="button"
        role="switch"
        aria-checked={currentChecked}
        checked={currentChecked}
        disabled={disabled}
        onClick={toggle}
        ref={ref}
        {...props}
      >
        <Thumb aria-hidden checked={currentChecked} />
      </Track>
    );
  },
);

Switch.displayName = 'Switch';
