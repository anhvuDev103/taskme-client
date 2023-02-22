import React from 'react';
import { Box, Button, Flex, PageLayout, Text } from 'components/UIkit';
import styled, { useTheme } from 'styled-components';
import {
  CommentIc,
  ConfigIc,
  MeatballsMenuIc,
  MiniCalendarIc,
  MiniCommentIc,
  PencilIc,
} from 'components/Icons';
import Tooltip from 'components/Tooltip';

const Inbox = () => {
  const theme: any = useTheme();
  return (
    <PageLayout>
      <Flex>
        <Text fontWeight="bold" fontSize="20px">
          Inbox
        </Text>
        <Option>
          <Tooltip
            handler={
              <Button
                ml="16px"
                fullWidth
                hoverColor={theme.color.mediumGray}
                color={theme.color.gray}
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
          <Button ml="16px" fullWidth hoverColor={theme.color.mediumGray} color={theme.color.gray}>
            <Flex>
              <ConfigIc />
              <Box m="0 5px 0 3px">View</Box>
            </Flex>
          </Button>
          <Button ml="16px" hoverColor={theme.color.mediumGray} color={theme.color.gray}>
            <Flex>
              <MeatballsMenuIc />
            </Flex>
          </Button>
        </Option>
      </Flex>
      <Flex flexDirection="column">
        <Flex
          alignItems="flex-start !important"
          width="100%"
          justifyContent="flex-start !important"
        >
          <input type="checkbox" name="" id="" />
          <div>
            <Text>title task</Text>
            <Flex gridGap="8px">
              <Flex color={theme.color.primary}>
                <MiniCalendarIc /> 16 Feb
              </Flex>
              <Flex gridGap="2px">
                <MiniCommentIc />1
              </Flex>
            </Flex>
          </div>
          <Flex>
            <Button>
              <PencilIc />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

const Option = styled(Flex)``;

export default Inbox;
