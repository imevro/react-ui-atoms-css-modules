import React from 'react';
import cn from 'classnames';

const Select = (styles = {}) => ({ className, options, block, kind, ranged, placeholder, ...rest }) => {
  const blockClass = {
    [styles.block]: !!block,
  };

  const anotherClass = {
    [styles[kind]]: !!kind,
    [styles.ranged]: !!ranged,
  };

  return (
    <div className={cn(styles.selectWrapper, blockClass)}>
      <select {...rest} defaultValue="null" className={cn(styles.formControl, styles.select, anotherClass, className)}>
        <option value="null" className={styles.selectPlaceholder}>{placeholder}</option>
        {options.map((option, index) =>
          <option key={index} value={option.value}>{option.label}</option>
        )}
      </select>
    </div>
  );
};

export default Select;
