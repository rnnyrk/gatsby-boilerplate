import React from 'react';

import LoaderIcon from 'vectors/internal/loader.svg';

import { LoaderContainer, LoaderImg } from './styled';

const Loader = () => (
  <LoaderContainer>
    <LoaderImg>
      <LoaderIcon />
    </LoaderImg>
  </LoaderContainer>
);

export default Loader;
