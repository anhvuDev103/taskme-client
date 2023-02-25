import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { Flex, Text } from 'components/UIkit';
import { DownChevronIc, PlusIc } from 'components/Icons';
import { Option } from 'components/Sidebar/types';
import Button from 'components/Button';

interface Props {
  title: string;
  renderOption: Function;
  options: Option[];
}

const Collapse = ({ title, renderOption, options }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [heightOption, setHeightOption] = useState(0);
  const theme: any = useTheme();
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
        <Button Icon={DownChevronIc} />
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

const HeaderCollapse = styled(Flex)``;

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

  button {
    &:hover {
      color: ${({ theme }) => theme.baseColor.blackHover};
    }

    &.chevron-btn {
      rotate: 90deg;
      transition: 200ms;
    }
  }

  &.active {
    button {
      rotate: 0deg;
    }

    ${BodyCollapse} {
      max-height: 68px;
    }
  }
`;

export default Collapse;
