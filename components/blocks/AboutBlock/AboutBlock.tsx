import Image from 'next/image';
import { Video } from '@/components/ui/Video';
import styles from './AboutBlock.module.scss';
import aboutImage from '@/public/images/about.png';
import previewImage from '@/public/images/preview.png';
import { LogoSmallIcon } from '@/components/ui/icons/LogoSmallIcon';

export const AboutBlock = () => {
  return (
    <section className={styles.about}>
      <div className={styles.imageSide}>
        <p className={styles.overtitle}>о проекте</p>
        <div className={styles.imageContainer}>
          <Image
            src={aboutImage}
            fill
            alt={'Красивый дом'}
            sizes="(max-width: 767px) 300px,
            (max-width: 1023px) 290px, 
            (max-width: 1280px) 410px,
            (min-width: 1770px) 675px,
            570px"
            quality={90}
          />
          <div className={styles.logo}>
            <LogoSmallIcon />
          </div>
        </div>
      </div>
      <div className={styles.titleSide}>
        <div className={styles.separator} />
        <h2 className={styles.title}>
          уютное и безопасное пространство для счастливой,{' '}
          <mark>спокойной и размеренной жизни</mark>
        </h2>
        <p className={styles.description}>
          <mark>Квартиры от 65 до 356 м2 с чистовой отделкой</mark>, балконами,
          лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
        </p>
        <div className={styles.videoSide}>
          <div className={styles.captionContainer}>
            <p className={styles.caption}>Видео о проекте</p>
            <p className={styles.duration}>0:17 минут</p>
          </div>
          <div className={styles.divider}></div>
          <Video
            previewImage={{
              src: previewImage,
              alt: 'Красивый дом',
            }}
            video="/videos/houses.mp4"
          />
        </div>
      </div>
    </section>
  );
};
