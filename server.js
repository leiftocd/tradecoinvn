// server.jsx (giả sử dùng Express)
import express from 'express';
import fs from 'fs'
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { seoData } from './src/seoData.js';
const app = express();
app.get('*', (req, res) => {
  const slug = req.path.split('/').pop();
  const meta = seoData[slug] || {
    title: 'Trang chủ - TRADECOINVN',
    description: 'Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư.',
    image: '/logotitle.png'
  };
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App meta={meta} />
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  let html = fs.readFileSync('./dist/index.html', 'utf8');
  html = html
    .replace('<!--ssr-head-->', `${helmet.title.toString()}${helmet.meta.toString()}`)
    .replace('<!--ssr-body-->', appHtml);

  res.send(html);
});