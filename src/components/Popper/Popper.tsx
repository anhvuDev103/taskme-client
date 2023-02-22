import React from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react/headless';

const Popper = ({ children, ...props }: TippyProps) => {
  return <Tippy {...props}>{children}</Tippy>;
};

export const PopperWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.tiny};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: 0 0 8px rgb(0 0 0 / 5%), 0 10px 10px -5px rgb(0 0 0 / 5%),
    0 20px 25px -5px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

export default Popper;
