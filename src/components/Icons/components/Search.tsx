import React from 'react';
import Svg from '../Svg';

const Search = (prop: any) => {
  return (
    <Svg {...prop}>
      <path
        d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default Search;