import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const deleteService = async (id) => {
    try {
        const response = async () => await api.delete(`/services/delete/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error deleting service provider: ", err);
        toast.error("Error deleting service provider: ", err);
    }
}

const approveDeclineService = async (id) => {
    try {
        const response = async () => await api.patch(`/services/status/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error approving service provider request: ", err);
        toast.error("Error approving service provider request: ", err);
    }
}

const toggleServiceStatus = async (id) => {
    try {
        const response = async () => await api.patch(`/services/toggle-status/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error toggling service status: ", err);
        toast.error("Error toggling service status: ", err);
    }
}

const createService = async (data) => {
    try {
        const response = async () => await api.post(`/services/users/create/service`, data);
        return response.data;
    } catch (err) {
        console.log("Error creating service: ", err);
        toast.error("Error creating service: ", err);
    }
}

const fetchServices = async () => {
    try {
        const response = async () => await api.get(`/services/users/services`);
        return response.data;
    } catch (err) {
        console.log("Error fetching services: ", err);
        toast.error("Error fetching services: ", err);
    }
}

export default {
    deleteService,
    approveDeclineService,
    toggleServiceStatus,
    createService,
    fetchServices,
}