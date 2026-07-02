import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Burger } from './Burger';

const meta = {
  title: 'Burger',
  component: Burger,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Burger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
