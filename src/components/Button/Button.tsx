import styled from 'styled-components';

import { Flex } from 'components/UIkit';

const Button = ({ children, Icon, primary, ...props }: any) => {
  const buttonProps = {
    primary,
    ...props,
  };

  return (
    <StyledButton {...buttonProps}>
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

  .button-label {
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    margin: 0 6px 0 3px;
  }

  &:hover {
    /* background-color: ${({ theme }) => theme.baseColor.grayAlpha}; */
  }

  svg {
    flex-shrink: 0;
  }
`;

export default Button;
