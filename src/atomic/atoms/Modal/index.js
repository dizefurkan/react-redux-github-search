import React from 'react';

import Button from '../Button';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed overflow-scroll w-64 h-full inset-0 bg-white pl-10 shadow-2xl">
      <div className="centered max-width-500 max-height-500 ">
        <Button text="Close" onClick={closeModal} className="my-4 w-full" />
        {children}
      </div>
    </div>
  );
};

export default Modal;