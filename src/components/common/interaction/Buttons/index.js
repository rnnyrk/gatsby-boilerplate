import styled, { css } from 'styled-components';
import PT from 'prop-types';
import { Link } from 'gatsby';
import { media } from 'styles/utils';

export const Button = styled.button`
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 900;
  font-family: ${(props) => props.theme.font.quicksand};
  text-transform: uppercase;
  border: 0;
  color: ${(props) => props.theme.white};
  background: linear-gradient(to right, ${(props) => props.theme.brown} 0%, #B3965F 100%);

  ${media.tablet`
    width: auto;
    border-radius: 4px;
  `}

  ${media.desktop`
    transition: .2s background;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to left, ${(props) => props.theme.brown} 0%, #B3965F 100%);
    }
  `}

  ${(props) => props.variant === 'secondary' && css`
    border: 2px solid ${(props) => props.theme.brown};
    color: ${(props) => props.theme.brown};
    background: transparent;

    ${media.desktop`
      transition: .2s border-color, .2s color, .2s background;

      &:hover {
        border-color: ${(props) => props.theme.brown.medium};
        color: ${(props) => props.theme.brown.medium};
        background: rgba(195, 168, 116, .1);
      }
    `}
  `};

  ${(props) => props.disabled && css`
    opacity: .5;
    cursor: not-allowed;

    ${media.desktop`
      &:hover {
        background: linear-gradient(to right, ${(props) => props.theme.brown} 0%, #B3965F 100%);
      }
    `}
  `};
`;

Button.propTypes = {
  disabled: PT.bool,
  variant: PT.oneOf(['default', 'secondary']),
};

Button.defaultProps = {
  disabled: false,
  variant: 'default',
};

export const LinkButton = styled(Button).attrs({
  as: Link,
})`
  outline: none;
  text-decoration: none;
`;
