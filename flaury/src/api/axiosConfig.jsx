import axios from 'axios';
import setupInterceptors from './interceptors';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set up interceptors
setupInterceptors(api);

export default apiClient;