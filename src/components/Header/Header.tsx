import React from 'react';
import styled, { useTheme } from 'styled-components';

import LeftControl from './components/LeftControl/LeftControl';
import RightControl from './components/RightControl/RightControl';
import { Flex } from 'components/UIkit';

interface Props {
  setIsVisible: any;
}

const Header = ({ setIsVisible }: Props) => {
  const theme: any = useTheme();
  return (
    <StyledHeader bg={theme.color.primary} width="100%" height={44} p="0 16px 0 18px" color="white">
      <LeftControl setIsVisible={setIsVisible} />
      <RightControl />
    </StyledHeader>
  );
};

const StyledHeader = styled(Flex)`
  button {
    color: #fff;
  }
`;

export default Header;
