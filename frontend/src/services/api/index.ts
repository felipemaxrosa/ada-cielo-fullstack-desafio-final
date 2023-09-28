import axios from 'axios';

import { API_URL } from '../constants/services-url';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
