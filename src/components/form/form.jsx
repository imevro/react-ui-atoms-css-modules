import React from 'react';
import InnForm from 'react-auto-form';
import cn from 'classnames';

const FormContainer = (styles = {}) => ({ className, children, fluid, ...rest }) => {
  const containerClass = fluid ? styles.containerFluid : styles.container;

  return (
    <InnForm {...rest} className={cn(styles.form, containerClass, className)}>
      {children}
    </InnForm>
  );
};

export default FormContainer;
