import React from 'react';
import PT from 'prop-types';
import { graphql } from 'gatsby';

// import { Checklist } from 'common/general';

const Home = ({
  data: {
    allWordpressWpApiMenusMenusItems,
    wordpressAcfOptions: { options },
    wordpressPage,
  },
}) => {
  return (
    <Template>
      Home
    </Template>
  );
};

Home.propTypes = {
  data: PT.object,
};

export default Home;

export const getHomeQuery = graphql`
  query {
  }
`;
