import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const serviceApprovalProviderRequest = async (id, data) => {
    try {
        const response = await api.patch(`/service-provider/admin/approval/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error approving service provider request: ", err);
        toast.error("Error approving service provider request: ", err);
    }
}

const serviceBlockUnblockProviderRequest = async (id, data) => {
    try {
        const response = await api.patch(`/service-provider/admin/block-unblock/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error blocking/unblocking service provider request: ", err);
        toast.error("Error blocking/unblocking service provider request: ", err);
    }
}

export default {
    serviceApprovalProviderRequest,
}