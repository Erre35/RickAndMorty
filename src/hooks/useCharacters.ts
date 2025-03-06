/**
 * @file useCharacters.ts
 * @description Custom hook que maneja la lógica de obtención y el estado de los personajes de Rick and Morty.
 * Utiliza `useReducer` para gestionar los estados de personajes, loading, error, paginación y sus respectivas acciones.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import { useEffect, useReducer } from 'react';
import { getCharacters } from '../services/characters';
import { Action, State } from '../types/types';

const initialState: State = {
  characters: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        characters: action.payload.characters,
        totalPages: action.payload.totalPages,
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const useCharacters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch({ type: 'FETCH_START' });

      setTimeout(async () => {
        try {
          const data = await getCharacters(state.page);
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: { characters: data.results, totalPages: data.info.pages },
          });
        } catch (error) {
          dispatch({
            type: 'FETCH_ERROR',
            payload: 'Error al cargar los personajes',
          });
        }
      }, 2000);
    };

    fetchCharacters();
  }, [state.page]);

  return {
    ...state,
    setPage: (page: number) => dispatch({ type: 'SET_PAGE', payload: page }),
  };
};
