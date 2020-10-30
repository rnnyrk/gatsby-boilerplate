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

export const Title = styled.h1<TitleProps>`
  margin: 0;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ as }) => mobileSizes[as ? as : 'h1']};
  line-height: 133%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.prime};

  ${media.tablet<TitleProps>`
    font-size: ${({ as }) => desktopSizes[as ? as : 'h1']};
  `}
`;

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5;'
};
