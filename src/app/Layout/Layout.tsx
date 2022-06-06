import React, { PropsWithChildren } from 'react';
import { AppBar, Footer } from '../../ui';
import Logo from '../../assets/logo.png';
import { styled } from '@mui/material';

export interface LayoutProps {}

const LINKS = [
  { path: '/cars', label: 'Purchase' },
  { path: '/orders', label: 'My Orders' },
  { path: '/sell', label: 'Sell' },
];

const LayoutRoot = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <LayoutRoot>
      <AppBar logo={Logo} logoUrl={'/cars'} links={LINKS} />
      {children}
      <Footer />
    </LayoutRoot>
  );
};

export default Layout;
