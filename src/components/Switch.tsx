import * as React from 'react';
import { cx } from '../core/cx';
import { thumb, thumbChecked, track, trackChecked } from './Switch.css';

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/** Accessible switch supporting controlled and uncontrolled usage. */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, defaultChecked = false, onCheckedChange, disabled, className, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const toggle = () => {
      if (disabled) return;
      const next = !currentChecked;
      if (!isControlled) setInternalChecked(next);
      onCheckedChange?.(next);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={currentChecked}
        disabled={disabled}
        onClick={toggle}
        ref={ref}
        className={cx(track, currentChecked && trackChecked, className)}
        {...props}
      >
        <span aria-hidden className={cx(thumb, currentChecked && thumbChecked)} />
      </button>
    );
  },
);

Switch.displayName = 'Switch';
