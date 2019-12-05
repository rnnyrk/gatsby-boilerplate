import React from 'react';
import PT from 'prop-types';
import { graphql } from 'gatsby';

import { Template } from 'common/layout';

const Page = () => {
  return (
    <Template>
      <h1>Default page</h1>
    </Template>
  );
}

Page.propTypes = {};

export default Page;

export const getPageQuery = graphql`
  query {
  }
`;
