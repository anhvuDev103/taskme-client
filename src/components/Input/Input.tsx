import React from 'react';

import { StyledInputWrapper } from './input.styled';

const Input = ({ ...props }) => {
  return <StyledInputWrapper {...props} />;
};

export default Input;
