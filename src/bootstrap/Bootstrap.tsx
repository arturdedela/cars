import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UiProvider } from '../ui';

export interface BootstrapProps {}

// Add other providers here
const Bootstrap: React.FC<PropsWithChildren<BootstrapProps>> = ({ children }) => {
  return (
    <BrowserRouter>
      <UiProvider>{children}</UiProvider>
    </BrowserRouter>
  );
};

export default Bootstrap;
