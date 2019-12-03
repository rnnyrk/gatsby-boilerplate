import React from 'react';
import PT from 'prop-types';
import { graphql } from 'gatsby';

import { Content, Template } from 'components/layout';

const Page = ({
  data: {
    allWordpressWpApiMenusMenusItems,
    wordpressAcfOptions: { options },
    wordpressPage,
  },
}) => (
  <Template
    menu={allWordpressWpApiMenusMenusItems.edges[0].node.items}
    options={options}
  >
    <h3>{wordpressPage.title}</h3>
    <Content dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
  </Template>
);

Page.propTypes = {
  data: PT.shape({
    allWordpressWpApiMenusMenusItems: PT.object,
    wordpressPage: PT.shape({
      title: PT.string,
      content: PT.string,
    }),
    wordpressAcfOptions: PT.object,
  }),
};

export default Page;

export const getPageQuery = graphql`
  query ($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    },
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          items {
            object_id
            object_slug
            title
            url
          }
        }
      }
    }
    wordpressAcfOptions {
      id
      options {
        address
        email
        facebook
        phone
        linkedin
      }
    }
  }
`;
