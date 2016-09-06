import React from 'react';
import cn from 'classnames';

const Group = (styles = {}) => ({ className, children, size, kind, inline, horizontal, float, ...rest }) => {
  const anotherClass = {
    [styles[size]]: !!size,
    [styles[`form-${kind}`]]: !!kind,
    [styles.inline]: !!inline,
    [styles.horizontal]: !!horizontal,
    [styles.float]: !!float,
  };

  return (
    <div {...rest} className={cn(styles.group, anotherClass, className)}>
      {children}
    </div>
  );
};

export default Group;
