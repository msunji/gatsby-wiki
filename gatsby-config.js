module.exports = {
  siteMetadata: {
    title: 'Marge Consunji · Personal Wiki',
    titleTemplate: '%s',
    description:
      'Personal notes on baking, programming, and everything else in between.',
    url: `http://localhost:8000/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: './src/notes/',
      },
      __key: 'notes',
    },
  ],
};
