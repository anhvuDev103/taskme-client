import { CheckIc } from 'components/Icons';
import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StyledCheckbox>
      <CheckIc />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.span`
  width: 18px;
  height: 18px;
  padding: 3px;
  margin-right: 8px;
  margin-top: 3px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.gray};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.gray};

  &:hover {
    svg {
      opacity: 1;
    }
  }

  svg {
    flex-shrink: 0;
    opacity: 0;
    transition: 200ms;
  }
`;

export default Checkbox;
