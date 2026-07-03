import Image from 'next/image';
import styles from './HeroBlock.module.scss';
import heroImage from '@/public/images/hero.png';
import { LogoTitle } from '@/components/ui/icons/LogoTitle';

export const HeroBlock = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={heroImage}
          fill
          alt="Красивый дом в снежном лесу"
          loading="eager"
          quality={90}
        />
      </div>
      <h1 className={styles.title}>INCHAPIN</h1>
      <p className={styles.description}>
        Дом бизнес-класса для ценителей роскоши
      </p>
      <LogoTitle className={styles.logo} />
    </section>
  );
};
