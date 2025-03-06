/**
 * @file characters.ts
 * @description Este archivo contiene las funciones para obtener la lista de personajes de Rick and Morty.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import api from './api';
import { CharactersResponse } from '../types/types';


export const getCharacters = async (page: number): Promise<CharactersResponse> => {
  const response = await api.get(`/character?page=${page}`);
  return response.data;
};
