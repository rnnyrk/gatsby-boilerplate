import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Footer, Header, Meta } from 'components/layout';

const Template = ({ children, menu, options, meta }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta title={meta.yoast_wpseo_title} description={meta.yoast_wpseo_metadesc} />
      <Header menu={menu} />
      {children}
      <Footer options={options} />
    </>
  </ThemeProvider>
);

Template.propTypes = {
  children: PT.any,
  meta: PT.shape({
    yoast_wpseo_title: PT.string,
    yoast_wpseo_metadesc: PT.string,
  }),
  menu: PT.arrayOf(PT.shape({
    object_id: PT.number,
    object_slug: PT.string,
    title: PT.string,
    url: PT.string,
  })),
  options: PT.shape({
    address: PT.string,
    email: PT.string,
    facebook: PT.string,
    phone: PT.string,
    linkedin: PT.string,
  }),
};

Template.defaultProps = {
  meta: PT.shape({
    yoast_wpseo_title: null,
    yoast_wpseo_metadesc: null,
  }),
}

export default Template;
