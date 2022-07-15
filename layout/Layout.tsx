import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-midnight min-h-screen flex flex-col text-gray-100">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
