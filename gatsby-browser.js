import React from 'react';
import './src/styles/global.css';
import Layout from './src/components/Layout';

// This is for wrapping every page in the wiki with the Layout component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
