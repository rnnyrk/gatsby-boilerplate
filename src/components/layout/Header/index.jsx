import React, { useState } from 'react';
import PT from 'prop-types';
import { Link } from 'gatsby';

import { Container } from 'components/layout';
import { HeaderContainer, Line, Logo, MobileMenuToggle, Navigation, NavItem } from './styled';

const Header = ({ menu }) => {
  const [active, setActive] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <MobileMenuToggle
          active={active}
          onClick={() => setActive(!active)}
        >
          <Line />
          <Line />
        </MobileMenuToggle>

        <Navigation active={active}>
          {menu.map((item) => (
            <NavItem
              key={item.object_id}
              to={`/${item.object_slug === 'home' ? '/' : item.object_slug}`}
              activeClassName="active"
            >
              {item.title}
            </NavItem>
          ))}
        </Navigation>
      </Container>
    </HeaderContainer>
  );
};

Header.propTypes = {
  menu: PT.arrayOf(PT.shape({
    object_id: PT.number,
    object_slug: PT.string,
    title: PT.string,
    url: PT.string,
  })).isRequired,
};

export default Header;
