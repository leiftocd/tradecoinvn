const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const distPath = path.join(__dirname, '..', 'dist');
const publicPath = path.join(__dirname, '..', 'public');

// Serve static files
app.use(express.static(distPath));
app.use(express.static(publicPath));

// Slug-specific HTML files
app.get('/:slug(Binance|BingX|Hashkey|OKX|MEXC|BYBIT|BitGet|link-telegram-channel|link-telegram-support)', (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(distPath, `${slug}.html`);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  } else {
    return res.sendFile(path.join(distPath, 'index.html'));
  }
});

// Fallback to SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ✅ Export app directly for Vercel (this is key)
module.exports = app;
