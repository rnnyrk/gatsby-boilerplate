import styled from 'styled-components';
import { media } from 'styles/utils';

export const Container = styled.div`
  position: relative;
  width: 100%;

  ${media.tablet`
    max-width: 960px;
    margin: 0 auto;
  `}

  ${media.desktop`
    max-width: 1200px;
  `}
`;
