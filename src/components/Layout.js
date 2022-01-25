import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <main className="grid md:grid-cols-main gap-x-16">
      <Sidebar />
      <div className="pt-16">{children}</div>
    </main>
  );
};

export default Layout;
