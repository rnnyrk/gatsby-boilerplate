import styled from 'styled-components';
import { media } from 'styles/utils';

const mobileSizes = {
  h1: '34px',
  h2: '30px',
  h3: '13px',
  h4: '18px',
  h5: '16px',
  h6: '14px',
};

const desktopSizes = {
  h1: '40px',
  h2: '20px',
  h3: '22px',
  h4: '20px',
  h5: '18px',
  h6: '16px',
};

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-family: ${(props) => props.theme.font.quicksand};
  font-size: ${(props) => mobileSizes[props.as ? props.as : 'h1']};
  line-height: 133%;
  text-transform: uppercase;
  color: ${(props) => props.theme.brown.medium};

  ${media.tablet`
    font-size: ${(props) => desktopSizes[props.as ? props.as : 'h1']};
  `}
`;

export default Title;
