import React from 'react';
import { UiProvider } from '../src/ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <UiProvider>
      <Story />
    </UiProvider>
  )
];
