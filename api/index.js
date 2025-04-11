const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const distPath = path.join(__dirname, '..', 'dist');
const publicPath = path.join(__dirname, '..', 'public');

app.get('/:slug', (req, res, next) => {
  const slug = req.params.slug;

  const publicHtml = path.join(publicPath, `${slug}.html`);
  const distHtml = path.join(distPath, `${slug}.html`);

  if (fs.existsSync(publicHtml)) {
    return res.sendFile(publicHtml);
  }

  if (fs.existsSync(distHtml)) {
    return res.sendFile(distHtml);
  }

  return next();
});

app.get('/public/:file', (req, res) => {
  const filePath = path.join(publicPath, req.params.file);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  return res.status(404).send('File not found');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = (req, res) => {
  return app(req, res);
};
