import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const confirmPayment = async (id, data) => {
    try {
        const response = await api.post(`/bookings/pay/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error confirming payment: ", err);
        toast.error("Error confirming payment: ", err);
    }
}

export default {
    confirmPayment,
}