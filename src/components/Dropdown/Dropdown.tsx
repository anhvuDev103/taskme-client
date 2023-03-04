import React, { FC, isValidElement, useCallback, useEffect, useId, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import Button from 'components/Button';
import Popper, { PopperWrapper } from 'components/Popper';
import { Text } from 'components/UIkit';
import { DotIc, DownChevronTriangleIc } from 'components/Icons';
import useClickRef from 'hooks/useClickRef';

export interface DropdownTitle {
  label: string;
  icon?: FC;
  color?: string;
}

interface DropdownOption extends DropdownTitle {
  value?: string;
}

interface Props {
  title?: string;
  titleIcon?: FC;
  hasArrow?: boolean;
  options: DropdownOption[];
  currentOption: DropdownOption;
  setOption: (option: any) => void;
  className?: string;
}

interface OptionProps {
  // value: string;
  color?: string;
  label: string;
  Icon?: FC;
  isSelected: boolean;
  setOption: () => void;
}

const Option = ({ color, label, Icon, isSelected, setOption }: OptionProps) => {
  return (
    <OptionWrapper onClick={setOption} color={color} className={`${isSelected ? 'selected' : ''}`}>
      {(Icon && isValidElement(<Icon />) && <Icon />) || <DotIc />}
      <Text>{label}</Text>
    </OptionWrapper>
  );
};

const Dropdown = ({
  title,
  titleIcon,
  hasArrow,
  options,
  currentOption,
  setOption,
  className,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState(title);
  const ref = useRef(null);
  const isClicked = useClickRef(ref);
  const theme: any = useTheme();

  const selectOptionHandler = useCallback(
    (option: DropdownOption, value: string) => {
      setOption({ ...option, value });
      setIsVisible(false);
      setLabel(option.label);
    },
    [setOption]
  );

  useEffect(() => {
    setIsVisible(isClicked);
  }, [isClicked]);

  const renderOptions = useCallback(
    (attrs: any) => {
      return (
        <PopperWrapper padding="0" {...attrs}>
          {options.length > 0 &&
            options.map((option) => {
              const value = option.value || option.label.toLowerCase();
              return (
                <Option
                  key={value}
                  Icon={option.icon}
                  label={option.label}
                  color={option.color}
                  isSelected={value === currentOption.value}
                  // value={value}
                  setOption={() => selectOptionHandler(option, value)}
                />
              );
            })}
        </PopperWrapper>
      );
    },
    [options, currentOption, selectOptionHandler]
  );

  return (
    <Wrapper className={className}>
      <Popper
        visible={isVisible}
        interactive={true}
        offset={[0, 4]}
        placement="bottom-start"
        render={(attrs) => renderOptions(attrs)}
      >
        <Handler
          className="Dropdown-handler"
          variant="outline"
          color={label === title ? theme.baseColor.grayAlphaSecondary : currentOption.color}
          Icon={label === title ? DotIc : titleIcon}
          ref={ref}
        >
          {label} {hasArrow && <DownChevronTriangleIc className="Dropdown-arrow" />}
        </Handler>
      </Popper>
    </Wrapper>
  );
};

const Handler = styled(Button)<{ color: string }>`
  color: ${({ color }) => color || 'unset'} !important;

  .button-label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .Dropdown-arrow {
    margin-right: 0 !important;
  }

  svg {
    fill: none;
  }
`;

const Wrapper = styled.div``;

const OptionWrapper = styled.div`
  min-width: 125px;
  padding: 4px 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &.selected {
    &::after {
      content: '✔';
      padding-left: 8px;
      margin-left: auto;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.mediumGray};
  }

  svg {
    color: ${({ color }) => color || 'unset'};
  }
`;

export default Dropdown;
