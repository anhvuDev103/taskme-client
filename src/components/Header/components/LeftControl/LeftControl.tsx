import React from 'react';

import { Button, Flex } from 'components/UIkit';
import { HomeIc, MenuIc } from 'components/Icons';
import SearchBox from 'components/SearchBox';

interface Props {
  setIsVisible: any;
}

const LeftControl = ({ setIsVisible }: Props) => {
  return (
    <Flex pl="5px">
      <Button width={28} height={28} onClick={() => setIsVisible((prev: boolean) => !prev)}>
        <MenuIc />
      </Button>
      <Button width={28} height={28} ml="4px">
        <HomeIc />
      </Button>
      <SearchBox />
    </Flex>
  );
};

export default LeftControl;
