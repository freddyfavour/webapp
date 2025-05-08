import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const deletLoggedUser = async () => {
    try {
        const response = await api.delete('/users/delete');
        return response.data;
    } catch (err) {
        console.log("Error deleting user: ", err);
        toast.error("Error deleting user: ", err);
    }
}

const getLoggedUser = async () => {
    try {
        const response = await api.get('/users/profile');
        return response.data;
    } catch (err) {
        console.log("Error fetching user: ", err);
        toast.error("Error fetching user: ", err);
    }
}

const updateLoggedUser = async (data) => {
    try {
        const response = await api.patch('/users/update', data);
        return response.data;
    } catch (err) {
        console.log("Error updating user: ", err);
        toast.error("Error updating user: ", err);
    }
}

export default {
    deletLoggedUser,
    getLoggedUser,
    updateLoggedUser,
}