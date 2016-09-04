import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

const NavLink = (styles = {}) => ({ className, children, to, ...rest }) => {
  if (to) {
    return (
      <Link {...rest} className={cn(styles.link, className)} to={to}>
        {children}
      </Link>
    );
  } else {
    return (
      <a {...rest} className={cn(styles.link, className)}>
        {children}
      </a>
    );
  }
};

export default NavLink;
