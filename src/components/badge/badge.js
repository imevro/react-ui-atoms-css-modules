import React from 'react';
import cn from 'classnames';

const Badge = (styles = {}) => props => {
  const { kind, children, className, ...rest } = props;

  const kindClass = {
    [styles[kind]]: !!kind,
  };

  return (
    <span {...rest} className={cn(styles.badge, kindClass, className)}>
      {children}
    </span>
  );
};

export default Badge;
