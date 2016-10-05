import React from 'react';
import cn from 'classnames';

export default (styles = {}) => ({ className, children, ...rest }) => {
  return (
    <a {...rest} className={cn(styles.brand, className)}>
      {children}
    </a>
  );
};
