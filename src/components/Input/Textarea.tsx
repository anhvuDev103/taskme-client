import React from 'react';
import styled from 'styled-components';

const Textarea = ({ ...props }) => {
  const inputHandler = (event: any) => {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };
  return <Wrapper {...props} onInput={inputHandler} />;
};

const Wrapper = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: 14px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export default Textarea;
