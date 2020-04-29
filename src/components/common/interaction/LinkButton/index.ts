import styled from 'styled-components';
import { Link } from 'gatsby';

import { Button } from '../Button';

export const LinkButton = styled(Button).attrs({
  as: Link,
})`
  outline: none;
  text-decoration: none;
`;
