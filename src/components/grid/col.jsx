import React from 'react';
import cn from 'classnames';

const Col = (styles = {}) => props => {
  const {
    xs, xsOffset,
    sm, smOffset,
    md, mdOffset,
    lg, lgOffset,
    children,
    className,
    ...rest,
  } = props;

  const mediaClass = {
    [styles[`xs-${xs}`]]: !!xs,
    [styles[`xs-offset-${xsOffset}`]]: !!xsOffset,
    [styles[`sm-${sm}`]]: !!sm,
    [styles[`sm-offset-${smOffset}`]]: !!smOffset,
    [styles[`md-${md}`]]: !!md,
    [styles[`md-offset-${mdOffset}`]]: !!mdOffset,
    [styles[`lg-${lg}`]]: !!lg,
    [styles[`lg-offset-${lgOffset}`]]: !!lgOffset,
  };

  return (
    <div {...rest} className={cn(mediaClass, className)}>
      {children}
    </div>
  );
};

export default Col;
