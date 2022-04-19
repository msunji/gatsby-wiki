import React from 'react';

const Quote = ({ children }) => {
  return (
    <blockquote className="py-1 border-l-[7px]  border-l-slate-500 bg-slate-100 dark:bg-slate-800">
      {children}
    </blockquote>
  );
};

export default Quote;
