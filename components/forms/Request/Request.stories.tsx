import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Request } from './Request';

const meta = {
  title: 'Request',
  component: Request,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Request>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
