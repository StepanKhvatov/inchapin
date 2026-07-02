import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick'
> &
  PropsWithChildren<{
    variant: 'primary' | 'outline' | 'text';
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
