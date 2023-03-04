import React from 'react';
import styled from 'styled-components';

import { Flex, PageLayout, Text } from 'components/UIkit';
import { CommentIc, ConfigIc, MeatballsMenuIc } from 'components/Icons';
import TaskItem from 'components/Task/TaskItem';
import useModal from 'hooks/useModal';
import CommentModal from './components/CommentModal';
import AddTask from 'components/Task/AddTask';
import Button, { StyledButton } from 'components/Button';
import AddTaskSection from 'components/Task/AddTaskSection';

const Inbox = () => {
  const [handlePresent] = useModal(
    <CommentModal
      onAgree={() => {
        console.log('success');
      }}
    />
  );

  return (
    <InboxLayout>
      <PageHeader mb="8px">
        <Text fontWeight="bold" fontSize="20px">
          Inbox
        </Text>
        <Option>
          <Button Icon={CommentIc} onClick={handlePresent}>
            Comments
          </Button>
          <Button transparentBg Icon={ConfigIc}>
            View
          </Button>
          <Button Icon={MeatballsMenuIc} />
        </Option>
      </PageHeader>
      <PageBody flexDirection="column">
        <TaskItem />
        <AddTask />
        <AddTaskSection />
      </PageBody>
    </InboxLayout>
  );
};

const InboxLayout = styled(PageLayout)`
  ${StyledButton} {
    /* background-color: transparent; */

    &:hover {
      background-color: ${({ theme }) => theme.color.mediumGray};
    }
  }
`;

const Option = styled(Flex)`
  gap: 16px;
`;

const PageHeader = styled(Flex)``;

const PageBody = styled(Flex)``;

export default Inbox;
