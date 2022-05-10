---
title: Ignoring Draft Notes in Gatsby
datePosted: 2022-05-09
dateUpdated: 2022-05-09
---

Well, one way of going about it is to have a `drafts` field or something similar in your frontmatter. Personally, I prefer having all my draft notes in the same folder, so here's how I've gone about it. 

In your `gatsby-config` file, find the instance of your `gatsby-source-filesystem` plugin that pulls in your notes. Mine looks something like this :

```js
{
  resolve: 'gatsby-source-filesystem',
  options: {
	name: 'notes',
	path: './src/_notes/',
  },
  __key: 'notes',
}
```

In the `options` object, you're given the choice to pass an `ignore` array of file globs to ignore.  In my case, I want the draft to be visible in development, but *not in production*. So if in development, pass an empty array, if not, pass the path to the `_drafts` folder. To do this, add this somewhere at the top of your config file:

```js
let ignoreDraft = process.env.NODE_ENV === 'production' ? [`**/_drafts`] : [];
```

Then, in your `options` object:

```js
{
  resolve: 'gatsby-source-filesystem',
  options: {
	name: 'notes',
	path: './src/_notes/',
	ignore: ignoreDraft
  },
  __key: 'notes',
}

```

And that's it!