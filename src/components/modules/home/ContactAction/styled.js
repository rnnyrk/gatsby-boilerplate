import styled from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'gatsby';

import Mail from 'vectors/internal/mail.svg';
import Shape from 'vectors/external/shape-white.svg';

export const ContactActionContainer = styled(Link)`
  order: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 45px 0;
  margin-top: -8px;
  font-weight: bold;
  text-decoration: none;
  overflow: hidden;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.brown.dark};

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%) scale(3);
    opacity: .05;
    background: url(${Shape}) no-repeat center / 100%;
  }

  ${media.tablet`
    display: none;
  `}
`;

export const MailIcon = styled(Mail)`
  margin-right: 10px;
`;
