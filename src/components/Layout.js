import React from 'react';
import { themeContext } from '../utils/ThemeProvider';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <themeContext.Consumer>
      {(context) => {
        const toggleDark = () => {
          context.changeTheme();
        };
        return (
          <div className={`${context.dark ? 'dark' : ''}`}>
            <main className="min-h-screen w-full mx-auto pb-24 px-5 bg-white dark:bg-slate-900 dark:text-white">
              <Nav darkMode={toggleDark} />
              <article
                className="mt-10 prose mx-auto prose-slate prose-h1:mb-1 prose-p:leading-relaxed prose-li:leading-relaxed prose-img:rounded-md prose-a:text-red-500 prose-hr:my-8 
                dark:prose-invert"
              >
                {children}
              </article>
            </main>
          </div>
        );
      }}
    </themeContext.Consumer>
  );
};

export default Layout;
