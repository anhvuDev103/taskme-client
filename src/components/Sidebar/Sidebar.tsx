import React from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

import { Box, Flex } from 'components/UIkit';
import { Option } from './types';
import SidebarItem from './components/SidebarItem';
import Collapse from 'components/Collapse';
import { SIDEBAR_ITEMS } from './feed';

interface Props {
  isVisible: boolean;
}

export const OPTIONS = [
  {
    label: 'asd',
  },
  {
    label: 'test2',
  },
];

const Sidebar = ({ isVisible }: Props) => {
  const theme: any = useTheme();

  return (
    <StyledSidebar
      width={305}
      height="100%"
      bg={theme.color.lightGray}
      as={motion.div}
      animate={{
        x: isVisible ? 0 : '-100%',
      }}
      transition={{ type: 'tween' }}
    >
      <Box>
        {SIDEBAR_ITEMS.length > 0 &&
          SIDEBAR_ITEMS.map(({ title, Icon, numberOfTask, color, path }) => (
            <SidebarItem
              key={title}
              color={color}
              title={title}
              Icon={Icon}
              path={path}
              numberOfTask={numberOfTask}
            />
          ))}
      </Box>
      <Collapse
        title="Projects"
        options={OPTIONS}
        renderOption={(option: Option, ref: any) => {
          return (
            <SidebarItem
              ref={ref}
              key={option.label}
              title={option.label}
              path={`/app/${option.label}`}
            />
          );
        }}
      />
    </StyledSidebar>
  );
};

const StyledSidebar = styled(Flex)`
  flex-shrink: 0;
  padding: 30px 18px 0 18px;
  flex-direction: column;
  justify-content: unset !important;
  gap: 16px;

  > * {
    width: 100%;
  }
`;

export default Sidebar;
