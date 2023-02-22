import React from 'react';
import classNames from 'classnames';

import StyledButton from './button.styled';
import { StyleProps } from './types';

const Button = ({
  children,
  size = '28px',
  className = '',
  iconBtn,
  Icon,
  iconSize = '24',
  ...props
}: any) => {
  const btnClassName = classNames({
    [`btn-icon`]: iconBtn,
  });

  const btnProps = {
    size,
  };

  return (
    <>
      {iconBtn && Icon ? (
        <StyledButton className={btnClassName} {...btnProps} {...props}>
          <Icon width={iconSize} height={iconSize} />
        </StyledButton>
      ) : (
        <StyledButton className={btnClassName} {...btnProps} {...props}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
