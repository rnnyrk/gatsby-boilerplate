import React from 'react';
import PT from 'prop-types';

import { Title } from 'common/typography';
import { Container } from 'components/layout';

import {
  SellingPointsContainer,
  SellingsPointsContent,
  SellingsPointsImage,
  SellingPointUspList,
  SellingPointUspItem,
} from './styled';

const SellingPoints = ({ image, title, usps }) => (
  <SellingPointsContainer>
    <Container>
      <SellingsPointsContent>
        <Title>{title}</Title>

        <SellingPointUspList>
          {usps.map((usp) => (
            <SellingPointUspItem key={usp.title}>
              {usp.title}
            </SellingPointUspItem>
          ))}
        </SellingPointUspList>
      </SellingsPointsContent>
    </Container>

    <SellingsPointsImage
      src={image.localFile.childImageSharp.fluid.src}
      alt={image.alt_text || image.title}
    />
  </SellingPointsContainer>
);

SellingPoints.propTypes = {
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
  }),
  title: PT.string,
  usps: PT.arrayOf(PT.shape({
    title: PT.string,
  })),
};

export default SellingPoints;
