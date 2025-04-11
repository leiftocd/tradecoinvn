const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const distPath = path.join(__dirname, '..', 'dist');
const publicPath = path.join(__dirname, '..', 'public');

app.get('/:slug', (req, res, next) => {
  const slug = req.params.slug;

  const publicHtml = path.join(publicPath, `${slug}.html`);
  if (fs.existsSync(publicHtml)) {
    return res.sendFile(publicHtml);
  }

  const distHtml = path.join(distPath, `${slug}.html`);
  if (fs.existsSync(distHtml)) {
    return res.sendFile(distHtml);
  }

  return next(); 
});

app.use(express.static(distPath));
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = (req, res) => {
  return app(req, res);
};