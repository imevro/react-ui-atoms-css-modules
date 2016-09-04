import React from 'react';
import cn from 'classnames';

const Cell = (styles = {}) => ({ className, children, bordered, ...rest }) => {
  const anotherClass = {
    [styles.bordered]: !!bordered,
  };

  return (
    <td {...rest} className={cn(styles.cell, anotherClass, className)}>
      {children}
    </td>
  );
};

export default Cell;
