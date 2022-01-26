import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const NoteTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container md px-4">
        <article className="prose">
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        dateUpdated
        title
        datePosted
      }
      slug
    }
  }
`;

export default NoteTemplate;
