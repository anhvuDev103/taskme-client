import React, { useCallback, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Button from 'components/Button';
import { LabelIc, MeatballsMenuSolidIc, PuzzleIc } from 'components/Icons';
import Popper, { PopperWrapper } from 'components/Popper';
import { Flex, Text } from 'components/UIkit';

const MoreHandler = () => {
  const ref = useRef(null);
  const theme: any = useTheme();

  const renderOptions = useCallback((attrs: any) => {
    return (
      <PopperWrapper padding="0" {...attrs}>
        <Flex>
          <LabelIc /> Labels
          <Text>@</Text>
        </Flex>
        <Flex>
          <PuzzleIc /> Add extension...
        </Flex>
        <Text color={theme.color.primary}>Edit task actions</Text>
      </PopperWrapper>
    );
  }, []);

  return (
    <Popper
      trigger="click"
      interactive={true}
      offset={[0, 4]}
      placement="bottom-start"
      render={(attrs) => renderOptions(attrs)}
    >
      <MoreButton variant="outline" size="sm" Icon={MeatballsMenuSolidIc} ref={ref} />
    </Popper>
  );
};

const MoreButton = styled(Button)`
  width: 24px;
  svg {
    margin-right: 0 !important;
  }
`;

export default MoreHandler;
