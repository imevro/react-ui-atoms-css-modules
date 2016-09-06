import React, { Component } from 'react';
import cn from 'classnames';

const Loading = (styles = {}) => {
  return class LoadingInner extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: false,
      };
    }

    componentWillMount() {
      this.timeoutId = setTimeout(() => {
        this.setState({ loading: true });
      }, 300);
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }

    render() {
      const { className, ...rest } = this.props;

      const activeClass = {
        [styles.active]: !!this.state.loading,
      };


      return (
        <div {...rest} className={cn(styles.loading, activeClass, className)}>
          <div className={styles.element}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>
      );
    }
  };
};

export default Loading;
