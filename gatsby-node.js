const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(limit: 1000) {
          edges {
            node {
              frontmatter {
                datePosted
                dateUpdated
                title
              }
              id
              slug
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const noteTemplate = path.resolve(`./src/templates/note-template.js`);
  result.data.allMdx.edges.forEach(({ node }) => {
    const path = `${node.slug}`;
    createPage({
      path,
      component: noteTemplate,
      context: {
        pagePath: path,
      },
    });
  });
};
