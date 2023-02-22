import React, { useEffect } from 'react';

import { Button, Flex, Keycap, Text } from 'components/UIkit';
import { HelpIc, NotificationIc, PlusIc, TrendingUpIc } from 'components/Icons';
import Avatar from 'components/Avatar';

import useModal from 'hooks/useModal';
import TaskModal from './components/TaskModal';
import Tooltip from 'components/Tooltip';

const RightControl = () => {
  const [handlePresent, onDismiss] = useModal(<TaskModal />);
  return (
    <Flex gridGap="5px" px="12px">
      <Tooltip
        handler={
          <Button width={32} height={32} onClick={handlePresent}>
            <PlusIc />
          </Button>
        }
      >
        <Flex>
          Add task <Keycap>Q</Keycap>
        </Flex>
      </Tooltip>
      <Button width="fit-content" height={32} p="5px">
        <TrendingUpIc />
        <Text ml="5px">0/5</Text>
      </Button>
      <Button width={32} height={32}>
        <HelpIc />
      </Button>
      <Button width={32} height={32}>
        <NotificationIc />
      </Button>
      <Avatar ml="8px" />
    </Flex>
  );
};

export default RightControl;
