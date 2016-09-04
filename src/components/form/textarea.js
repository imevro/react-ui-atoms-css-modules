import React from 'react';
import cn from 'classnames';

const TextArea = (styles = {}) => ({ className, children, kind, block, ...rest }) => {
  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles.block]: !!block,
  };

  return (
    <textarea {...rest} className={cn(styles.formControl, anotherClass, className)}>
      {children}
    </textarea>
  );
};

export default TextArea;
