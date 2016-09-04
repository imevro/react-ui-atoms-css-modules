import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

export default (styles = {}) => ({ className, children, to, ...rest }) => {
  if (to) {
    return (
      <Link {...rest} className={cn(styles.brand, className)} to={to}>
        {children}
      </Link>
    );
  } else {
    return (
      <a {...rest} className={cn(styles.brand, className)}>
        {children}
      </a>
    );
  }
};
