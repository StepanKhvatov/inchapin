'use client';

import { Button } from '@/components/ui/Button/Button';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { RequestForm } from '@/components/forms/RequestForm';

export type OpenRequestProps = {
  className?: string;
};
export const OpenRequest = ({ className }: OpenRequestProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="text"
        label="Заказать звонок"
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
        <h2>Заказать звонок</h2>
        <RequestForm />
      </Modal>
    </>
  );
};
