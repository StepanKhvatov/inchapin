// 'use client';
import styles from './Header.module.scss';
import clsx from 'clsx';
import LogoImage from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Burger } from '@/components/ui/Burger/Burger';
import { OpenRequest } from './OpenRequestForm';
import { MASKED_REQUEST_PHONE, REQUEST_PHONE } from '@/constants';
import burgerStyles from '@/components/ui/Burger/Burger.module.scss';
// import Select, { components, ControlProps } from 'react-select';

// type Option = {
//   label: string;
//   value: string;
// };

// const CustomControl = ({ children, ...props }: ControlProps<Option>) => {
//   // return (
//   //   <div style={{ border: '2px solid purple', borderRadius: '8px' }}>
//   //     <span>🌟</span>
//   //     {/* 2. Wrap and spread props to retain default logic */}
//   //     <components.Control {...props}>{children}</components.Control>
//   //   </div>
//   // );
//   return (
//     <div>
//       <Button
//         variant="primary"
//         label="Выбрать квартиру"
//         size="small"
//         className={styles.select}
//       />
//       <components.Control {...props}>{children}</components.Control>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button
        variant="unstyled"
        className={clsx(styles.menu, burgerStyles.burgerContainer)}
      >
        <Burger />
        <span className={styles.menuText}>Меню</span>
      </Button>
      <Button
        variant="primary"
        label="Выбрать квартиру"
        size="small"
        className={styles.select}
      />
      {/* <Select
        components={{
          Control: CustomControl,
          // IndicatorSeparator: () => null,
          // DropdownIndicator: () => null,
          // ClearIndicator: () => null,
          Input: () => null,
          Placeholder: () => null,
          ValueContainer: (props) => null,
          Option: (props) => {
            const { value, label } = props.data;

            return (
              <components.Option {...props}>
                <Link href={'/test'}>{label}</Link>
              </components.Option>
            );
          },
        }}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
        isSearchable={false}

        controlShouldRenderValue={false}

        placeholder=""

        blurInputOnSelect={false}

        backspaceRemovesValue={false}

        tabSelectsValue={false}
      /> */}
      <Link href="/" className={styles.logo}>
        <Image src={LogoImage} alt={'Логотип Inchapin'} />
      </Link>
      <Link href={`tel:${REQUEST_PHONE}`} className={styles.phone}>
        {MASKED_REQUEST_PHONE}
      </Link>
      <OpenRequest className={styles.order} />
    </header>
  );
};
