import axios from 'axios';
import { deflate } from 'zlib';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
