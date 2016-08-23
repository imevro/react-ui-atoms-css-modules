import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => (
  <div {...props} className={cn(styles.btnGroup, props.className)}>
    {props.children}
  </div>
);
