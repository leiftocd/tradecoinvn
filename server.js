/* eslint-disable no-undef */
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    ignore: [/node_modules/]
  });
  
  require('ignore-styles'); // Bỏ qua CSS khi SSR
  
  const express = require('express');
  const React = require('react');
  const ReactDOMServer = require('react-dom/server');
  
  const App = require('./src/App').default;
  
  const app = express();
  const PORT = 3000;
  
  app.use(express.static('public')); // để phục vụ JS client
  
  app.get('*', (req, res) => {
    const content = ReactDOMServer.renderToString(React.createElement(App));
  
    res.send('<!DOCTYPE html>' + content);
  });
  
  app.listen(PORT, () => {
    console.log(`SSR server đang chạy tại http://localhost:${PORT}`);
  });