import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UiProvider } from '../ui';
import { ApiProvider } from '../api';

export interface BootstrapProps {}

// Add other providers here
const Bootstrap: React.FC<PropsWithChildren<BootstrapProps>> = ({ children }) => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <UiProvider>{children}</UiProvider>
      </ApiProvider>
    </BrowserRouter>
  );
};

export default Bootstrap;
