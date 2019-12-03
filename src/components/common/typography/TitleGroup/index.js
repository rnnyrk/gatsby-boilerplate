import styled from 'styled-components';
import { media } from 'styles/utils';

import Shape from 'vectors/external/shape.svg';
import { Title } from 'common/typography';

const TitleGroup = styled.header`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
  background: url(${Shape}) no-repeat center;
  background-size: auto 100%;

  ${Title} {
    flex-basis: 100%;
  }

  ${media.tablet`
    padding: 0 20px;
  `}
`;

export default TitleGroup;
