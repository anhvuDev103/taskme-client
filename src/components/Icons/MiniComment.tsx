import React from 'react';
import Svg from './Svg';

const MiniComment = (prop: any) => {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class="notes_icon"
      aria-label="1 comment"
      {...prop}
    >
      <g fill="none" fill-rule="evenodd">
        <path
          fill="currentColor"
          fill-rule="nonzero"
          d="M9.5 1A1.5 1.5 0 0 1 11 2.5v5A1.5 1.5 0 0 1 9.5 9H7.249L5.28 10.97A.75.75 0 0 1 4 10.44V9H2.5A1.5 1.5 0 0 1 1 7.5v-5A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H5v1.836L6.835 8H9.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"
        ></path>
      </g>
    </Svg>
  );
};

export default MiniComment;
