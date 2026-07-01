import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Hero } from './Hero';

const meta = {
  title: 'Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroStory: Story = {
  args: {
    title: 'INCHAPIN',
    description: 'Дом бизнес-класса для ценителей роскоши',
    image: {
      src: '/public/images/hero.png',
      alt: 'Красивый дом в снежном лесу',
    },
  },
};
