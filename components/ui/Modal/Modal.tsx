'use client';

import { useRef, PropsWithChildren, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Modal.module.scss';
import { CloseIcon } from '../icons/CloseIcon';
import { Button } from '../Button';

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={styles.overlay}>
        <div className={styles.container}>
          <Button
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть"
            variant="text"
          >
            <CloseIcon />
          </Button>
          <div
            className={styles.panel}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
