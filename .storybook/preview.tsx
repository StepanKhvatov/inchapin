import type { Preview } from '@storybook/nextjs-vite';
import '../styles/globals.scss';

import { proximaNova } from '../app/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={proximaNova.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
