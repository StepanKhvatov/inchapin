import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'aria-label'
> &
  PropsWithChildren<{
    variant: 'primary' | 'outline' | 'text' | 'unstyled';
    size?: 'small' | 'large';
    className?: string;
    label?: string;
  }>;

export const Button = ({
  variant,
  size,
  className,
  children,
  label,
  type,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        size && styles[size],
        className,
      )}
      type={type}
      onClick={onClick}
      aria-label={props['aria-label']}
    >
      {label && (
        <span className={styles.inner}>
          <span className={styles.innerText}>{label}</span>
          <span className={styles.innerText} aria-hidden="true">
            {label}
          </span>
        </span>
      )}
      {children}
    </button>
  );
};
