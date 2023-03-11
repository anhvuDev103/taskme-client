import React, { useEffect, useState } from 'react';

import { PRIORITIES } from './constants';
import Input from 'components/Input';
import Dropdown from 'components/Dropdown';
import { ClockIc, FlagIc, InboxIc, MiniDueDateIc } from 'components/Icons';
import styled from 'styled-components';
import Textarea from 'components/Input/Textarea';
import { Flex } from 'components/UIkit';
import Button, { StyledButton } from 'components/Button';
import { DropdownTitle } from 'components/Dropdown/Dropdown';
import MoreHandler from './MoreHandler';

export const OPTIONS = [
  {
    label: 'asd',
  },
  {
    label: 'test2',
  },
];

const AddTaskSection = () => {
  const [option, setOption] = useState<DropdownTitle>(PRIORITIES[PRIORITIES.length - 1]);
  const [projectOption, setProjectOption] = useState<any>(OPTIONS[0]);
  console.log('AddTaskSection ~ projectOption:', projectOption);

  useEffect(() => {
    setProjectOption(OPTIONS);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Input placeholder="Task name" width="100%" mb="8px" />
        <Textarea rows={1} placeholder="Description" />
        <Option>
          <Button variant="outline" sizeIcon="16" size="sm" Icon={MiniDueDateIc}>
            Due date
          </Button>
          <Dropdown
            title={'Priority'}
            titleIcon={FlagIc}
            options={PRIORITIES}
            setOption={setOption}
            currentOption={option}
            size="sm"
          />
          <Button variant="outline" sizeIcon="16" size="sm" Icon={ClockIc}>
            Reminder
          </Button>
          <MoreHandler />
        </Option>
      </Content>
      <Footer>
        <Dropdown
          title={projectOption.label}
          titleIcon={InboxIc}
          options={OPTIONS}
          setOption={setProjectOption}
          currentOption={projectOption}
          hasArrow
          className="project-dropdown"
        />
        <Flex gridGap="8px">
          <Button>Cancel</Button>
          <Button variant="primary">Add task</Button>
        </Flex>
      </Footer>
    </Wrapper>
  );
};

const Option = styled(Flex)`
  justify-content: flex-start;
  gap: 8px;
  margin-top: 8px;
`;

const Footer = styled(Flex)`
  padding: 8px 12px 8px 8px;
  border-top: 1px solid ${({ theme }) => theme.color.mediumGray};

  .project-dropdown {
    ${StyledButton} {
      border: none;
    }
  }
`;

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
