import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Name: Story = {
  args: {
    id: 'name',
    label: 'Имя',
    autoComplete: 'name',
  },
};

export const Phone: Story = {
  args: {
    id: 'phone',
    label: 'Телефон',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: '+7 (___) ___-__-__',
  },
};

export const Email: Story = {
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
  },
};
