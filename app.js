const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

//START USING npm start -- --port 3000
// Serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// Configure Nunjucks to use your views directory
nunjucks.configure(
  [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'node_modules/govuk-frontend/dist')
  ],
  {
    autoescape: true,
    express: app
  }
);

// Home route
app.get('/', (req, res) => {
  res.render('index.njk', {
    pageTitle: "Home - Melvera",
    username: "Home Visitor",
    items: ['One', 'Two', 'Three']
  });
});

// About page
app.get('/about', (req, res) => {
  res.render('about.njk', {
    pageTitle: "About - Melvera",
    username: "About Visitor",
    items: ['Alpha', 'Beta', 'Gamma']
  });
});

// News page
app.get('/news', (req, res) => {
  res.render('news.njk', {
    pageTitle: "News - Melvera",
    username: "News Visitor",
    items: ['Alpha', 'Beta', 'Gamma']
  });
});

// Documents page
app.get('/documents', (req, res) => {
  res.render('documents.njk', {
    pageTitle: "Documents - Melvera",
    username: "Documents Visitor",
    items: ['Alpha', 'Beta', 'Gamma']
  });
});

// Officials & Contact page
app.get('/officials', (req, res) => {
  res.render('officials.njk', {
    pageTitle: "Officials & Contact - Melvera",
    username: "Officials & Contact Visitor",
    items: ['Alpha', 'Beta', 'Gamma']
  });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404.njk', { pageTitle: "404 - Page Not Found" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});