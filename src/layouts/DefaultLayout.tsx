import React, { Fragment, useState } from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Box, Flex } from 'components/UIkit';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Flex height="100vh" flexDirection="column">
      <Header setIsVisible={setIsVisible} />
      <Flex width="100%" flexGrow={1}>
        <Sidebar isVisible={isVisible} />
        <Box flex={1} height="100%" p="36px 55px 0">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
