import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.body.className = localStorage.getItem('mode') || 'light';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
