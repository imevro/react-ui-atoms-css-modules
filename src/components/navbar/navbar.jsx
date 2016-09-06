import React from 'react';
import cn from 'classnames';

const NavBar = (styles = {}) => ({ className, children, fixed, ...rest }) => {
  const anotherClass = {
    [styles.fixed]: !!fixed,
  };

  return (
    <nav {...rest} className={cn(styles.navbar, anotherClass, className)}>
      {children}
    </nav>
  );
};

export default NavBar;
