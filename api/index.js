const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Path to dist folder (Vite build output)
const distPath = path.join(__dirname, '..', 'dist');

// Serve static files (JS, CSS, etc.) from the dist folder
app.use(express.static(distPath));

// Handle specific slugs (e.g., /Binance, /BingX, etc.)
app.get('/:slug(Binance|BingX|Hashkey|OKX|MEXC|BYBIT|BitGet|link-telegram-channel|link-telegram-support)', (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(distPath, `${slug}.html`);
  
  // Check if a specific HTML file exists for the slug
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  } else {
    // Fallback to index.html if no specific file exists
    return res.sendFile(path.join(distPath, 'index.html'));
  }
});

// For all other paths, serve index.html (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Export for Vercel serverless
module.exports.handler = serverless(app);
