module.exports = function (plop) {
  const dateNow = new Date(Date.now()).toISOString();
  const datePosted = dateNow.split("T")[0];
  // plop.setHelper("slugify", title => {

  // })
  plop.setGenerator('note', {
    description: 'Generates a new Markdown note',
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Note title:"
      },
      {
        type: 'input',
        name: "category",
        message: "Note category:"
      },
      {
        type: 'input',
        name: 'datePosted',
        default: `${datePosted}`
      }
    ],
    actions: [{
      type: 'add',
      path:'src/notes/{{category}}/{{kebabCase title}}.mdx',
      templateFile: 'src/templates/note-template.hbs',
    }]
  }

  );
}