---
title: Making New Notes with Plop
datePosted: 2022-02-08
dateUpdated: 2022-02-08
---

You know what gets tedious? Making these Markdown files for my notes. Luckily, there's a pretty straightforward solution for this.

Enter [Plop](https://github.com/plopjs/plop) - a _micro-generator framework_ that lets you generate code and other flat text files easily.

## The Specifics

- I keep my notes in the `notes` directory (big surprise there, I know).
- I use subdirectories within the `notes` directory to categorise my notes. So for this post, it'd be under `notes/programming`
- Since I write my notes in Markdown, each note has a frontmatter block that contains the note's title, date updated, and date posted.

## Working with Plop

I installed Plop as a local dev dependency, but there's also an option to install it globally.

`npm install --save-dev plop`

I then made two files:

- `plopfile.js`: where the magic happens. This sits in the root of the project.
- `note-template.hbs`: a [handlebars](https://handlebarsjs.com/) template file to use as my note template.

The plopfile (`plopfile.js`) is a node module which exports a function that takes the `plop` object as a parameter.

```js
module.exports = function (plop) {
  const dateNow = new Date(Date.now()).toISOString();
  const datePosted = dateNow.split('T')[0];

  plop.setGenerator('note', {
    description: 'Generates a new Markdown note',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Note title:',
      },
      {
        type: 'input',
        name: 'category',
        message: 'Note category:',
      },
      {
        type: 'input',
        name: 'datePosted',
        default: `${datePosted}`,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/notes/{{lowerCase category}}/{{kebabCase title}}.mdx',
        templateFile: 'src/templates/note-template.hbs',
      },
    ],
  });
};
```

The very aptly named `setGenerator` function lets you make a generator for your propfile. It takes a name and a configuration object.

In the config object, you can provide a short description about what the generator does, as well as a list of prompts to ask the user and a list of actions to perform.

In my case, I'd like to make a generator that makes a single Markdown file for me. I'd also like to be able to set the title and specify which category to make the file in - see the `category` and `title` prompts shown above. Lastly, the file should have a frontmatter block with the title and dates set. Here's how that'd look like:

```js
actions: [
  {
    type: 'add',
    path: 'src/notes/{{lowerCase category}}/{{kebabCase title}}.mdx',
    templateFile: 'src/templates/note-template.hbs',
  },
];
```

The `path` property is basically where the new file gets rendered, while the `templateFile` property's the path to the handlebars template file.

Plop provides a number of [built-in helpers](https://plopjs.com/documentation/#built-in-helpers) to format input. I used the `kebabCase` helper to "slugify" my note titles, and the `lowerCase` helper to format the category name correctly.

Moving on to the template file (`note-template.hbs`). Mine's pretty straightforward, as I've just passed the answers to the prompts to set the title, date posted, and date updated.

```handlebars
---
title: {{title}}
datePosted: {{datePosted}}
dateUpdated: {{datePosted}}
---

Here's a fresh new note to start with ✨
```

## Running the script

Add a new script to `package.json`, like so:

```js
"scripts": {
  "plop": "plop"
}
```

To generate a new note file, run `npm run plop`, answer the prompts, and enjoy ✨
