import styled from 'styled-components';
import { media } from 'styles/utils';

export const GalleryContainer = styled.div`
  margin: 40px 0;
  padding: 0 25px;
`;

export const GalleryGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 300px);
    grid-gap: 5px;
  `}
`;

export const GalleryFigure = styled.figure`
  margin: 0 0 5px;
  flex-basis: 100%;
  height: 200px;

  ${media.tablet`
    margin-bottom: 0;
    height: auto;

    &:nth-child(1) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }

    &:nth-child(2) {
      grid-column: 3 / span 2;
      grid-row: 1 / 1;
    }

    &:nth-child(3) {
      grid-column: 3 / span 1;
      grid-row: 2 / 2;
    }

    &:nth-child(4) {
      grid-column: 4 / span 1;
      grid-row: 2 / 2;
    }
  `}
`;
