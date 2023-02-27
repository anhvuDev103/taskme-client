import React, { useState } from 'react';

import Input from 'components/Input';
import Dropdown from 'components/Dropdown';
import { DueDateIc, PlusIc } from 'components/Icons';
import styled from 'styled-components';
import Textarea from 'components/Input/Textarea';
import { Flex } from 'components/UIkit';
import Button from 'components/Button';

const TITLE = {
  label: 'plus',
  icon: PlusIc,
};

const TEST = [
  { label: 'plus', icon: PlusIc },
  { label: 'plus1', icon: PlusIc },
  { label: 'plus2', icon: PlusIc },
];

const AddTaskSection = () => {
  const [option, setOption] = useState(TEST[0]);

  return (
    <Wrapper>
      <Content>
        <Input placeholder="Task name" width="100%" />
        <Textarea rows={1} placeholder="Description" />
        <Flex>
          <Button variant="outline" sizeIcon="16" Icon={DueDateIc}>
            Due date
          </Button>
          <Dropdown title={TITLE} options={TEST} setOption={setOption} />
        </Flex>
      </Content>
    </Wrapper>
  );
};

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
