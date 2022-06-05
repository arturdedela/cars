import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

export interface BootstrapProps {}

const theme = createTheme({});
// Add other providers here
const Bootstrap: React.FC<PropsWithChildren<BootstrapProps>> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Bootstrap;
