'use client';
import { Modal } from '../Modal';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Video.module.scss';
import { PlayIcon } from '../icons/PlayIcon';

export type VideoProps = {
  previewImage: Pick<ImageProps, 'src' | 'alt'>;
  video: string;
};

export const Video = ({ previewImage, video }: VideoProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log('open', open);
  }, [open]);

//   function toggleFullScreen(video) {
//     if (!document.fullscreenElement) {
//       // If the document is not in full screen mode
//       // make the video full screen
//       video.requestFullscreen();
//     } else {
//       // Otherwise exit the full screen
//       document.exitFullscreen?.();
//     }
//   }
  return (
    <>
      <button
        className={styles.video}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          src={previewImage.src}
          fill
          alt={previewImage.alt}
          quality={75}
        />
        <div className={styles.mask}>
          <div className={styles.playCorner}>
            <div className={styles.playContainer}>
              <PlayIcon />
              <p>Play</p>
            </div>
          </div>
        </div>
      </button>
      <Modal
        isOpen={open}
        onClose={() => {
          console.log('onClose');
          setOpen(false);
        }}
      >
        <video controls autoPlay style={{ width: '100%', height: 'auto' }}>
          <source src={video} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};
