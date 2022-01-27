import { useState, useEffect } from 'react';

export const useOutsideClick = (target, initState) => {
  const [toggleDrawer, setToggleDrawer] = useState(initState);

  useEffect(() => {
    const clickOutside = (e) => {
      if (target.current && target.current.contains(e.target)) {
        return;
      }
      setToggleDrawer(false);
    };

    if (toggleDrawer) {
      window.addEventListener('click', clickOutside);
    }
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [toggleDrawer, target]);

  return [toggleDrawer, setToggleDrawer];
};
