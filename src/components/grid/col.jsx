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
    hiddenOn,
    visibleFrom,
    ...restProps,
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

    [styles[`hiddenOn-${hiddenOn}`]]: !!hiddenOn,
    [styles[`visibleFrom-${visibleFrom}`]]: !!visibleFrom,
  };

  return (
    <div {...restProps} className={cn(mediaClass, className)}>
      {children}
    </div>
  );
};

export default Col;
