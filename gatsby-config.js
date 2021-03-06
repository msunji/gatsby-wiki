let ignoreDraft = process.env.NODE_ENV === 'production' ? [`**/_drafts`] : [];

module.exports = {
  siteMetadata: {
    title: 'Marge Consunji · Personal Wiki',
    titleTemplate: '%s',
    description:
      'Personal notes on baking, programming, and everything else in between.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
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
        path: './src/_notes/',
        ignore: ignoreDraft,
      },
      __key: 'notes',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              showCaptions: ['title'],
            },
          },
        ],
      },
    },
  ],
};
