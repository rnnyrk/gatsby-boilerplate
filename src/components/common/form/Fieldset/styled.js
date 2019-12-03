import styled, { css } from 'styled-components';
import PT from 'prop-types';

import ArrowImg from 'images/arrow.png';

export const FieldsetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  ${(props) => props.type === 'select' && css`
    &:after {
      content: '';
      position: absolute;
      z-index: 3;
      bottom: 23px;
      right: 20px;
      width: 12px;
      height: 10px;
      background: center / contain url(${ArrowImg}) no-repeat;
    }
  `}
`;

FieldsetWrapper.propTypes = {
  type: PT.string,
};

export const ErrorWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.red};
`;
