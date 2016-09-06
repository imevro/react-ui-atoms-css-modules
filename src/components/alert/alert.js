import React from 'react';
import cn from 'classnames';

const Alert = (styles = {}) => ({ className, message, children, ...rest }) => (
    <div {...rest} className={cn(styles.panel, className)}>
      <div className={styles.body}>
        {message && <h3 className={styles.title}>{message}</h3>}
        {children}
      </div>
    </div>
);

export default Alert;
