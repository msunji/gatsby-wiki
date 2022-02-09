# Personal Wiki with Gatsby

In an attempt to do more learning in public this year, I made myself a personal wiki/notebook of sorts. Ideally, I'd like to use these notes for my own personal reference. Having them all in one place, makes it a bit easier for me to find them and read them later down the road (as opposed to looking through a million post-it's I've chucked into my drawer).

## Tech Stack

- [Gatsby](https://www.gatsbyjs.com/)
- [Tailwind CSS](https://tailwindcss.com/) and its [Typography plugin](https://tailwindcss.com/docs/typography-plugin)
- [MDX](https://mdxjs.com/)
- [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
- [Plop](https://plopjs.com/)

## Project Notes

- I initially wanted to build this with Next.js (which I'm a bit more familiar with), but Gatsby gives you access to static queries, which I ended up using for the site's sidebar component.
- I went with Tailwind's Typography plugin to make the styling part of my workflow a bit more efficient. The plugin really makes it so much more straightforward.
- Notes are written in Markdown (MDX, more specifically). Eventually, I'll get around to making some custom components I can use in my .mdx files.
- To style code blocks in my notes, I went with `prism-react-renderer`.
- I used Plop to automate note creation and save time in the long run. Works a charm.
- Lastly, the project's been deployed to Vercel.

## Would be nice

I'm thinking of adding a few more things in the near future:

- [ ] Custom MDX components
- [ ] Line highlighting for code blocks
- [ ] Dark mode
