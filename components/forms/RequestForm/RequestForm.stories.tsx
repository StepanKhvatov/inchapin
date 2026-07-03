import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RequestForm } from './RequestForm';

const meta = {
  title: 'RequestForm',
  component: RequestForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RequestForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
