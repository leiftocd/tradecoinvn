//index.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();
// Phục vụ file tĩnh từ public
const publicPath = path.join(__dirname, 'public');
console.log('Public path:', publicPath); // Debug đường dẫn
app.use(express.static(publicPath));

// Route gốc
router.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('Welcome to TradeCoinVN');
  }
});
// Redirect từ /slug.html về /slug
router.get('/:slug.html', (req, res) => {
  res.redirect(301, `/${req.params.slug}`);
});
// Route xử lý slug
router.get('/:slug', (req, res) => {
  const filePath = path.join(__dirname, 'public', `${req.params.slug}.html`);
  console.log('Checking file:', filePath); // Debug file
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not Found');
  }
});

app.use('/', router);

// Chạy local nếu không phải Vercel
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
module.exports.handler = serverless(app);