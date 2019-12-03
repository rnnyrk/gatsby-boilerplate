import styled from 'styled-components';
import { media } from 'styles/utils';

const HomeDoormat = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  .slick-slider {
    width: 100%;
    order: 1;

    ${media.tablet`
      order: 0;
      margin-bottom: -10px;
    `}
  }
`;

export default HomeDoormat;
