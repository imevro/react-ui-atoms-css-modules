import React from 'react';
import cn from 'classnames';

const NavLink = (styles = {}) => ({ className, children, ...rest }) => {
  return (
    <a {...rest} className={cn(styles.link, className)}>
      {children}
    </a>
  );
};

export default NavLink;
