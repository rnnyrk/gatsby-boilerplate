import styled from 'styled-components';
import { media } from 'styles/utils';

const Container = styled.div`
  position: relative;
  width: 100%;

  ${media.desktop`
    max-width: 1200px;
    margin: 0 auto;
  `}
`;

export default Container;
