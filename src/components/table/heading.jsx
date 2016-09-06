import React from 'react';
import cn from 'classnames';

const Heading = (styles = {}) => ({ className, children, bordered, ...rest }) => {
  const anotherClass = {
    [styles.bordered]: !!bordered,
  };

  return (
    <th {...rest} className={cn(styles.heading, anotherClass, className)}>
      {children}
    </th>
  );
};

export default Heading;
