module.exports = function (plop) {
  const dateNow = new Date(Date.now()).toISOString();
  const datePosted = dateNow.split("T")[0];
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
        name: 'Date Posted:',
        default: `${datePosted}`
      }
    ],
    actions: [{
      type: 'add',
      path:'src/notes/{{lowerCase category}}/{{kebabCase title}}.mdx',
      templateFile: 'src/templates/note-template.hbs',
    }]
  });
}