import axios from 'axios';
import setupInterceptors from './interceptors';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log("API Client Base URL: ", import.meta.env.VITE_API_BASE_URL);

// Set up interceptors
setupInterceptors(apiClient);

export default apiClient;