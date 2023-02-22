import React from 'react';
import { Box } from 'components/UIkit';

const Avatar = ({ ...props }) => {
  return (
    <Box
      borderRadius={999}
      bg="white"
      width={28}
      height={28}
      style={{ cursor: 'pointer' }}
      {...props}
    ></Box>
  );
};

export default Avatar;
