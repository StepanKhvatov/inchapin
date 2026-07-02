import styles from './Header.module.scss';
import LogoImage from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Burger } from '@/components/ui/Burger/Burger';

const PHONE = '+74955272121';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button variant="text" className={styles.menu}>
        <Burger />
        <span>Меню</span>
      </Button>
      <Button
        variant="primary"
        label="Выбрать квартиру"
        size="small"
        className={styles.select}
      />
      <Link href="/" className={styles.logo}>
        <Image src={LogoImage} alt={'Логотип Inchapin'} />
      </Link>

      <Link href={`tel:${PHONE}`} className={styles.phone}>
        {PHONE}
      </Link>

      <Button variant="text" label="Заказать звонок" className={styles.order} />
    </header>
  );
};
