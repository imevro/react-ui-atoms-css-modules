import React from 'react';
import cn from 'classnames';

const Table = (styles = {}) => ({ className, children, bordered, responsive, ...rest }) => {
  const responsiveClass = {
    [styles.responsive]: !!responsive,
  };

  const tableClass = {
    [styles.bordered]: !!bordered,
  };

  if (responsive) {
    return (
      <div className={cn(responsiveClass)}>
        <table {...rest} className={cn(styles.table, tableClass, className)}>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table {...rest} className={cn(styles.table, tableClass, className)}>
        <tbody>
          {children}
        </tbody>
      </table>
    );
  }
};

export default Table;
