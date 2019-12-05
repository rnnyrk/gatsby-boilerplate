const slash = require('slash');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create pages for every Strapi article
  const pagesResult = await graphql(`
    {
      allStrapiArticle {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
  `);

  console.log('pagesResult', pagesResult);

  if (pagesResult.errors) {
    console.error('Somethings went wrong getting pages!');
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
