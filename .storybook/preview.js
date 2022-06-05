import React from 'react';
import { UiProvider } from '../src/ui';
import { MemoryRouter } from 'react-router-dom';

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
    <MemoryRouter>
      <UiProvider>
        <Story />
      </UiProvider>
    </MemoryRouter>
  ),
];
