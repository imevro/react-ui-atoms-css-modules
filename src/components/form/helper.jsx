import React from 'react';
import cn from 'classnames';

const Helper = (styles = {}) => ({ className, children, ...rest }) => (
  <span {...rest} className={cn(styles.helper, className)}>
    {children}
  </span>
);

export default Helper;
