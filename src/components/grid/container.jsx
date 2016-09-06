import React from 'react';
import cn from 'classnames';

const Container = (styles = {}) => props => {
  const { fluid, children, className, ...rest } = props;
  const containerClass = fluid ? styles.containerFluid : styles.container;

  return (
    <div {...rest} className={cn(containerClass, className)}>
      {children}
    </div>
  );
};

export default Container;
