'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { RequestForm } from '@/components/forms/RequestForm';
import modalStyles from '@/components/ui/Modal/Modal.module.scss';

export type OpenRequestProps = {
  className?: string;
};

import dynamic from 'next/dynamic';

const OpenRequestButton = dynamic(
  () => import('./OpenRequestButton').then((mod) => mod.OpenRequestButton),
  { ssr: false },
);

export const OpenRequest = ({ className }: OpenRequestProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OpenRequestButton
        className={className}
        onClick={() => {
          setOpen(true);
        }}
      />
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h2 className={modalStyles.heading}>Заказать звонок</h2>
        <RequestForm />
      </Modal>
    </>
  );
};
