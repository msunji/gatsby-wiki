import React, { useState } from 'react';

export const themeContext = React.createContext();

const Theme = (props) => {
  const [dark, setDark] = useState(false);

  return (
    <themeContext.Provider value={{ dark, changeTheme: () => setDark(!dark) }}>
      {props.children}
    </themeContext.Provider>
  );
};

const ThemeProvider = ({ element }) => {
  return <Theme>{element}</Theme>;
};

export default ThemeProvider;
