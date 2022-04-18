import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen container mx-auto mt-10 pb-24 px-5">
      <Nav />
      {/* <Sidebar /> */}
      <section className="mt-8">{children}</section>
    </main>
  );
};

export default Layout;
