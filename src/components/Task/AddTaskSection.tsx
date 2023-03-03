import React, { useState } from 'react';

import { PRIORITIES } from './constants';
import Input from 'components/Input';
import Dropdown from 'components/Dropdown';
import { DueDateIc, FlagIc, InboxIc } from 'components/Icons';
import styled from 'styled-components';
import Textarea from 'components/Input/Textarea';
import { Flex } from 'components/UIkit';
import Button from 'components/Button';
import { DropdownTitle } from 'components/Dropdown/Dropdown';

const AddTaskSection = () => {
  const [option, setOption] = useState<DropdownTitle>(PRIORITIES[PRIORITIES.length - 1]);
  return (
    <Wrapper>
      <Content>
        <Input placeholder="Task name" width="100%" />
        <Textarea rows={1} placeholder="Description" />
        <Flex>
          <Button variant="outline" sizeIcon="16" Icon={DueDateIc}>
            Due date
          </Button>
          <Dropdown
            title={'Priority'}
            titleIcon={FlagIc}
            options={PRIORITIES}
            setOption={setOption}
            currentOption={option}
          />
        </Flex>
      </Content>
      <Footer>
        {/* <Dropdown
          title={'Priority'}
          titleIcon={InboxIc}
          options={PRIORITIES}
          setOption={setOption}
          currentOption={option}
          hasArrow
        /> */}
      </Footer>
    </Wrapper>
  );
};

const Footer = styled(Flex)``;

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.mediumGray};
  border-radius: ${({ theme }) => theme.radius.large};

  &:focus-within {
    border: 1px solid #999;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.padding.tiny};
`;

export default AddTaskSection;
