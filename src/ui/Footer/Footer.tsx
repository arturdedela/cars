import React from 'react';
import { AppBar, Typography } from '@mui/material';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      color="transparent"
      sx={{ mt: 'auto', height: 80, alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography variant="body2">© AUTO1 Group {new Date().getFullYear()}</Typography>
    </AppBar>
  );
};

export default Footer;
