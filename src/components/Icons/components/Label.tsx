import React from 'react';
import Svg from '../Svg';

const Label = (prop: any) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...prop}
    >
      <path
        fill="currentColor"
        d="M18 4a2 2 0 012 2v6.172c0 .53-.21 1.039-.586 1.414l-6.5 6.5c-.78.78-2.047.78-2.828 0l-6.172-6.172a2.001 2.001 0 010-2.828l6.5-6.5A1.998 1.998 0 0111.828 4H18zm0 1h-6.172a.997.997 0 00-.707.293l-6.5 6.5a1 1 0 000 1.414l6.172 6.172a1 1 0 001.414 0l6.5-6.5a1 1 0 00.293-.707V6a1 1 0 00-1-1zm-3.25 3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
      ></path>
    </Svg>
  );
};

export default Label;
