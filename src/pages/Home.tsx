/**
 * @file Home.tsx
 * @description Este archivo contiene la pagina principal Home, que muestra la lista de personajes de Rick and Morty.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { useCharacters } from '../hooks/useCharacters';
import CharactersList from '../components/CharactersList';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import { Typography } from '@mui/material';

const Home = () => {
  const { characters, loading, error, page, totalPages, setPage } =
    useCharacters();

  return (
    <div>
      <Typography variant="h2" sx={{ marginTop: '50px', marginBottom: '50px' }}>
        Personajes de Rick and Morty
      </Typography>

      {loading && <Loading />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && (
        <>
          <CharactersList characters={characters} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default Home;
