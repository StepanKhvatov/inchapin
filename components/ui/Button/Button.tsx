import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{
  variant: 'primary' | 'outline';
  size: 'small' | 'large';
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
      className={clsx(styles.button, styles[variant], styles[size], className)}
    >
      <span className={styles.inner}>
        <span className={styles.text}>{label}</span>
        <span className={styles.text} aria-hidden="true">
          {label}
        </span>
      </span>
    </button>
  );
};
