import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#aa00ff',
      light: '#e254ff',
      dark: '#7200ca',
    },
  },
  typography: {
    htmlFontSize: 18,
    h6: {
      lineHeight: '1.5rem',
    },
    subtitle2: {
      color: 'rgba(255, 255, 255, 0.68)',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
