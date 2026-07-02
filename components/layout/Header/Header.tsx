import styles from './Header.module.scss';
import LogoImage from '../../../public/icons/logo.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button variant="primary" label="Выбрать квартиру" size="small" />
      <Image src={LogoImage} alt={'Логотип Inchapin'} className={styles.logo} />
      <div className={styles.order}>
        <Button variant="text" label="Заказать звонок" />
      </div>
    </header>
  );
};
