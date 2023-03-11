import styled from 'styled-components';

import { Flex } from 'components/UIkit';
import { forwardRef } from 'react';
import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  Icon?: any;
  sizeIcon?: number | string;
  variant?: 'primary' | 'outline' | 'normal';
  onClick?: () => void;
}

const Button = (props: Props, ref: any) => {
  const { children, className, Icon, size = 'md', sizeIcon = 24, variant = '', onClick } = props;

  const buttonProps = {
    onClick,
  };

  const buttonClasses = classNames(className, {
    [`size-${size}`]: size,
    [`variant-${variant}`]: variant,
  });

  return (
    <StyledButton {...buttonProps} ref={ref} className={buttonClasses}>
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
  background-color: #f5f5f5;
  color: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 6px;

  &:hover {
    background-color: #e5e5e5;
  }

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
  &.variant {
    &-primary {
      color: #fff;
      background-color: ${({ theme }) => theme.color.primary};

      &:hover {
        background-color: #b03d32 !important;
      }
    }

    &-outline {
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
  }

  //sizes
  &.size {
    &-sm {
      height: 24px;
    }
    &-md {
      height: 32px;
      padding: 0 12px;
    }
  }
`;

export default forwardRef(Button);
