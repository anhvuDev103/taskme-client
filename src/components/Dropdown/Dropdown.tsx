import Button from 'components/Button';
import useClick from 'hooks/useClick';
import React, { FC, isValidElement, useId } from 'react';
import styled from 'styled-components';

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
}

interface OptionProps {
  value: string;
  label: string;
  Icon?: FC;
}

const Option = ({ value, label, Icon }: OptionProps) => {
  return (
    <div>
      {Icon && isValidElement(<Icon />) && <Icon />} {label}
    </div>
  );
};

const Dropdown = ({ title, options, defaultOption }: Props) => {
  const id = useId();
  const isClicked = useClick(`[data-id='${id}']`);

  return (
    <Wrapper>
      <Handler Icon={title.icon} data-id={id}>
        {title.label}
      </Handler>
      {isClicked && (
        <Options>
          {options.length > 0 &&
            options.map((option) => (
              <Option
                key={option.value || option.label}
                Icon={option.icon}
                label={option.label}
                value={option.value || option.label.toLowerCase()}
              />
            ))}
        </Options>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Handler = styled(Button)`
  height: 28px;
  background-color: transparent;
  border: 1px solid #ddd;
  color: rgba(0, 0, 0, 0.56);

  &:hover {
    background-color: ${({ theme }) => theme.color.mediumGray};
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;

const Options = styled.div``;

export default Dropdown;
