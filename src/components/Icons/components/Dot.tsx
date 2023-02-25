import React from 'react';
import Svg from '../Svg';

const Dot = (prop: any) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="project_icon"
      // style="color: rgb(128, 128, 128);"
      {...prop}
    >
      <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path>
    </Svg>
  );
};

export default Dot;
