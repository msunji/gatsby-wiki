import React from 'react';
import Moon from './Moon';
import { Link } from 'gatsby';

const Nav = ({ darkMode }) => {
  return (
    <nav className="max-w-[70ch] mx-auto flex items-center justify-between py-8">
      <h1 className="font-bold text-xl">
        <Link to="/">From the Desk Of</Link>
      </h1>
      <button onClick={darkMode}>
        <Moon />
      </button>
    </nav>
  );
};

export default Nav;
