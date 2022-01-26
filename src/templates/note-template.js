import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const NoteTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <p>test</p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
