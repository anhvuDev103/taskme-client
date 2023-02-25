import React from 'react';
import styled, { useTheme } from 'styled-components';

import Checkbox from 'components/Checkbox/Checkbox';
import { Button, Flex, Text } from 'components/UIkit';
import {
  CommentIc,
  DragIc,
  DueDateIc,
  MeatballsMenuSolidIc,
  MiniCalendarIc,
  MiniCommentIc,
  PencilIc,
} from 'components/Icons';

const TaskItem = () => {
  const theme: any = useTheme();
  return (
    <StyledTaskItem width="100%">
      <Button transparentBg width="24px" height="24px" className="draggable-btn">
        <DragIc />
      </Button>
      <Checkbox />
      <TaskInfo>
        <Text mb="3px" lineHeight="21px">
          title task
        </Text>
        <Flex gridGap="8px">
          <Flex color={theme.color.primary}>
            <MiniCalendarIc /> 16 Feb
          </Flex>
          <Flex gridGap="2px">
            <MiniCommentIc />1
          </Flex>
        </Flex>
      </TaskInfo>
      <Option>
        <Button transparentBg>
          <PencilIc />
        </Button>
        <Button transparentBg>
          <DueDateIc />
        </Button>
        <Button transparentBg>
          <CommentIc />
        </Button>
        <Button transparentBg>
          <MeatballsMenuSolidIc />
        </Button>
      </Option>
    </StyledTaskItem>
  );
};

const TaskInfo = styled.div`
  margin-right: auto;
`;

const Option = styled(Flex)`
  opacity: 0;
  transition: 200ms;
`;

const StyledTaskItem = styled(Flex)`
  align-items: flex-start;
  padding: 8px 0;
  position: relative;
  border-bottom: 0.8px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    .draggable-btn {
      opacity: 1;
    }

    ${Option} {
      opacity: 1;
    }
  }

  .draggable-btn {
    position: absolute;
    top: 8px;
    right: calc(100% + 3px);
    opacity: 0;
    cursor: move;
  }
`;

export default TaskItem;
