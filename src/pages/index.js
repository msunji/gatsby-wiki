import * as React from 'react';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <>
      <Seo />
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
