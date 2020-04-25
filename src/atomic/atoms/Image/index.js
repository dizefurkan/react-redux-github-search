import React from 'react';
import classnames from 'classnames';

const Image = ({ url, width, height, rounded }) => {
  const imageClasses = classnames({ 'rounded-full': rounded });

  return (
    <img src={url} width={width} height={height} className={imageClasses} />
  );
}

export default Image;