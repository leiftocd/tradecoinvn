const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

app.get('/:slug(Binance|BingX|Hashkey|OKX|MEXC|BYBIT|BitGet|link-telegram-channel|link-telegram-support)', (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(distPath, `${slug}.html`);
  console.log('Looking for file:', filePath);

  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  } else {
    return res.sendFile(path.join(distPath, 'index.html'));
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = serverless(app);