import React from 'react';

import Button from '../Button';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="position-fixed w-100 h-100">
      <div className="centered max-width-500 max-height-500 scrollable">
        <Button text="Close" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};

export default Modal;