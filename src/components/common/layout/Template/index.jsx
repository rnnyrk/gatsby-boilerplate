import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Header, Meta } from 'common/layout';

const Template = ({ children, meta }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <Header />
      {children}
    </>
  </ThemeProvider>
);

Template.propTypes = {
  children: PT.any,
};

export default Template;
