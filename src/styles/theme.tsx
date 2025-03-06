/**
 * @file theme.tsx
 * @description Este archivo contiene la configuración del tema (Material UI) y estilos de la aplicación.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Bangers', Inter, Avenir, Helvetica, Arial, sans-serif",
    body1: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: '#020917',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundImage: 'linear-gradient(80deg, #5a882f 30%, #01708a 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);