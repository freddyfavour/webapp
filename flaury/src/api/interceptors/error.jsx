const errorInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // TODO: Handle unauthorized access 
              console.log("Unauthorized access.");
              // TODO: Attempt to refresh the token.
              break;
            case 403:
              // TODO: Handle forbidden access
              console.log("Forbidden access.");
              break;
            case 404:
              // TODO: Handle not found
              console.log("Resource not found.");
              break;
            default:
              // TODO: Handle other errors
              console.log("An error occurred:", error.response.status);
          }
        }
        return Promise.reject(error);
      }
    );
  };
  
  export default errorInterceptor;