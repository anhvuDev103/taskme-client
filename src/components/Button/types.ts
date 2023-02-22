import { ColorProps } from 'styled-system';

export interface Props {
  children?: React.ReactNode;
  size?: string;
  iconBtn?: boolean;
  Icon?: React.ElementType;
  iconSize?: string;
  className?: string;
}

export interface StyleProps extends Props, ColorProps {}
