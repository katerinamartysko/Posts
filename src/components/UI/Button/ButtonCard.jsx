import React from 'react';
import classNames from 'classnames'
import classes from './ButtonCard.module.css';

const ButtonCard = ({ children, className, ...props }) => {
  return (
    <button {...props} className={classNames(classes.buttonCard, className)}>
      {children}
    </button>
  );
};

export default ButtonCard;
