import { Flex } from 'components/UIkit';
import { HelpIc, NotificationIc, PlusIc, TrendingUpIc } from 'components/Icons';
import Avatar from 'components/Avatar';

import useModal from 'hooks/useModal';
import TaskModal from './components/TaskModal';
import Button from 'components/Button';
import styled from 'styled-components';

const RightControl = () => {
  const [handlePresent] = useModal(<TaskModal />);
  return (
    <Flex gridGap="5px" px="12px">
      <StyledButton Icon={PlusIc} onClick={handlePresent} />
      <StyledButton Icon={TrendingUpIc}>0/5</StyledButton>
      <StyledButton Icon={HelpIc} />
      <StyledButton Icon={NotificationIc} />
      <Avatar ml="8px" />
    </Flex>
  );
};

const StyledButton = styled(Button)`
  min-width: 32px;
  height: 32px;
`;

export default RightControl;
