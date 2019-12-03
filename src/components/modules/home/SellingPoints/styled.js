import styled from 'styled-components';
import { media } from 'styles/utils';
import PT from 'prop-types';

import Check from 'vectors/external/check.svg';
import { Container } from 'components/layout';

export const SellingPointsContainer = styled.div`
  position: relative;
  margin: 0 0 30px;
  padding: 0 25px 230px;
  border-bottom: 1px solid ${(props) => props.theme.brown.border};
  background: ${(props) => props.theme.white};

  ${media.tablet`
    margin: 80px 0;
    padding: 0;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: -1px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 200vw;
      height: calc(100% + 2px);
      transform: translateX(-100vw);
      border-top: 1px solid ${(props) => props.theme.brown.border};
      background: ${(props) => props.theme.white};
    }
  `}

  ${Container} {
    padding: 40px 0;

    ${media.tablet`
      padding: 80px 0;
    `}
  }
`;

export const SellingsPointsContent = styled.div`
  max-width: 500px;
`;

export const SellingsPointsImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  width: 90%;

  ${media.tablet`
    width: auto;
  `}
`;

SellingsPointsImage.propTypes = {
  src: PT.string.isRequired,
};

export const SellingPointUspList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const SellingPointUspItem = styled.li`
  position: relative;
  margin-bottom: 25px;
  padding-left: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 22px;
    height: 22px;
    background: url(${Check}) no-repeat center / 100%;
  }
`;
