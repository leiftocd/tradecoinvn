// api/server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Redirect từ /slug.html về /slug
app.get('/:slug.html', (req, res) => {
  res.redirect(301, `/${req.params.slug}`);
});

// Route xử lý slug không cần .html
app.get('/:slug', (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'public', `${req.params.slug}.html`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    next();
  }
});
// Serve static assets
// app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Xuất app cho Vercel
module.exports = app;