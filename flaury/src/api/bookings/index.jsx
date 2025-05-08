import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const createBooking = async (data) => {
    try {
        const response = await api.post('/bookings/create', data);
        return response.data;
    } catch (err) {
        console.log("Error creating booking: ", err);
        toast.error("Error creating booking: ", err);
    }
};

const deleteBooking = async (id) => {
    try {
        const response = await api.delete(`/bookings/delete/${id}`);
        return response.data;
    } catch(err) {
        console.log("Error deleting booking: ", err);
        toast.error("Error deleting booking: ", err);
    }
};

const updateBooking = async (id, data) => {
    try {
        const response = await api.put(`/bookings/update/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error updating booking: ", err);
        toast.error("Error updating booking: ", err);
    }
};

export default {
    createBooking,
    deleteBooking,
    updateBooking,
};