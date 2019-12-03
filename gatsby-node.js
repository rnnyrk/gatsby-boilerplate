const slash = require('slash');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Add allWordpressPost to same query so pagesResult.data
  // will be an array with allWordpressPage and allWordpressPost
  const pagesResult = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            slug
          }
        }
      }
    }
  `);

  if (pagesResult.errors) {
    console.error('Somethings went wrong getting Wordpress pages!');
    throw new Error(pagesResult.errors);
  }

  pagesResult.data.allWordpressPage.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(path.resolve('./src/templates/page.js')),
      context: {
        id: edge.node.id,
      },
    });
  });
};
