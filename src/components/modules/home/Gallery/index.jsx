import React from 'react';
import PT from 'prop-types';

import { Image } from 'common/general';
import { Title, TitleGroup } from 'common/typography';
import { Container } from 'components/layout';

import {
  GalleryContainer,
  GalleryGallery,
  GalleryFigure,
} from './styled';

const Gallery = ({ images, title, subtitle }) => (
  <GalleryContainer>
    <Container>
      <TitleGroup>
        <Title as="h4">{subtitle}</Title>
        <Title as="h1">{title}</Title>
      </TitleGroup>
    </Container>

    <GalleryGallery>
      {images.map((image) => (
        <GalleryFigure key={image.id}>
          <Image image={image} />
        </GalleryFigure>
      ))}
    </GalleryGallery>
  </GalleryContainer>
);

Gallery.propTypes = {
  images: PT.arrayOf(PT.shape({
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
    id: PT.string,
  })),
  title: PT.string,
  subtitle: PT.string,
};

export default Gallery;
