import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

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
    },
    error: {
      main: red[500]
    },
    typography: {
      fontSize: 8,
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme