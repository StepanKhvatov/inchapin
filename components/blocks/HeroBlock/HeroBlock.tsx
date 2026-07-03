import Image from 'next/image';
import styles from './HeroBlock.module.scss';
import heroImage from '@/public/images/hero.png';

export const HeroBlock = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
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
    </section>
  );
};
