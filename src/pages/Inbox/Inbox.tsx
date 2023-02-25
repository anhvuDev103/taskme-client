import React from 'react';
import styled from 'styled-components';

import { Flex, PageLayout, Text } from 'components/UIkit';
import { CommentIc, ConfigIc, MeatballsMenuIc } from 'components/Icons';
import TaskItem from 'components/Task/TaskItem';
import useModal from 'hooks/useModal';
import CommentModal from './components/CommentModal';
import AddTask from 'components/Task/AddTask';
import Button from 'components/Button';

const Inbox = () => {
  const [handlePresent] = useModal(
    <CommentModal
      onAgree={() => {
        console.log('success');
      }}
    />
  );

  return (
    <PageLayout>
      <PageHeader mb="8px">
        <Text fontWeight="bold" fontSize="20px">
          Inbox
        </Text>
        <Option>
          <StyledButton Icon={CommentIc} onClick={handlePresent}>
            Comments
          </StyledButton>
          <StyledButton transparentBg Icon={ConfigIc}>
            View
          </StyledButton>
          <StyledButton Icon={MeatballsMenuIc} />
        </Option>
      </PageHeader>
      <PageBody flexDirection="column">
        <TaskItem />
        <AddTask />
      </PageBody>
    </PageLayout>
  );
};

const StyledButton = styled(Button)`
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.baseColor.grayAlpha};
  }
`;

const Option = styled(Flex)`
  gap: 16px;
`;

const PageHeader = styled(Flex)``;

const PageBody = styled(Flex)``;

export default Inbox;
