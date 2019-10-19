import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6a1b9a',
      light: '#9c4dcc',
      dark: '#38006b'
    },
    secondary: {
      main: '#aa00ff',
      light: '#e254ff',
      dark: '#7200ca'
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme