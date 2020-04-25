import React from 'react';

const Text = ({ text, type, className }) => {
  if (!text) return null;

  if (type === 'title') {
    return <h1 className="text-1xl font-bold mb-2">{text}</h1>;
  }

  return (
    <div className={className}>{text}</div>
  )
}

export default Text;
