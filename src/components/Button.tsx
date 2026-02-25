import * as React from 'react';
import { cx } from '../core/cx';
import { button, fullWidth, size, variant } from './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variant;
  size?: keyof typeof size;
  fullWidth?: boolean;
}

/** Responsive button with style and size variants. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant: buttonVariant = 'primary', size: buttonSize = 'md', fullWidth: isFullWidth, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(button, variant[buttonVariant], size[buttonSize], isFullWidth && fullWidth, className)}
      {...props}
    />
  ),
);

Button.displayName = 'Button';
