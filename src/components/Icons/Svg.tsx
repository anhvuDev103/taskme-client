import React, { SVGProps } from 'react';

export interface SvgProps extends SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
}

const Svg = ({ children, ...props }: SvgProps) => {
  const defaultProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    ...props,
  };
  return <svg {...defaultProps}>{children}</svg>;
};

export default Svg;
