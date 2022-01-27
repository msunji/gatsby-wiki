import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen md:gap-x-10 md:flex">
      <Sidebar />
      <div className="pt-28 pb-24 md:pt-20 container mx-auto w-11/12 h-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;
