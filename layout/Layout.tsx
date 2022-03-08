import React from 'react';
import { Navbar } from '../components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-midnight min-h-screen flex flex-col text-gray-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
