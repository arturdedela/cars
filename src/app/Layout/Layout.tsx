import React, { PropsWithChildren } from 'react';

export interface LayoutProps {}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
