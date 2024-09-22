import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'React with Webpack and Babel - this code is from index.js';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();