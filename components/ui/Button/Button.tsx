import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{
  variant: 'primary' | 'outline' | 'text';
  size?: 'small' | 'large';
  className?: string;
  //  TO DO: поменять на html attr
  onClick?: () => void;
  label: string;
}>;

export const Button = ({
  variant,
  size,
  className,
  children,
  label,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        size && styles[size],
        className,
      )}
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
