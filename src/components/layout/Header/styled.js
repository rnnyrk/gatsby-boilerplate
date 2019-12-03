import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'gatsby';

import LogoSVG from 'vectors/internal/-logo.svg';
import { Container } from 'components/layout';

export const Logo = styled(LogoSVG)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 145px;
`;

export const Line = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  transform-origin: center;
  transition: transform .2s ease-in;

  &:nth-child(1) {
    transform: rotate(0) translateY(-2px);
  }

  &:nth-child(2) {
    transform: rotate(0) translateY(3px);
  }
`;

export const MobileMenuToggle = styled.div`
  position: relative;
  z-index: 5;
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin-top: 3px;
  padding-top: 8px;

  ${(props) => props.active && css`
    ${Line} {
      position: absolute;
      top: 10px;
      left: 0;

      &:nth-child(1) {
        transform: rotate(-45deg) translateY(0);
      }

      &:nth-child(2) {
        transform: rotate(45deg) translateY(0);
      }
    }
  `}

  ${media.tablet`
    display: none;
  `}
`;

export const Navigation = styled.nav`
  position: absolute;
  z-index: 4;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.brown};
  transform: translateX(-100vw);
  transition: transform .2s ease-in;

  ${media.tablet`
    flex-direction: row;
    position: static;
    transform: translateX(0);
    width: auto;
    height: auto;
    background: none;
    margin-left: 20px;
  `}

  ${(props) => props.active && css`
    transform: translateX(0);
  `}
`;

export const NavItem = styled(Link)`
  width: 100%;
  padding: 10px 25px;
  margin-bottom: 10px;
  font-size: 20px;
  color: ${(props) => props.theme.white};
  text-decoration: none;

  ${media.tablet`
    font-size: 18px;
    margin-bottom: 0;
    margin-right: 10px;
  `}

  &.active {
    border-left: 10px solid ${(props) => props.theme.brown.medium};

    ${media.tablet`
      border-left: 0;
      background: ${(props) => props.theme.brown.medium};
      border-radius: 4px;
    `}
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 105px;
  margin-bottom: 68px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.brown};

  ${media.tablet`
    position: relative;
    z-index: 3;
    justify-content: flex-start;
    margin-bottom: 0;
  `}

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0 20px;

    ${media.tablet`
      justify-content: flex-start;
      padding-left: 200px;
    `}
  }
`;
