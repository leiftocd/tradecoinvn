const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http'); // express on Vercel

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, '../public')));

// Route slug
router.get('/:slug', (req, res) => {
  const filePath = path.join(__dirname, '../public', `${req.params.slug}.html`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not Found');
  }
});

app.use('/.netlify/functions/server', router);
app.use('/', router); //vercel need to work

module.exports = app;
module.exports.handler = serverless(app);
