<h1 align="center">
  Gatsby Boilerplate
</h1>

## 🚀 Quick start

1.  **Clone Git repository.**
    Clone the repository

    ```shell
    # SSH
    git@github.com:rnnyrk/gatsby-boilerplate-ts.git
    ```

2.  **Install packages and run project.**

    Navigate into your new site’s directory and install NPM packages.

    ```shell
    cd gatsby-boilerplate-ts
    npm install
    npm run develop
    ```

3.  **Open the code and start developing!**

    You can now view boilerplate in the browser at [http://localhost:3000/](http://localhost:3000/).
⠀

    View GraphiQL, an in-browser IDE, to explore your site's data and schema at [http://localhost:3000/___graphql](http://localhost:3000/___graphql).

## 👨‍💻 Editor setup

  1. Make sure to install the [VSCode Apollo GraphQL extension](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) (YES, even this isn’t Apollo project). This plugin will make use of the schema's exported by _gatsby-plugin-typegen_ (See Gatsby plugins section down below).

## 🎯 Deployment

  1. This project uses [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a .env file into process.env. By default Gatsby supports 2 environments:

      - Development. If you run `gatsby develop`, then you will be in the ‘development’ environment.
      - Production. If you run `gatsby build` or `gatsby serve`, then you will be in the ‘production’ environment.

      We've added test and acceptance by using the APP_ENV environment variable. See 1PW `AWS services rocycle` about the commands you can run to deploy to each environment.

  2. The project uses CI/CD to deploy to the test, acceptation and production environment!

## 📖 Project features

1.  **Main dependencies**

    - [Gatsby](https://www.gatsbyjs.com/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Styled-Components](https://www.styled-components.com)
    - [React Helmet](https://github.com/nfl/react-helmet)

2. **Gatsby plugins**

    See [gatsby-config.js](gatsby-config.js) for the following plugins configuration.

    - [gatsby-source-graphql](https://www.gatsbyjs.com/plugins/gatsby-source-graphql/?=graphql) Plugin for connecting arbitrary GraphQL APIs to Gatsby’s GraphQL. _NOTE: This plugin requires that your Wagtail site uses the [Wagtail-Grapple](https://github.com/GrappleGQL/wagtail-grapple) library to build a compatible GraphQL endpoint. This plugin requires an existing GraphQL endpoint and does not work with a CMS out of the box._
    - [gatsby-plugin-module-resolver](https://www.gatsbyjs.com/plugins/gatsby-plugin-module-resolver/)
    Allows us to use the same folder structure as in our React Prime projects.
    - [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=manifest) The web app manifest enabled by this plugin allows users to add your site to their home screen on most mobile browsers. The manifest provides configuration and icons to the phone.

      _NOTE: You need to add some additional configuration to generate icons. See the [documentation here](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=manifest#configure-icons-and-their-generations---required)._
    - [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet) Provides drop-in support for server rendering data added with React Helmet.
    - [gatsby-plugin-react-svg](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/?=gatsby-plugin-react-svg) Adds svg-react-loader to gatsby webpack config.
    - [gatsby-transformer-sharp & gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/?=gatsby%20transformer) Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
    - [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/?=gatsby-plugin-sitemap) Automatically generated a sitemap for the website (/sitemap.xml). _NOTE: This plugin only generates output when run in production mode! To test your sitemap, run:_

      ```shell
      gatsby build && gatsby serve
      ```
    - [gatsby-plugin-styled-components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=gatsby-plugin-styled-components) A plugin for styled-components with built-in server-side rendering support.
    - [gatsby-plugin-typegen](https://www.gatsbyjs.com/plugins/gatsby-plugin-typegen/?=gatsby-plugin-typegen) Watches your queries and automatically generates TypeScript/Flow definitions out-of-box.

      Only automatically adds the generated types for static queries, you have to manually select the right type for page queries. Eg:

        ```
        type IndexPageProps = PageProps & {
          data: GatsbyTypes.PageTitleQuery
        };

        export const pageQuery = graphql`
          query PageTitle {
            site {
              siteMetadata {
                title
              }
            }
          }
        `;
        ```

      Within this project the plugin is also configured to use [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) and [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin).

      Autogenerated files should be committed to Git so new developers don't have to run the project once to get all type definitions.

      _Note: This plugin is pretty opionated, there aren't a lot of options to customize the behaviour of the plugin._

    - [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=gatsby-source-filesystem) A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
