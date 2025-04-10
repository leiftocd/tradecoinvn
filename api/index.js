const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Path to dist folder (Vite build output)
const distPath = path.join(__dirname, '..', 'dist');

// Handle specific slugs (e.g., /Binance, /BingX, etc.)
app.get('/:slug(Binance|BingX|Hashkey|OKX|MEXC|BYBIT|BitGet|link-telegram-channel|link-telegram-support)', (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(distPath, `${slug}.html`);
  
  // Check if a specific HTML file exists for the slug
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // Fallback to index.html if no specific file exists
    res.sendFile(path.join(distPath, 'index.html'));
  }
});

// Export for Vercel serverless
module.exports.handler = serverless(app);