import React from 'react';
import Svg from './Svg';

const Config = (prop: any) => {
  return (
    <Svg {...prop}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" transform="translate(3 10)">
        <circle cx="2" cy="2" r="2"></circle>
        <circle cx="9" cy="2" r="2"></circle>
        <circle cx="16" cy="2" r="2"></circle>
      </g>
    </Svg>
  );
};

export default Config;
