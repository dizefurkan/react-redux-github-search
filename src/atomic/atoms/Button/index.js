import React from 'react';

import Text from '../Text';

const Button = ({ text, onClick, className = '' }) => {
  const buttonClass = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`;
  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      <Text text={text} />
    </button>
  );
}

export default Button;

