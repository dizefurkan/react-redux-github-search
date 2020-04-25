import React from 'react';
import classnames from 'classnames';

const Image = ({ url, width, height, isRounded }) => {
  const imageClasses = classnames({ 'rounded': isRounded });

  return (
    <img src={url} width={width} height={height} className={imageClasses} />
  );
}

export default Image;