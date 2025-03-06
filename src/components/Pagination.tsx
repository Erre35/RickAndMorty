/**
 * @file Pagination.tsx
 * @description Componente que muestra la paginación de la lista de personajes de Rick and Morty, pagina actual y paginas totales.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { Button, Typography } from '@mui/material';
import { PaginationProps } from '../types/types';

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return (
    <div style={{ margin: '30px' }}>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Anterior
      </Button>
      <Typography>{`Página ${page} de ${totalPages}`}</Typography>
      <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Siguiente
      </Button>
    </div>
  );
};

export default Pagination;
