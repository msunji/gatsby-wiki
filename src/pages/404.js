import * as React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <article className="prose">
        <h1>Whoops.</h1>
        <p>It looks like you've reached a page that doesn't exist.</p>
      </article>
    </Layout>
  );
};

export default NotFoundPage;
