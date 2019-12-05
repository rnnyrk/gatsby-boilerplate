require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Strapi OGSM',
    titleTemplate: '%s - Strapi OGSM',
    description: 'Gatsby boilerplate for Strapi CMS',
    image: 'src/assets/images/prime-icon.png',
    url: 'https://strapi-ogsm.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [
          'article',
          'user',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          common: './components/common',
          modules: './components/modules',
          pages: './pages',
          styles: './assets/styles',
          services: './services',
          templates: './templates',
          images: './assets/images',
          vectors: './assets/vectors',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/vectors/internal/`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'strapi-ogsm',
        short_name: 'starter',
        start_url: '/',
        background_color: '#010101',
        theme_color: '#e7ff04',
        display: 'minimal-ui',
        icon: 'src/assets/images/prime-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
