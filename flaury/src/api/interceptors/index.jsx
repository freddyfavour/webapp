import errorInterceptor from './error';

const setupInterceptors = (axiosInstance) => {
  errorInterceptor(axiosInstance);
};

export default setupInterceptors;