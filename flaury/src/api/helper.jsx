import apiClient from "./axiosConfig";

const createApiRequest = (method, endpoint, options = {}) => {
  const { errorMessage = "Error" } = options;

  return async (data = null, config = {}) => {
    try {
      let response;

      switch (method.toLowerCase()) {
        case "get":
          response = await apiClient.get(endpoint, {
            ...config,
            params: data && typeof data === "object" ? data : {},
          });
          console.log(await response.data);
          break;

        case "post":
          response = await apiClient.post(endpoint, data, config);
          break;

        case "put":
          response = await apiClient.put(endpoint, data, config);
          break;

        case "patch":
          response = await apiClient.patch(endpoint, data, config);
          break;

        case "delete":
          response = await apiClient.delete(endpoint, {
            ...config,
            data: data,
          });
          break;

        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const status = error.response?.status;
      const message =
        error.response?.data?.message ||
        error.message ||
        `${errorMessage} failed`;

      // console.error(`API Error (${endpoint}):`, error);

      return {
        success: false,
        error: {
          status,
          message,
          originalError: error,
        },
      };
    }
  };
};

export { createApiRequest };
