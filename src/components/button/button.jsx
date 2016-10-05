import React from 'react';
import cn from 'classnames';

const Button = (styles = {}) => props => {
  const { className, children, kind, size, block, active, ...rest } = props;
  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles[size]]: !!size,
    [styles.block]: !!block,
    [styles.active]: !!active,
  };

  return (
    <button {...rest} className={cn(styles.btn, anotherClass, className)}>
      {children}
    </button>
  );
};

export default Button;
