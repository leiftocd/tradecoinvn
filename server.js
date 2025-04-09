import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import fs from 'fs';
import path from 'path';
import App from '../src/App.jsx';

const app = express();
const PORT = 3000;
const template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8');

app.use(express.static(path.resolve('dist/client')));

app.get('*', async (req, res) => {
    const helmetContext = {};
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  
    const appHtml = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={req.url}>
          <App url={fullUrl} />
        </StaticRouter>
      </HelmetProvider>
    );
  
    const cssFile = fs.readdirSync(path.resolve('dist/client/assets'))
  .find(file => file.endsWith('.css'));

const cssLink = `<link rel="stylesheet" href="/assets/${cssFile}">`;
    const { helmet } = helmetContext;
  
    const helmetHead = `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `;
  
    const html = template
    .replace('%helmet-head%', `${cssLink}\n${helmetHead}`)
    .replace('<!--app-html-->', appHtml);
  
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  });

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
