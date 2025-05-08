import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const reviewCreate = async (data) => {
    try {
        const response = await api.post(`/services/review`, data);
        return response.data;
    } catch (err) {
        console.log("Error creating review: ", err);
        toast.error("Error creating review: ", err);
    }
}

const getReviews = async (id) => {
    try {
        const response = await api.get(`/services/reviews/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error fetching reviews: ", err);
        toast.error("Error fetching reviews: ", err);
    }
}

export default {
    reviewCreate,
    getReviews,
}