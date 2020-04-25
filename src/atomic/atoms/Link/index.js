import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Text from '../Text';

const Link = ({ to, children, className = '' }) => {
  return (
    <RouterLink to={to} className={className}>{children}</RouterLink>
  );
};

export default Link;
