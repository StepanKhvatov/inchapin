import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  args: {
    children: 'Button',
    variant: 'primary',
    size: 'small',
    onClick: fn(),
    label: 'Button',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
