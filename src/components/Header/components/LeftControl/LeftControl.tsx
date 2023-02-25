import React from 'react';

import { Flex } from 'components/UIkit';
import { HomeIc, MenuIc } from 'components/Icons';
import SearchBox from 'components/SearchBox';
import styled, { useTheme } from 'styled-components';
import Button from 'components/Button';

interface Props {
  setIsVisible: any;
}

const LeftControl = ({ setIsVisible }: Props) => {
  const toggleSidebarHandler = () => {
    setIsVisible((prev: boolean) => !prev);
  };

  return (
    <Flex pl="5px">
      <StyledButton Icon={MenuIc} onClick={toggleSidebarHandler} />
      <StyledButton Icon={HomeIc} />
      <SearchBox />
    </Flex>
  );
};

const StyledButton = styled(Button)`
  width: 28px;
  height: 28px;
`;

export default LeftControl;
