import React, { FC, isValidElement, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Popper, { PopperWrapper } from 'components/Popper';
import { Text } from 'components/UIkit';

interface DropdownTitle {
  label: string;
  icon?: FC;
}

interface DropdownOption extends DropdownTitle {
  value?: string;
}

interface Props {
  title: DropdownTitle;
  options: DropdownOption[];
  defaultOption?: string;
  setOption: (option: any) => void;
}

interface OptionProps {
  value: string;
  label: string;
  Icon?: FC;
  setOption: () => void;
}

const Option = ({ value, label, Icon, setOption }: OptionProps) => {
  return (
    <OptionWrapper onClick={setOption}>
      {Icon && isValidElement(<Icon />) && <Icon />}
      <Text>{label}</Text>
    </OptionWrapper>
  );
};

const Dropdown = ({ title, options, defaultOption, setOption }: Props) => {
  const renderOptions = useCallback(() => {
    return (
      <PopperWrapper padding="0">
        {options.length > 0 &&
          options.map((option) => {
            const value = option.value || option.label.toLowerCase();
            return (
              <Option
                key={value}
                Icon={option.icon}
                label={option.label}
                value={value}
                setOption={() => setOption({ ...option, value })}
              />
            );
          })}
      </PopperWrapper>
    );
  }, [options, setOption]);

  return (
    <Wrapper>
      <Popper
        trigger="click"
        interactive={true}
        offset={[0, 4]}
        placement="bottom-start"
        render={(attrs) => renderOptions()}
      >
        <Button variant="outline" Icon={title.icon}>
          {title.label}
        </Button>
      </Popper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const OptionWrapper = styled.div`
  min-width: 125px;
  padding: 4px 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.mediumGray};
  }
`;

export default Dropdown;
