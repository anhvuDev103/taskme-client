import styled from 'styled-components';

import { Flex } from 'components/UIkit';
import { forwardRef } from 'react';

const Button = (
  { children, className = '', Icon, primary, sizeIcon = 24, variant = '', ...props }: any,
  ref: any
) => {
  const buttonProps = {
    primary,
    ...props,
  };

  const buttonClass = `${className} ${variant}`;

  return (
    <StyledButton {...buttonProps} ref={ref} className={buttonClass}>
      <Flex>
        {Icon && (
          <Icon width={sizeIcon} height={sizeIcon} viewBox={`0 0 ${sizeIcon} ${sizeIcon}`} />
        )}{' '}
        {children && <span className="button-label">{children}</span>}
      </Flex>
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  background-color: ${({ theme, primary }: any) => (primary ? theme.color.primary : '#f5f5f5')};
  color: ${({ theme, primary }: any) => (primary ? '#fff' : theme.color.text)};
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 6px;

  .button-label {
    font-weight: 600;
    font-size: 12px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  svg {
    flex-shrink: 0;
  }

  //variants
  &.outline {
    height: 28px;
    color: ${({ theme }) => theme.baseColor.grayAlphaSecondary};
    border: 1px solid ${({ theme }) => theme.color.mediumGray};
    background-color: transparent;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 3px;
    }
  }
`;

export default forwardRef(Button);
