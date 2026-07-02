import { InputHTMLAttributes, forwardRef, useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, onChange, ...props }, ref) => {
    const [value, setValue] = useState('');

    const filled = String(value).length > 0;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);

      if (typeof onChange === 'function') {
        onChange(e);
      }
    };

    return (
      <div className={styles.field}>
        <input
          id={id}
          ref={ref}
          className={styles.input}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor={id}
          className={clsx(styles.label, filled && styles.filled)}
        >
          {label}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';
