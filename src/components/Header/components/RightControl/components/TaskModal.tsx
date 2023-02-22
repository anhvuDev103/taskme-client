import React from 'react';
import styled from 'styled-components';

import { StyledModal } from 'components/UIkit/modal';
import Input from 'components/Input';
import { Flex } from 'components/UIkit';

const TaskModal = () => {
  return (
    <StyledModal>
      <Body>
        <Input placeholder="Task name" fontWeight="600" />
        <Input placeholder="Description" m="5px 0 7px" />
        <Flex></Flex>
      </Body>
      <Footer>asd</Footer>
    </StyledModal>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  & + div {
    border-bottom: 1px solid ${({ theme }) => theme.color.mediumGray};
  }
`;

export default TaskModal;
