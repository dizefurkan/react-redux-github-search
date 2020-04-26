import React from 'react';

import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const IconText = ({ text, iconName }) => {
  if (!text) return null;
  return (
    <div className="flex flex-row space-x-1 items-center">
      <Icon name={iconName} />
      <Text text={text} />
    </div>
  );
};

export default IconText;
