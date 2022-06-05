import { createTheme } from '@mui/material/styles';

export const DEFAULT_THEME = createTheme({
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '18px',
    },
    body2: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '12px',
    },
    button: {
      color: '#EDEDED',
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#EA7F28',
      contrastText: '#FFF',
    },
    text: {
      primary: '#4A4A4A',
    },
  },
});
