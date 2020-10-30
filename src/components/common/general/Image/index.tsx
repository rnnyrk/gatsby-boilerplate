import React from 'react';

import { ImageEl } from './styled';

export const Image: React.FC<ImageProps> = ({ image, classname }) => {
  if (!image) return null;

  return (
    <ImageEl
      classname={classname}
      src={image.localFile.childImageSharp.fluid.src}
      alt={image.alt_text || image.title}
    />
  );
};

type ImageProps = {
  classname: string;
  image: {
    localFile: {
      childImageSharp: {
        fluid: {
          src: string;
          srcWebp: string;
        };
      };
    };
    alt_text: string;
    title: string;
  };
};
