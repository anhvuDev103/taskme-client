import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Flex, Text } from 'components/UIkit';
import { DownChevronIc, PlusIc } from 'components/Icons';
import { Option } from 'components/Sidebar/types';
import Button, { StyledButton } from 'components/Button';

interface Props {
  title: string;
  renderOption: Function;
  options: Option[];
}

const Collapse = ({ title, renderOption, options }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [heightOption, setHeightOption] = useState(0);
  const optionRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (optionRef.current) {
      const { height } = optionRef.current.getBoundingClientRect();
      setHeightOption(isVisible ? height : 0);
    }
  }, [isVisible]);

  return (
    <StyledCollapse flexDirection="column" className={`${isVisible ? 'active' : ''}`}>
      <HeaderCollapse>
        <Text>{title}</Text>
        <Button Icon={PlusIc} />
        <Button
          sizeIcon={16}
          Icon={DownChevronIc}
          className="chevron-btn"
          onClick={() => setIsVisible((prev) => !prev)}
        />
      </HeaderCollapse>
      <BodyCollapse
        flexDirection="column"
        style={{ maxHeight: `${options.length * heightOption}px` }}
      >
        {options.map((option) => renderOption(option, optionRef))}
      </BodyCollapse>
    </StyledCollapse>
  );
};

const HeaderCollapse = styled(Flex)`
  gap: 4px;

  ${StyledButton} {
    width: 28px;
    height: 28px;
    background-color: transparent;
    color: #666;

    &:hover {
      color: ${({ theme }) => theme.baseColor.blackHover};
    }

    &.chevron-btn {
      rotate: 90deg;
      transition: 200ms;
    }

    &:not(:last-child) {
      margin-left: auto;
    }
  }
`;

const BodyCollapse = styled(Flex)`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: 500ms;

  > a {
    width: 100%;
  }
`;

const StyledCollapse = styled(Flex)`
  ${HeaderCollapse} {
    width: 100%;
    font-weight: 600;
    color: ${({ theme }) => theme.baseColor.grayAlphaSecondary};
    background-color: ${({ theme }) => theme.color.mediumGray};
    border-radius: ${({ theme }) => theme.radius.small};
    padding: 4px;
  }

  &.active {
    ${StyledButton} {
      rotate: 0deg;
    }
  }
`;

export default Collapse;
