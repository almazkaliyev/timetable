import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#aa00ff'
    }
  },
  typography: {
    h6: {
      lineHeight: '1.5rem',
    },
    subtitle2: {
      color: 'rgba(255, 255, 255, 0.68)',
    },
    body2: {
      color: 'rgba(255, 255, 255, 0.68)',
    }
  }
});

export default theme