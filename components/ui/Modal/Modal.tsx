import { ReactNode, useRef, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

import styles from './Modal.module.scss';

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

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
      <div ref={nodeRef} className={styles.overlay} onClick={onClose}>
        <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>

          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
