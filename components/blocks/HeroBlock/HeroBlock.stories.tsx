import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeroBlock } from './HeroBlock';

const meta = {
  title: 'HeroBlock',
  component: HeroBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeroBlock>;

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
