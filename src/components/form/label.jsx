import React from 'react';
import cn from 'classnames';

const Label = (styles = {}) => ({ className, children, block, ...rest }) => {
  const anotherClass = {
    [styles.block]: !!block,
  };

  return (
    <label {...rest} className={cn(styles.label, anotherClass, className)}>
      {children}
    </label>
  );
};

export default Label;
