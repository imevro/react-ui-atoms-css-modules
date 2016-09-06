import React from 'react';
import cn from 'classnames';

const generateClassname = (props, styles, size) => cn(props[size].split(` `).map(cl => styles[`${size}-${cl}`]));

const Row = (styles = {}) => props => {
  const { className, children, xs, sm, md, lg, ...rest } = props;

  const mediaClass = [
    xs && generateClassname(props, styles, `xs`),
    sm && generateClassname(props, styles, `sm`),
    md && generateClassname(props, styles, `md`),
    lg && generateClassname(props, styles, `lg`),
  ];

  return (
    <div {...rest} className={cn(styles.row, mediaClass, className)}>
      {children}
    </div>
  );
};

export default Row;
