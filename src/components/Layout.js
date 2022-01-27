import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <main className="flex md:gap-x-10">
      <Sidebar />
      <div className="pt-28 pb-24 md:pt-20 container mx-auto w-11/12">
        {children}
      </div>
    </main>
  );
};

export default Layout;
