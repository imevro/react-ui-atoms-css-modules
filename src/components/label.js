import React from 'react';
import cn from 'classnames';

const Label = (styles = {}) => ({ className, children, kind, ...rest }) => {
  const anotherClass = {
    [styles[kind]]: !!kind,
  };

  return (
    <span {...rest} className={cn(styles.label, anotherClass, className)}>
      {children}
    </span>
  );
};

export default Label;
