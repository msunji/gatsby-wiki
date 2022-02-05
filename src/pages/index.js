import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <article className="prose">
        <h1>About</h1>
        <p>
          Hi! You've found Marge's personal wiki. This project's been inspired
          by other folks's personal wikis and digital gardens.{' '}
        </p>
      </article>
    </Layout>
  );
};

export default IndexPage;
