import React, { forwardRef } from 'react';

import cx from 'classnames';

import classes from './Button.module.scss';

type ButtonVariant = 'primary' | 'outlined' | 'link';

type ButtonSize = 'normal' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', type, variant = 'primary', fullWidth = false, size, children, disabled, ...props }, ref) => (
    <button
      className={cx(classes.btn, classes[`btn--${variant}`], classes[`btn--${size}`], {
        [classes['btn--full-width']]: fullWidth,
        [classes['btn--disabled']]: disabled,
        [className]: !!className,
      })}
      disabled={disabled}
      ref={ref}
      type={type}
      {...props}
    >
      <span
        className={cx({
          [classes['btn--underline']]: variant === 'link',
        })}
      >
        {children}
      </span>
    </button>
  ),
);
