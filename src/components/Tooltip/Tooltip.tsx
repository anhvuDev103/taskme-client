import React, { ReactElement } from 'react';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';

interface Props {
  handler: ReactElement;
  children: ReactElement | string;
}

const Tooltip = ({ handler, children }: Props) => {
  return (
    <StyledTooltip offset={[0, 4]} delay={[200, null]} content={children}>
      {handler}
    </StyledTooltip>
  );
};

const StyledTooltip = styled(Tippy)`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.baseColor.tooltip};
  border-radius: ${({ theme }) => theme.radius.small};
  color: #fff;
`;

export default Tooltip;
