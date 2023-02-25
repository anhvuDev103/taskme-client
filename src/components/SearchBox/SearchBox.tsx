import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import Input from 'components/Input';
import { Box, Flex, StyledLink, Text } from 'components/UIkit';
import Popper, { PopperWrapper } from 'components/Popper';
import { CloseIc, DotIc, HelpIc, SearchIc } from 'components/Icons';
import { SIDEBAR_ITEMS } from 'components/Sidebar/feed';
import { SidebarItemType } from 'components/Sidebar/types';
import useClick from 'hooks/useClick';
import Button, { StyledButton } from 'components/Button';

const RenderRecentlySearch = ({ ...attrs }) => {
  return (
    <StyledPopperWrapper {...attrs}>
      <Text color="#202020" fontWeight="bold" fontSize="13px" p="10px">
        Recently viewed
      </Text>
      <Flex flexDirection="column" justifyContent="flex-start">
        {SIDEBAR_ITEMS.length > 0 &&
          SIDEBAR_ITEMS.map(({ title, Icon, color, path }: SidebarItemType) => (
            <RestyledLink key={title} to={path}>
              <Box color={color}>{Icon ? <Icon /> : <DotIc />}</Box>
              <Text fontSize="13px">{title}</Text>
            </RestyledLink>
          ))}
      </Flex>
    </StyledPopperWrapper>
  );
};

const SearchBox = () => {
  const theme: any = useTheme();
  // const isPressedEscape = useKeypress('Escape');
  const isClicked = useClick('#searchBox', '#searchBox-popper');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isClicked);
  }, [isClicked]);

  return (
    <Popper
      visible={isActive}
      interactive={true}
      offset={[0, 4]}
      placement="bottom-start"
      render={(attrs) => <RenderRecentlySearch {...attrs} id="searchBox-popper" />}
    >
      <StyledSearchBox
        bg={theme.baseColor.grayAlpha}
        width={218}
        height={30}
        p="2px 5px"
        borderRadius={theme.radius.tiny}
        id="searchBox"
        className={`${isActive ? 'active' : ''}`}
      >
        <SearchIc width="24" height="24" style={{ flexShrink: 0 }} />
        <StyledInput placeholder="Search" height="24px" width="100%" />
        <Button Icon={HelpIc} />
        <Button Icon={CloseIc} />
        <Button className="hotKeySearch-btn">/</Button>
      </StyledSearchBox>
    </Popper>
  );
};

const StyledSearchBox = styled(Flex)`
  transition: 300ms;

  ${StyledButton} {
    display: none;

    &.hotKeySearch-btn {
      width: 18px;
      height: 18px;
      display: inline-flex;
      padding: 0 8px;
      opacity: 0;
      border: 1px solid ${({ theme }) => theme.color.mediumGray};
      border-radius: ${({ theme }) => theme.radius.tiny};
    }

    span.button-label {
      margin: 0 auto 3px;
      line-height: 18px;
    }
  }

  &:hover {
    background-color: #fff;
    * {
      color: ${({ theme }) => theme.color.text};
    }

    input {
      font-size: 13px;
      &::placeholder {
        color: ${({ theme }) => theme.color.gray} !important;
      }
    }

    button:last-child {
      opacity: 1;
    }
  }

  &.active {
    width: ${({ theme }) => theme.width.searchBox};
    background-color: #fff;

    button {
      display: inline-flex;

      &:hover {
        background-color: #eeeeee;
        color: ${({ theme }) => theme.color.text};
      }

      &:last-child {
        display: none;
      }
    }

    * {
      color: ${({ theme }) => theme.color.text};
    }

    input {
      font-size: 13px;
      &::placeholder {
        color: ${({ theme }) => theme.color.gray} !important;
      }
    }
  }
`;

const StyledInput = styled(Input)`
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;

const RestyledLink = styled(StyledLink)`
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.color.mediumGray};
  }
`;

const StyledPopperWrapper = styled(PopperWrapper)`
  padding: 0;
`;
export default SearchBox;
