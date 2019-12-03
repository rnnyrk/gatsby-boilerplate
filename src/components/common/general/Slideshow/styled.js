import styled from 'styled-components';
import { media } from 'styles/utils';

export const SlideImageContainer = styled.div`
  height: 250px;

  ${media.tablet`
    height: 400px;
  `}

  ${media.desktop`
    height: 525px;
  `}
`;
