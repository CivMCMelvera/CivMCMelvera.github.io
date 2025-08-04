const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

// Serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// Configure Nunjucks to use both your views and GOV.UK Frontend macros
nunjucks.configure([
  path.join(__dirname, 'views'),
  path.join(__dirname, 'node_modules/govuk-frontend/dist')
], {
  autoescape: true,
  express: app
});

// Home route
app.get('/', (req, res) => {
  res.render('index.njk', {
    pageTitle: "Welcome to My GOV.UK Site",
    username: "Citizen",
    items: ['One', 'Two', 'Three']
  });
});

// About page example
app.get('/about', (req, res) => {
  res.render('index.njk', {
    pageTitle: "About - GOV.UK Example",
    username: "About Visitor",
    items: ['Alpha', 'Beta', 'Gamma']
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});