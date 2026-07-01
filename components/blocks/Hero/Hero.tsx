import Image from 'next/image';
import styles from './Hero.module.scss';

type Image = {
  src: string;
  alt: string;
};
export type HeroProps = {
  title: string;
  description: string;
  image: Image;
};

export const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <section className={styles.hero}>
      {Boolean(image.src && image.alt) && (
        <div className={styles.imageContainer}>
          <Image
            src={image.src}
            fill
            sizes="100vw"
            alt={image.alt}
            className={styles.image}
          />
        </div>
      )}
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <p className={styles.description}>{description}</p>}
    </section>
  );
};
