import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const adminDeleteUser = async (id) => {
    try {
        const response = await api.delete(`/users/delete/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error deleting user: ", err);
        toast.error("Error deleting user: ", err);
    }
}

const adminUpdateUserRole = async (id, data) => {
    try {
        const response = await api.patch(`/users/role/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error updating user role: ", err);
        toast.error("Error updating user role: ", err);
    }
}

const adminBanUser = async (id) => {
    try {
        const response = await api.patch(`/users/status/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error banning user: ", err);
        toast.error("Error banning user: ", err);
    }
}

const adminGetUsers = async () => {
    try {
        const response = await api.get(`/users/users`);
        return response.data;
    } catch (err) {
        console.log("Error fetching users: ", err);
        toast.error("Error fetching users: ", err);
    }
}

export default {
    adminDeleteUser,
    adminUpdateUserRole,
    adminBanUser,
    adminGetUsers,
}