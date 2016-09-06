import React from 'react';
import cn from 'classnames';

const Row = (styles = {}) => ({ className, children, striped, kind, ...rest }) => {
  const anotherClass = {
    [styles.striped]: !!striped,
    [styles[kind]]: !!kind,
  };

  return (
    <tr {...rest} className={cn(styles.row, anotherClass, className)}>
      {children}
    </tr>
  );
};

export default Row;
