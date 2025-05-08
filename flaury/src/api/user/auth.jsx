import api from '../axiosConfig';
import { toast} from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const authCheck = async () => {
    try {
        const response = await api.get('/users/auth-check');
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const forgotPassword = async (data) => {
    try {
        const response = await api.post('/users/forgot-password', data);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const login = async (credentials) => {
    try {
        const response = await api.post('/users/login', credentials);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const logout = async () => {
    try {
        const response = await api.post('/users/logout');
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const refreshToken = async () => {
    try {
        const response = await api.post('/users/refresh');
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const register = async (data) => {
    try {
        const response = await api.post('/users/register', data);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const resendVerification = async (data) => {
    try {
        const response = await api.post('/users/resend-verification', data);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const resetPassword = async (data) => {
    try {
        const response = await api.post('/users/reset-password', data);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

const verifyEmail = async (data) => {
    try {
        const response = await api.post('/users/verify-email', data);
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
};

export default {
    authCheck,
    forgotPassword,
    login,
    logout,
    refreshToken,
    register,
    resendVerification,
    resetPassword,
    verifyEmail
};