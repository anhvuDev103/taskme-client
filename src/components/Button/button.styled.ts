import styled from 'styled-components';
import { color } from 'styled-system';
import { StyleProps } from './types';

const StyledButton = styled.button<StyleProps>`
  ${color}
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  padding: 0;
  color: gray;
  border-radius: ${({ theme }) => theme.radius.tiny};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.baseColor.grayAlpha};
    color: ${({ theme }) => theme.color.text};
  }

  &.btn-icon {
    color: #fff;
  }

  & + button {
    margin-left: 4px;
  }
`;

export default StyledButton;
