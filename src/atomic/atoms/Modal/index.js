import React from 'react';

import Button from '../Button';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed overflow-scroll w-64 h-full inset-0 bg-white pl-10">
      <div className="centered max-width-500 max-height-500 ">
        <Button text="Close" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};

export default Modal;