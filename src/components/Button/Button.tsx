import { forwardRef } from 'react';
import styled from 'styled-components';

import { Flex } from 'components/UIkit';

const Button = ({ children, Icon, primary, ...props }: any, ref: any) => {
  const buttonProps = {
    primary,
    ...props,
  };

  return (
    <StyledButton {...buttonProps} ref={ref}>
      <Flex>
        {Icon && <Icon />} {children && <span className="button-label">{children}</span>}
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
`;

export default forwardRef(Button);
