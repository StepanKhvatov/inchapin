import { Hero } from '@/components/blocks/Hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero
        title="INCHAPIN"
        description="Дом бизнес-класса для ценителей роскоши"
        image={{
          src: '/images/hero.png',
          alt: 'Красивый дом в снежном лесу',
        }}
      />
    </main>
  );
}
