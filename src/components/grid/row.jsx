import React from 'react';
import cn from 'classnames';

const generateClassname = (props, styles, size) => cn(props[size].split(` `).map(cl => styles[`${size}-${cl}`]));

export default (styles = {}) => props => {
  const className = [
    props.xs && generateClassname(props, styles, `xs`),
    props.sm && generateClassname(props, styles, `sm`),
    props.md && generateClassname(props, styles, `md`),
    props.lg && generateClassname(props, styles, `lg`),
  ];

  return (
    <div {...props} className={cn(styles.row, className, props.className)}>
      {props.children}
    </div>
  );
};
