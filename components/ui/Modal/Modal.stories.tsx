import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import { Modal, ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    onClose: { action: 'onClose' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState(args.isOpen ?? false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>

        <Modal
          isOpen={open}

          onClose={() => {
            setOpen(false);

            args.onClose?.();
          }}
        >
          <p>Panel</p>
        </Modal>
      </>
    );
  },
};
