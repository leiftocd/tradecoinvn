const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const distPath = path.join(__dirname, '..', 'dist');
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(distPath));
app.use(express.static(publicPath));

app.get('/:slug', (req, res, next) => {
  const slug = req.params.slug;
  const filePath = path.join(distPath, `${slug}.html`);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  return next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = (req, res) => {
  return app(req, res);
};
