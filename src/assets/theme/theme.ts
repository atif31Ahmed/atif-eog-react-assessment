import { createTheme } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          backgroundColor: '#282c4f',
          width: '5px',
          height: '5px',
        },

        '*::-webkit-scrollbar-track': {
          backgroundColor: '#282c4f',
        },

        '*::-webkit-scrollbar-track:hover': {
          backgroundColor: '#283F5E',
        },

        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#babac0',
          borderRadius: '16px',
          border: '5px, solid ,inherit',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          // backgroundColor: "##283F5E",
          border: '4px, solid, #283F5E',
        },
        '*::-webkit-scrollbar-button': {
          display: 'none',
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#d7617b',
      light: '#6057a3',
    },
    secondary: {
      main: '#369fd2',
      light: '#e89f5e',
    },
    background: {
      paper: '#383e6e',
    },
  },
});
export default theme;
