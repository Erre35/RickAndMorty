/**
 * @file api.ts
 * @description Este archivo contiene la configuración de la API (Axios) de Rick and Morty.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;
