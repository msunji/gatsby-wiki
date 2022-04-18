import React from 'react';
import Layout from './src/components/Layout';
import ThemeProvider from './src/utils/ThemeProvider';

export const wrapRootElement = ThemeProvider;

// This is for wrapping every page in the wiki with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
