import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

  const rootClassed = [classes.myModal];
  if (visible) {
    rootClassed.push(classes.active);
  }
  return (
    <div className={rootClassed.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
