import React from 'react';
import SeoComponent from '../components/SeoComponent';
import Quote from '../components/markdown/Quote';
import CodeBlock from '../components/markdown/CodeBlock';
import LinkRenderer from '../components/markdown/LinkRenderer';
import { graphql } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const components = {
  pre: CodeBlock,
  blockquote: Quote,
  a: LinkRenderer,
};

const NoteTemplate = ({ data }) => {
  const { mdx } = data;
  console.log(mdx.body);
  return (
    <>
      <SeoComponent title={mdx.frontmatter.title} />
      <>
        <div>
          <h1>{mdx.frontmatter.title}</h1>
          <p className="mb-0 text-sm">
            <span className="uppercase">Posted:</span>{' '}
            {mdx.frontmatter.datePosted}
          </p>
          <p className="mt-0 text-sm">
            <span className="uppercase">Updated:</span>{' '}
            {mdx.frontmatter.dateUpdated}
          </p>
        </div>

        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </>
    </>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        dateUpdated(formatString: "MMM DD, YYYY")
        title
        datePosted(formatString: "MMM DD, YYYY")
      }
      slug
      body
    }
  }
`;

export default NoteTemplate;
