import React from 'react';
import styled, { useTheme } from 'styled-components';

import { Box, Button, Flex, PageLayout, Text } from 'components/UIkit';
import { CommentIc, ConfigIc, MeatballsMenuIc } from 'components/Icons';
import Tooltip from 'components/Tooltip';
import TaskItem from 'components/Task/TaskItem';
import useModal from 'hooks/useModal';
import CommentModal from './components/CommentModal';

const Inbox = () => {
  const theme: any = useTheme();
  const [handlePresent, onDismiss] = useModal(
    <CommentModal
      onAgree={() => {
        console.log('success');
        // onDismiss();
      }}
      onDismiss={() => {
        console.log('vai ca lon');
      }}
    />
  );
  console.log('Inbox ~ onDismiss:', onDismiss);
  return (
    <PageLayout>
      <Flex mb="8px">
        <Text fontWeight="bold" fontSize="20px">
          Inbox
        </Text>
        <Option>
          <Tooltip
            handler={
              <Button
                transparentBg
                ml="16px"
                fullWidth
                hoverColor={theme.color.mediumGray}
                color={theme.color.gray}
                onClick={handlePresent}
              >
                <Flex>
                  <CommentIc />
                  <Box m="0 5px 0 3px">Comments</Box>
                </Flex>
              </Button>
            }
          >
            Comment
          </Tooltip>
          <Button
            transparentBg
            ml="16px"
            fullWidth
            hoverColor={theme.color.mediumGray}
            color={theme.color.gray}
          >
            <Flex>
              <ConfigIc />
              <Box m="0 5px 0 3px">View</Box>
            </Flex>
          </Button>
          <Button
            transparentBg
            ml="16px"
            hoverColor={theme.color.mediumGray}
            color={theme.color.gray}
          >
            <Flex>
              <MeatballsMenuIc />
            </Flex>
          </Button>
        </Option>
      </Flex>
      <Flex flexDirection="column">
        <TaskItem />
      </Flex>
    </PageLayout>
  );
};

const Option = styled(Flex)``;

export default Inbox;
