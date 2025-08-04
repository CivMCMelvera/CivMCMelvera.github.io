const nunjucks = require('nunjucks');
const fs = require('fs');

// Add views and GOV.UK macro path
nunjucks.configure([
  'views',
  'node_modules/govuk-frontend/dist'
]);

const output = nunjucks.render('index.njk');

// Save it
fs.writeFileSync('public/index.html', output);