const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const distPath = path.join(__dirname, '..', 'dist'); // adjust if needed

// Serve static files (JS, CSS, etc.)
app.use(express.static(distPath));

// Fallback: React handles the routing
router.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.use('/', router);

module.exports = app;
module.exports.handler = serverless(app);