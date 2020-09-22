import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5f074b869c5c250016306cbf.mockapi.io/api/v1',
});

export default api;
