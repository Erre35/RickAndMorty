/**
 * @file index.tsx
 * @description Punto de entrada de la aplicación React. Renderiza el componente principal `<App />` dentro del árbol DOM 
 * utilizando `ReactDOM.createRoot`. Se proporciona un `ThemeProvider` con el tema de Material-UI y `CssBaseline` 
 * para normalizar los estilos.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';
import '@fontsource/bangers';
import { ThemeProvider, CssBaseline } from '@mui/material';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
