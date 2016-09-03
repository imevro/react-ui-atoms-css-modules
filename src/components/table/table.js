import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const responsiveClassName = {
    [styles.responsive]: !!props.responsive,
  };

  const tableClassName = {
    [styles.bordered]: !!props.bordered,
  };

  if (props.responsive) {
    return (
      <div className={cn(responsiveClassName)}>
        <table {...props} className={cn(styles.table, tableClassName, props.className)}>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table {...props} className={cn(styles.table, tableClassName, props.className)}>
        <tbody>
          {props.children}
        </tbody>
      </table>
    );
  }
};
