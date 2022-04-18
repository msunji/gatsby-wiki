import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav className="max-w-[70ch] mx-auto flex items-center justify-between py-8">
      <h1 className="font-bold text-xl">
        <Link to="/">From the Desk Of</Link>
      </h1>
      <div>Dark Mode</div>
    </nav>
  );
};

export default Nav;
