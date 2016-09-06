import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

const Button = (styles = {}) => props => {
  const { className, children, kind, size, block, active, to, ...rest } = props;
  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles[size]]: !!size,
    [styles.block]: !!block,
    [styles.active]: !!active,
  };

  if (to) {
    return (
      <Link {...rest} to={to} className={cn(styles.btn, anotherClass, className)}>
        {children}
      </Link>
    );
  } else {
    return (
      <button {...rest} className={cn(styles.btn, anotherClass, className)}>
        {children}
      </button>
    );
  }
};

export default Button;
