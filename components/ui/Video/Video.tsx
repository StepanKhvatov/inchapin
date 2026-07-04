'use client';

import { Modal } from '../Modal';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState, useRef } from 'react';
import styles from './Video.module.scss';
import { PlayIcon } from '../icons/PlayIcon';

export type VideoProps = {
  previewImage: Pick<ImageProps, 'src' | 'alt'>;
  video: string;
};

export const Video = ({ previewImage, video }: VideoProps) => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = async () => {
    if (!videoRef.current) {
      return;
    }

    try {
      await videoRef.current.requestFullscreen();

      await videoRef.current.play();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) {
        setOpen(false);
      }
    };

    document.addEventListener('fullscreenchange', handler);

    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <>
      <div
        tabIndex={0}
        className={styles.video}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          src={previewImage.src}
          fill
          alt={previewImage.alt}
          sizes="(max-width: 767px) 130px,
          (max-width: 1023px) 135px, 
          (max-width: 1280px) 135px,
          (min-width: 1770px) 240px,
          185px"
        />
        <div className={styles.mask}>
          <div className={styles.playCorner}>
            <div className={styles.playContainer}>
              <PlayIcon />
              <p>Play</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <video
          ref={videoRef}
          controls
          autoPlay
          preload="none"
          style={{ width: '100%', height: 'auto' }}
          onCanPlay={handleCanPlay}
        >
          <source src={video} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};
