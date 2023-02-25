import React from 'react';

import { Flex } from 'components/UIkit';
import { HomeIc, MenuIc } from 'components/Icons';
import SearchBox from 'components/SearchBox';
import styled from 'styled-components';
import Button, { StyledButton } from 'components/Button';

interface Props {
  setIsVisible: any;
}

const LeftControl = ({ setIsVisible }: Props) => {
  const toggleSidebarHandler = () => {
    setIsVisible((prev: boolean) => !prev);
  };

  return (
    <Wrapper>
      <Button Icon={MenuIc} onClick={toggleSidebarHandler} />
      <Button Icon={HomeIc} />
      <SearchBox />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  gap: 4px;
  padding-left: 5px;

  ${StyledButton} {
    width: 28px;
    height: 28px;
  }
`;

export default LeftControl;
