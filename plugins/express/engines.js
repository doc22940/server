const fs = require('mz/fs');
const { handlebars } = require('../../packages');

module.exports = {
  html: file => fs.readFile(file, 'utf-8'),
  hbs: (file, options) => fs.readFile(file, 'utf-8').then(file => {
    return handlebars.compile(file)(options);
  }),
  pug: () => 'Pug is not ready yet!'
};
