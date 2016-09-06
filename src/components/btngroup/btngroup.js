import React from 'react';
import cn from 'classnames';

const BtnGroup = (styles = {}) => ({ className, children, ...rest }) => (
  <div {...rest} className={cn(styles.btnGroup, className)}>
    {children}
  </div>
);

export default BtnGroup;
