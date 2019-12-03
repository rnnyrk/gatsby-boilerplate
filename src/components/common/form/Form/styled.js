import styled from 'styled-components';
import { media } from 'styles/utils';

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: 45em;
  margin-top: 20px;
  padding: 0 25px;

  ${media.tablet`
    margin: 0 auto;
  `}
`;
