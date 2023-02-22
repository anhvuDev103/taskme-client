import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Svg = ({ children, ...props }: Props) => {
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
