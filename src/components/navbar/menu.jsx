import React from 'react';
import cn from 'classnames';

const Menu = (styles = {}) => ({ className, children, left, right, ...rest }) => {
  const anotherClass = {
    [styles.left]: !!left,
    [styles.right]: !!right,
  };

  return (
    <div {...rest} className={cn(anotherClass, className, styles.className)}>
      {children}
    </div>
  );
};

export default Menu;
