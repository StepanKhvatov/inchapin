import styles from './Burger.module.scss';
import clsx from 'clsx';

export type BurgerProps = {
  className?: string;
};

export const Burger = ({ className }: BurgerProps) => {
  return (
    <span className={clsx(className, styles.burger)}>
      <span />
      <span />
      <span />
    </span>
  );
};
