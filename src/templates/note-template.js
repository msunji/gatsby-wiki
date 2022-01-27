import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const NoteTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="container md px-4">
        <article className="prose prose-slate prose-h1:mb-1 prose-img:rounded-md prose-code:text-cyan-500 prose-a:text-cyan-500">
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p className="mb-0 text-sm">
              <span className="uppercase">Posted:</span>{' '}
              {data.mdx.frontmatter.datePosted}
            </p>
            <p className="mt-0 text-sm">
              <span className="uppercase">Updated:</span>{' '}
              {data.mdx.frontmatter.datePosted}
            </p>
          </div>
          <hr />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      body
    }
  }
`;

export default NoteTemplate;
