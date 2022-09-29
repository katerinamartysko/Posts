import React from 'react';
import classes from './myInput.module.css';

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input className={classes.myInp} {...props} />
  );
});

export default MyInput;
