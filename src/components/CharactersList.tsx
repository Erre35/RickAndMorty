/**
 * @file CharactersList.tsx
 * @description Componente que muestra una lista de personajes de Rick and Morty.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { CharactersListProps } from '../types/types';
import CharacterCard from './CharacterCard';

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        marginTop: '50px',
      }}
    >
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
