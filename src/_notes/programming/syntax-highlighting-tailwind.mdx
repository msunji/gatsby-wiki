---
title: 'Setting syntax highlighting with Tailwind and Gatsby'
datePosted: '2022-01-28'
dateUpdated: '2022-02-08'
---

Since I wanted to use my personal wiki to compile programming notes as well, I figured it would be nice to have code blocks styled to make them a little easier to read. (They're also a bit nicer on the eyes, but I digress.)

## Tools

- Tailwind CSS and the official [Typography plugin](https://tailwindcss.com/docs/typography-plugin)
- Gatsby
- MDX
- [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)

## Rendering Markdown in Gatsby

My personal wiki notes are rendered from Markdown files. Gatsby provides [plugins](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) for this.

Since I'll be getting the contents of my Markdown files through a GraphQL page query, I'll need to use the `MDXRenderer` component. With a page query, it'll look something like this:

```jsx
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

Your note content gets rendered and that's all well and good. So with that out of the way, it's time to get them prettied up. I opted to go with Tailwind's official Typography plugin to get my notes styled out of the box. It's pretty simple to use and you only need to add the `prose` class to get it working. Code blocks and inline blocks get styled as well, but it really isn't anything too fancy.

I wanted a custom component that provided syntax highlighting for bits of code. But since you can't pass custom components directly to `MDXRenderer`, you'll need to wrap it in an `MDXProvider` component which you can then pass your custom components to. The revised note template should end up looking a bit like this:

```jsx
// note-template.js
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const NoteTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container md px-4">
        <article className="prose prose-slate">
          <div>/* Note title, dates, etc. */</div>
          <hr />
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </Layout>
  );
};
```

Now on to the juicy bit.

## Making the Syntax Highlighting Component

TL;DR - Here's what I did to get this working:

1. Using [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer), make a custom syntax highlighting component which gets passed to `MDXProvider`
2. Modify `tailwind.config.js` to add some extra styling to code blocks (`pre`) and inline code (`code`)

I've also added a tiny label that sits right on top of the code block and indicates what language the code's been written in.

```jsx
// Code block component
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
```

Here's a breakdown of what's going on up there:

- prism-react-renderer provides [some detailed info](https://github.com/FormidableLabs/prism-react-renderer#usage) about using the `Highlight` component.
- Logging the `children` object to console gives you a lot of details about what you'll be passing to the `Highlight` component. For the most part, you'll find everything you need in `props` object.
- In the `props` object, you'll find your code block content under the `children` property
- As for information about the language you've specified in your Markdown code block, check the `className` property.

## For Later

- Consider line highlighting?

[[test]]
