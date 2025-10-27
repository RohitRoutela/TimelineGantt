/** @type { import('@storybook/react').Preview } */
import '../src/styles/globals.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;