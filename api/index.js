// index.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Đường dẫn thư mục build từ Vite
const distPath = path.join(__dirname, '..', 'dist');
const publicPath = path.join(__dirname, 'public');

// Serve static files từ React (dist) và từ public (ảnh, css phụ)
app.use(express.static(distPath));
app.use(express.static(publicPath));

// Route gốc: trả về React app (index.html của Vite)
router.get('/', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('App is not built yet.');
  }
});

// Redirect từ /slug.html → /slug (cho đẹp URL)
router.get('/:slug.html', (req, res) => {
  res.redirect(301, `/${req.params.slug}`);
});

// Route xử lý slug (VD: /btc, /eth, ...) → trả về file public/btc.html nếu có
router.get('/:slug', (req, res, next) => {
  const filePath = path.join(publicPath, `${req.params.slug}.html`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    next(); // Không có thì để React xử lý route tiếp theo
  }
});

// Fallback cho React Router SPA (Vite)
router.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.use('/', router);

// Local run
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
module.exports.handler = serverless(app);
