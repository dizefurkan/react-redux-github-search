import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Text from '../Text';

const Link = ({ to, children }) => {
  return (
    <RouterLink to={to}>{children}</RouterLink>
  );
};

export default Link;
