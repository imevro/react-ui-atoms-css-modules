import React from 'react';
import cn from 'classnames';

const Panel = (styles = {}) => ({ className, children, size, ...rest }) => {
  const anotherClass = {
    [styles[size]]: !!size,
  };

  return (
    <div {...rest} className={cn(styles.panel, anotherClass, className)}>
      {children}
    </div>
  );
};

export default Panel;
