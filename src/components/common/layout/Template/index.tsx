import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import { theme } from 'styles/theme';
import { Header, Meta } from 'common/layout';

export const Template: React.FC = ({ children, meta }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <Header />
      {children}
    </>
  </ThemeProvider>
);
