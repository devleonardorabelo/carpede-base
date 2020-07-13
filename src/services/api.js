import axios from 'axios';
import { API_DOMAIN } from '../constants/api';

export const api = axios.create({
  baseURL: API_DOMAIN,
});

export const apiMain = axios.create({
  baseURL: 'http://192.168.25.139:21022', // https://carpede-negocios.herokuapp.com',
});
