import React from 'react';
import cn from 'classnames';

const Media = (styles = {}) => ({ className, body, left, right, ...rest }) => (
  <div {...rest} className={cn(styles.media, className)}>
    {left &&
      <div className={styles.left}>
        {left}
      </div>
    }
    {body &&
      <div className={styles.body}>
        {body}
      </div>
    }
    {right &&
      <div className={styles.right}>
        {right}
      </div>
    }
  </div>
);

export default Media;
