import React, { useState, useEffect } from 'react';


const Input = (props) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    props.onChange(event.target.value);
    setValue(event.target.value);
  }

  return (
    <input
      className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      placeholder="Type a @username"
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;