'use client';

import { useEffect, useRef, PropsWithChildren } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { useMediaQuery } from 'usehooks-ts';
import styles from './CustomScrollbar.module.scss';

export const CustomScrollbar = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!ref.current || isMobile) {
      return;
    }

    const scrollbar = Scrollbar.init(ref.current, {
      damping: 0.06,
      renderByPixels: true,
    });

    return () => {
      scrollbar.destroy();
    };
  }, [isMobile]);

  return (
    <div ref={ref} className={styles.scrollbar}>
      {children}
    </div>
  );
};
