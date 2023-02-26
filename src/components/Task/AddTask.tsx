import React from 'react';
import styled from 'styled-components';

import { PlusIc } from 'components/Icons';
import { Flex, Text } from 'components/UIkit';
import Button, { StyledButton } from 'components/Button';

const AddTask = () => {
  return (
    <StyledAddTask>
      <Button Icon={PlusIc} />
      <Text>Add task</Text>
    </StyledAddTask>
  );
};

const StyledAddTask = styled(Flex)`
  width: 100%;
  cursor: pointer;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px 0;

  &:hover {
    ${Text} {
      color: ${({ theme }) => theme.color.primary};
    }

    ${StyledButton} {
      color: #fff;
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  ${Text} {
    color: ${({ theme }) => theme.color.gray};
  }

  ${StyledButton} {
    width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.radius.full};
    color: ${({ theme }) => theme.color.primary};

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export default AddTask;
