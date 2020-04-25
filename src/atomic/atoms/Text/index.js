import React from 'react';

const Text = ({ text, type }) => {
  if (!text) return null;

  if (type === 'title') {
    return <h1 className="text-1xl font-bold mb-2">{text}</h1>;
  }

  return (
    <span>{text}</span>
  )
}

export default Text;
