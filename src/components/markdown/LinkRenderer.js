import React from 'react';
import { Link } from 'gatsby';

const LinkRenderer = ({ href, children }) => {
  if (href.includes('.md')) {
    const [category, route] = href.split('/');
    let parsedRoute = route.replace(/(.md)/g, '').replace(/(%20)/g, '-');
    return <Link to={`/${category}/${parsedRoute}`}>{children}</Link>;
  } else {
    return <a href={href}>{children}</a>;
  }
};

export default LinkRenderer;
