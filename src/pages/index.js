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
      <article className="prose">
        <h1>About</h1>
        <p>
          Hey there! This is my personal wiki where you'll find notes I've made
          for baking, programming, and everything in between. These notes are
          grouped by category and are updated, well, when they need to be
          updated, I suppose.
        </p>
        <p>
          I've mostly made these notes for my own future reference, but if you
          find any of these notes helpful, then that'd make me pretty darn happy
          😊
        </p>

        <h2>Update Log</h2>
        <p>Notes that I've recently posted or updated.</p>
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

        <hr />

        <h2>Technical Bits</h2>
        <ul>
          <li>
            Built with <a href="https://www.gatsbyjs.com/">Gatsby</a> and{' '}
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </li>
          <li>
            Favicon from <a href="https://emojicdn.elk.sh/">EMOJICDN</a>
          </li>
        </ul>
        <h2>Where to find me</h2>
        <ul>
          <li>
            <a href="https://github.com/msunji/">Github</a>
          </li>
          <li>
            <a href="https://www.mconsunji.com/">Portfolio</a>
          </li>
        </ul>
      </article>
    </>
  );
};
export default IndexPage;

export const noteQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___dateUpdated, order: DESC }, limit: 5) {
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
