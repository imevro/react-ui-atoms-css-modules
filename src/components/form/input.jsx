import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

const Input = (styles = {}) => ({ className, valueClassName, kind, value, mask, block, type, ...rest }) => {
  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles.block]: !!block,
    [styles[type]]: !!type,
    [styles[valueClassName]]: value || value === 0,
  };

  if (mask) {
    return <MaskedInput {...rest} value={value} className={cn(styles.formControl, anotherClass, className)} />;
  } else {
    return <input {...rest} className={cn(styles.formControl, anotherClass, className)} />;
  }
};

export default Input;
