import axios from 'axios';
import { API_DOMAIN, API_MAIN } from '../constants/api';

export const api = axios.create({
  baseURL: API_DOMAIN,
});

export const apiMain = axios.create({
  baseURL: API_MAIN,
});
