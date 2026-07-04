'use client';

import Select, { components, ControlProps } from 'react-select';
import styles from './CustomSelect.module.scss';
import { Button } from '../Button';
import { ChevronIcon } from '../icons/ChevronIcon';

type Option = {
  label: string;
  value: string;
};

const CustomControl = ({ children, ...props }: ControlProps<Option>) => {
  return (
    <components.Control {...props}>
      <Button
        variant="primary"
        label="Выбрать квартиру"
        size="none"
        className={styles.select}
      >
        {children}
        <ChevronIcon className={styles.chevron} />
      </Button>
    </components.Control>
  );
};

export type CustomSelectProps = {
  className?: string;
  options: Option[];
};

export const CustomSelect = ({ options, className }: CustomSelectProps) => {
  return (
    <Select
      className={className}
      components={{
        Control: CustomControl,
        Placeholder: () => null,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
        ClearIndicator: () => null,
      }}
      styles={{
        control: (base) => ({
          ...base,
          outline: 'none',
          border: 'none',
        }),
      }}
      isSearchable={false}
      controlShouldRenderValue={false}
      options={options}
    />
  );
};
