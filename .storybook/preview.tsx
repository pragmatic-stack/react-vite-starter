import 'tailwindcss/tailwind.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { handlers } from '../src/__msw__/handlers';
import { config } from '../src/config';

import { providersDecorator } from './decorators/providers';

initialize({
  onUnhandledRequest: ({ method, url }) => {
    /* only report unhandled api calls */
    if (url.origin.includes(config.apiUrl)) {
      console.error(`Unhandled ${method} request to ${url}`);
    }
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: [...handlers],
};

export const decorators = [mswDecorator, providersDecorator];
