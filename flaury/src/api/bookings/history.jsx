import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const getBookingsHistory = async () => {
    try {
        const response = await api.get('/bookings/bookings/history');
        return response.data;
    } catch (err) {
        console.log("Error fetching data: ", err);
        toast.error("Error fetching data: ", err);
    }
}

export default {
    getBookingsHistory,
}