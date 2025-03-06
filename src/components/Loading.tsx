/**
 * @file Loading.tsx
 * @description Componente que muestra una animación de carga en pantalla completa.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import Lottie from 'lottie-react';
import loadingJson from '../assets/loading.json';
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    }}
    >
      <Lottie animationData={loadingJson} style={{ height: '150px', width: '150px' }} />
    </Box>
  );
};

export default Loading;
