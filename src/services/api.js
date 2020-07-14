import axios from 'axios';
import { API_DOMAIN } from '../constants/api';

export const api = axios.create({
  baseURL: API_DOMAIN,
});
