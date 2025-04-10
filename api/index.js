const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Path to dist folder (Vite build output)
const distPath = path.join(__dirname, '..', 'dist');

// Optional: Dynamic slug handling (e.g., /btc, /eth)
app.get('/:slug', (req, res) => {
  const filePath = path.join(distPath, `${req.params.slug}.html`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // Fallback to index.html for React Router
    res.sendFile(path.join(distPath, 'index.html'));
  }
});

// Export for Vercel serverless
module.exports.handler = serverless(app);