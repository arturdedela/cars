import React, { PropsWithChildren } from 'react';
import { AppBar } from '../../ui';
import Logo from '../../assets/logo.png';

export interface LayoutProps {}

const LINKS = [
  { path: '/cars', label: 'Purchase' },
  { path: '/orders', label: 'My Orders' },
  { path: '/sell', label: 'Sell' },
];

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <AppBar logo={Logo} links={LINKS} />
      {children}
    </>
  );
};

export default Layout;
