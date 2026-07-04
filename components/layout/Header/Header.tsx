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
import { CustomSelectButton } from './CustomSelectButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button
        variant="unstyled"
        aria-label="Меню"
        className={clsx(styles.menu, burgerStyles.burgerContainer)}
      >
        <Burger />
        <span className={styles.menuText}>Меню</span>
      </Button>
      <CustomSelectButton className={styles.select} />

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
