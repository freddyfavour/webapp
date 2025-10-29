import { useAuthStore } from '../store/authStore';

const authInterceptor = (axiosInstance) => {
  const token = useAuthStore.getState().token;

  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default authInterceptor;