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
      {loading && <Loading />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && (
        <>
          <Typography
            variant="h2"
            style={{ marginTop: '50px', marginBottom: '50px', color: '#000', fontSize: '45px' }}
          >
            Personajes {' '}
            <Typography
              variant="h2"
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#131347',
                textShadow: '2px 2px 10px rgba(151, 206, 76, 0.8)',
                fontFamily: 'Bangers',
              }}
            >
              Rick and Morty
            </Typography>
          </Typography>

          <CharactersList characters={characters} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default Home;
