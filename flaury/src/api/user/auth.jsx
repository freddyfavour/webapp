import { createApiRequest } from '../helper';

const authAPI = {
    authCheck: createApiRequest('get', '/users/auth-check', {
        errorMessage: 'An error occured fetching auth check.'
    }),

    forgotPassword: createApiRequest('post', '/users/forgot-password', {
        errorMessage: 'An error occured fetching forgot password.'
    }),

    login: createApiRequest('post', '/users/login', {
        errorMessage: 'An error occured Logining in.'
    }),

    logout: createApiRequest('post', '/users/logout', {
        errorMessage: 'An error occured Logining out.'
    }),
    
    refreshToken: createApiRequest('post', '/users/refresh', {
        errorMessage: 'An error occured refreshing token.'
    }),
    
    resendVerification: createApiRequest('post', '/users/resend-verification', {
        errorMessage: 'An error occured Resending verification.'
    }),

    register: createApiRequest('post', '/users/register', {
        errorMessage: 'An error occured Registering.'
    }),

    resetPassword: createApiRequest('post', '/users/reset-password', { 
        errorMessage: 'An error occured Resetting password.'
    }),

    verifyEmail: createApiRequest('post', '/users/verify-email', {
        errorMessage: 'An error occured Verifying email.'
    }),
}

// const login = async (credentials) => {
//     try {
//       const response = await apiClient.post('/users/login', credentials);
//       return {
//         success: true,
//         data: response.data
//       };
//     } catch (error) {
//       const status = error.response?.status;
//       const message = error.response?.data?.message || error.message || "Login failed";
      
//       return {
//         success: false,
//         error: {
//           status,
//           message
//         }
//       };
//     }
//   };


export default {
    authAPI,
};