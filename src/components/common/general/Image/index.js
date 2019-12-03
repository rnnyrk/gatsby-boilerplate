import React from 'react';
import PT from 'prop-types';

import { ImageEl } from './styled';

const Image = ({ image, classname }) => {
  if (!image) return null;

  return (
    <ImageEl
      classname={classname}
      src={image.localFile.childImageSharp.fluid.src}
      alt={image.alt_text || image.title}
    />
  );
};

Image.propTypes = {
  classname: PT.string,
  image: PT.shape({
    localFile: PT.shape({
      childImageSharp: PT.shape({
        fluid: PT.shape({
          src: PT.string,
          srcWebp: PT.string,
        }),
      }),
    }),
    alt_text: PT.string,
    title: PT.string,
  }).isRequired,
};

export default Image;
