import React from 'react';
import cn from 'classnames';

const Image = (styles = {}) => ({ className, kind, responsive, ...rest }) => {
  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles.responsive]: !!responsive,
  };

  return (
    <img {...rest} className={cn(styles.img, anotherClass, className)} />
  );
};

export default Image;
