import * as React from 'react';
import { Link, graphql } from 'gatsby';
import SeoComponent from '../components/SeoComponent';

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <>
      <SeoComponent />
      <>
        <h1>Notes from Marge's desk</h1>
        <p>
          Hiya! This is my digital garden where you'll find short- and long-form
          notes about programming, baking, learning languages, and everything in
          between. If you're new to the idea of a digital garden, you can read
          <Link to="/learning/digital-gardens">this note about it</Link>.
        </p>
        <p>
          tl;dr: this is a personal knowledge base where I write about and
          explore different ideas and topics I'm interested in. Notes are added
          and refined over time.
        </p>
        <h2>Notes I've written</h2>
        <ul>
          {edges.map((edge) => (
            <li key={edge.node.id}>
              {edge.node.frontmatter.dateUpdated} ·{' '}
              <Link to={`${edge.node.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};
export default IndexPage;

export const noteQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___dateUpdated, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            dateUpdated(formatString: "MMM DD, YYYY")
          }
          slug
        }
      }
    }
  }
`;
