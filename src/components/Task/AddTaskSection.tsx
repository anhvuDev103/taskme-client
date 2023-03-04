import React, { useEffect, useState } from 'react';

import { PRIORITIES } from './constants';
import Input from 'components/Input';
import Dropdown from 'components/Dropdown';
import { ClockIc, FlagIc, InboxIc, MeatballsMenuSolidIc, MiniDueDateIc } from 'components/Icons';
import styled from 'styled-components';
import Textarea from 'components/Input/Textarea';
import { Flex } from 'components/UIkit';
import Button, { StyledButton } from 'components/Button';
import { DropdownTitle } from 'components/Dropdown/Dropdown';

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
        <Input placeholder="Task name" width="100%" />
        <Textarea rows={1} placeholder="Description" />
        <Option>
          <Button variant="outline" sizeIcon="16" Icon={MiniDueDateIc}>
            Due date
          </Button>
          <Dropdown
            title={'Priority'}
            titleIcon={FlagIc}
            options={PRIORITIES}
            setOption={setOption}
            currentOption={option}
          />
          <Button variant="outline" sizeIcon="16" Icon={ClockIc}>
            Reminder
          </Button>
          <MoreButton variant="outline" Icon={MeatballsMenuSolidIc} />
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
        <Flex>
          <Button>Cancel</Button>
          <Button variant="primary">Add task</Button>
        </Flex>
      </Footer>
    </Wrapper>
  );
};

const MoreButton = styled(Button)`
  svg {
    margin-right: 0 !important;
  }
`;

const Option = styled(Flex)`
  justify-content: flex-start;
  gap: 8px;
`;

const Footer = styled(Flex)`
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
