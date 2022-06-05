import React, { PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider, Theme } from '@mui/material';
import { DEFAULT_THEME } from './defaultTheme';

export interface UiProviderProps {
  theme?: Theme;
}

const UiProvider: React.FC<PropsWithChildren<UiProviderProps>> = ({ children, theme = DEFAULT_THEME }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default UiProvider;
