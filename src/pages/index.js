import React from 'react';
import PT from 'prop-types';
import { graphql } from 'gatsby';

import { Template } from 'common/layout';

const Home = () => {
  return (
    <Template>
      Home
    </Template>
  );
};

Home.propTypes = {
};

export default Home;

export const getHomeQuery = graphql`
  query {
  }
`;
