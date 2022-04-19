---
title: Digital Gardens - Carving out my own space for learning
datePosted: 2022-04-19
dateUpdated: 2022-04-19
---

```js
// note-template.js
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const NoteTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container md px-4">
        <article className="prose prose-slate">
          <div>/* Note title, dates, etc. */</div>
          <hr />
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
};

```


test backlingking in another directory [learning through videogames](languages/learning%20through%20videogames.md)
[Test Link to Google](http://google.com)