import React from 'react';
import cn from 'classnames';

const Static = (styles = {}) => ({ className, children, ...rest }) => (
    <p {...rest} className={cn(styles.static, className)}>
      {children}
    </p>
);

export default Static;
