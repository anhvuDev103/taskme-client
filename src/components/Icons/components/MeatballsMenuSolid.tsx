import React from 'react';
import Svg from '../Svg';

const MeatballsMenuSolid = (prop: any) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...prop}
    >
      <g
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        transform="translate(3 10)"
      >
        <circle cx="2" cy="2" r="1.5"></circle>
        <circle cx="9" cy="2" r="1.5"></circle>
        <circle cx="16" cy="2" r="1.5"></circle>
      </g>
    </Svg>
  );
};

export default MeatballsMenuSolid;
