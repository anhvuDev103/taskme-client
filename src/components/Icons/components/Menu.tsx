import React from 'react';
import Svg from '../Svg';

const Menu = (prop: any) => {
  return (
    <Svg {...prop}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
      ></path>
    </Svg>
  );
};

export default Menu;
