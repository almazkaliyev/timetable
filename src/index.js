import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

document.body.className = localStorage.getItem('mode') || 'light';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
