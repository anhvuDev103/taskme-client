import styled from 'styled-components';

import { Input } from 'components/UIkit';

const StyledInputWrapper = styled(Input)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: 14px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export { StyledInputWrapper };
