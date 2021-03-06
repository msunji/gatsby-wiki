import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SeoComponent = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <link rel="icon" href="https://emojicdn.elk.sh/🍰" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  );
};

SeoComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SeoComponent.defaultProps = {
  lang: `en`,
  title: null,
  description: null,
};

export default SeoComponent;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`;
