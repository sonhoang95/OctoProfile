import React from 'react';
import { Navbar } from '../components';

export interface LayoutProps {
  children: React.ReactNode;
  isHome?: boolean;
}
const Layout = ({ children, isHome }: LayoutProps) => {
  return (
    <div className="bg-midnight min-h-screen flex flex-col text-gray-100">
      {isHome ? <Navbar /> : ''}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
