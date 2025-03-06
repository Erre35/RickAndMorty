/**
 * @file types.ts
 * @description Este archivo contiene los tipos de datos e interfaces utilizados en la aplicación.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */


export interface State {
  characters: Character[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

export type Action =
  | { type: 'FETCH_START' }
  | {
      type: 'FETCH_SUCCESS';
      payload: { characters: Character[]; totalPages: number };
    }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_PAGE'; payload: number };

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export interface CharactersListProps {
  characters: Character[];
}

export interface CharacterCardProps {
  character: Character;
}

export interface CharactersResponse {
  results: Character[];
  info: {
    pages: number;
  };
}
