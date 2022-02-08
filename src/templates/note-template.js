import React from 'react';
import Seo from '../components/Seo';
import { graphql } from 'gatsby';
import Highlight, { defaultProps } from 'prism-react-renderer';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const CodeBlock = ({ children }) => {
  const language = /language-(\w+)/.exec(children.props.className || '');
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={language[1]}
      theme={shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          <span className="relative -top-3 uppercase bg-red-500 text-white font-semibold tracking-widest px-4 py-1">
            {language[1]}
          </span>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const components = {
  pre: CodeBlock,
};

const NoteTemplate = ({ data }) => {
  return (
    <>
      <Seo title={data.mdx.frontmatter.title} />
      <div className="container md px-4">
        <article className="prose prose-slate prose-h1:mb-1 prose-p:leading-relaxed prose-li:leading-normal prose-img:rounded-md prose-a:text-red-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:rounded-md prose-blockquote:border prose-blockquote:border-slate-200 prose-hr:my-8">
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p className="mb-0 text-sm">
              <span className="uppercase">Posted:</span>{' '}
              {data.mdx.frontmatter.datePosted}
            </p>
            <p className="mt-0 text-sm">
              <span className="uppercase">Updated:</span>{' '}
              {data.mdx.frontmatter.dateUpdated}
            </p>
          </div>
          <hr />
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
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
