import React, { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';

import { Box, Flex } from 'components/UIkit';
import { SidebarItemType } from '../types';
import { NavLink } from 'react-router-dom';
import { DotIc } from 'components/Icons';

const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemType>(
  ({ title, Icon, numberOfTask, color, path }: SidebarItemType, ref) => {
    const theme: any = useTheme();

    return (
      <StyledSidebarItem to={path} ref={ref}>
        <Flex color={color || theme.color.gray} flex={1} justifyContent="flex-start !important">
          {Icon ? <Icon /> : <DotIc />}
          <Box width="100%" color={theme.color.text} pl="5px">
            {title}
          </Box>
        </Flex>
        <Flex
          width={24}
          justifyContent="center !important"
          fontSize={12}
          color={theme.color.darkGray}
        >
          {numberOfTask}
        </Flex>
      </StyledSidebarItem>
    );
  }
);

const StyledSidebarItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  padding: 5px;
  padding-right: 0;
  border-radius: ${({ theme }) => theme.radius.small};
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.color.mediumGray};
  }
`;

export default SidebarItem;
