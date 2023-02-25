import React from "react";
import styled, { useTheme } from "styled-components";

import { PlusIc } from "components/Icons";
import { Button, Flex, Text } from "components/UIkit";
import useClick from "hooks/useClick";

const AddTaskSection = () => {
  return <div></div>;
};

const AddTask = () => {
  const theme: any = useTheme();
  const isClicked = useClick();

  return (
    <StyledAddTask>
      <Button transparentBg variant="circle" color={theme.color.primary}>
        <PlusIc />
      </Button>
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
    ${Button} {
      color: #fff;
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export default AddTask;
