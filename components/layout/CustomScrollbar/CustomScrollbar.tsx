'use client';

import { useEffect, useRef, PropsWithChildren } from 'react';
import styles from './CustomScrollbar.module.scss';
import Scrollbar from 'smooth-scrollbar';

export const CustomScrollbar = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const scrollbar = Scrollbar.init(ref.current, {
      renderByPixels: true,
      damping: 0.06,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={ref} className={styles.scrollbar}>
      {children}
    </div>
  );
};
