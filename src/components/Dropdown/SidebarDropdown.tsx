import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { Button, Flex, Text } from 'components/UIkit';
import { DownChevronIc, PlusIc } from 'components/Icons';
import { Option } from 'components/Sidebar/types';

interface Props {
  title: string;
  renderOption: Function;
  options: Option[];
}

const SidebarDropdown = ({ title, renderOption, options }: Props) => {
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
    <StyledSidebarDropdown flexDirection="column" className={`${isVisible ? 'active' : ''}`}>
      <HeaderDropdown>
        <Text>{title}</Text>
        <Button
          transparentBg
          width={28}
          height={28}
          color={theme.baseColor.grayAlphaSecondary}
          ml="auto"
          p="3px"
        >
          <PlusIc />
        </Button>
        <Button
          width={28}
          height={28}
          color={theme.baseColor.grayAlphaSecondary}
          className="chevron-btn"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <DownChevronIc />
        </Button>
      </HeaderDropdown>
      <BodyDropdown
        flexDirection="column"
        style={{ maxHeight: `${options.length * heightOption}px` }}
      >
        {options.map((option) => renderOption(option, optionRef))}
      </BodyDropdown>
    </StyledSidebarDropdown>
  );
};

const HeaderDropdown = styled(Flex)``;

const BodyDropdown = styled(Flex)`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: 500ms;

  > a {
    width: 100%;
  }
`;

const StyledSidebarDropdown = styled(Flex)`
  ${HeaderDropdown} {
    width: 100%;
    font-weight: 600;
    color: ${({ theme }) => theme.baseColor.grayAlphaSecondary};
    background-color: ${({ theme }) => theme.color.mediumGray};
    border-radius: ${({ theme }) => theme.radius.small};
    padding: 4px;
  }

  ${Button} {
    &:hover {
      color: ${({ theme }) => theme.baseColor.blackHover};
    }

    &.chevron-btn {
      rotate: 90deg;
      transition: 200ms;
    }
  }

  &.active {
    ${Button} {
      rotate: 0deg;
    }

    ${BodyDropdown} {
      max-height: 68px;
    }
  }
`;

export default SidebarDropdown;
