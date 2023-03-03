import React from 'react';
import styled, { useTheme } from 'styled-components';

import Checkbox from 'components/Checkbox/Checkbox';
import { Flex, Text } from 'components/UIkit';
import {
  CommentIc,
  DragIc,
  DueDateIc,
  MeatballsMenuSolidIc,
  MiniCalendarIc,
  MiniCommentIc,
  PencilIc,
} from 'components/Icons';
import Button from 'components/Button';

const TaskItem = () => {
  const theme: any = useTheme();
  return (
    <StyledTaskItem width="100%">
      <Button Icon={DragIc} className="draggable-btn" />
      <Checkbox />
      <TaskInfo>
        <Text mb="3px" lineHeight="21px">
          title task
        </Text>
        <Text mb="3px" lineHeight="21px">
          Lorem ipsum dolor, sit amet
        </Text>
        <TaskDeadline gridGap="8px">
          <Flex color={theme.color.primary}>
            <MiniCalendarIc />
            <Text fontSize="12px">16 Feb</Text>
          </Flex>
          <Flex gridGap="2px">
            <MiniCommentIc />1
          </Flex>
        </TaskDeadline>
      </TaskInfo>
      <Option>
        <Button Icon={PencilIc} />
        <Button Icon={DueDateIc} />
        <Button Icon={CommentIc} />
        <Button Icon={MeatballsMenuSolidIc} />
      </Option>
    </StyledTaskItem>
  );
};

const TaskDeadline = styled(Flex)`
  justify-content: flex-start;
`;

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
