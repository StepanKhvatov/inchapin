import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className={styles.field}>
      <input id={id} className={styles.input} {...props} />

      {/* <label htmlFor={id} className={styles.label}>
        {label}
      </label> */}
    </div>
  );
};
