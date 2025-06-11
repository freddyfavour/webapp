import { createApiRequest } from "../helper";

const providersAPI = {
    serviceProviderGet: (id) => createApiRequest('get', `/service-provider/users/view/service/providers/$(id)`, {
        errorMessage: 'An error occured fetching service provider.'
    }),

    ser
}

const serviceProviderDelete = async (id) => {
    try {
        const response = await api.delete(`/service-provider/delete/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error deleting service provider: ", err);
        toast.error("Error deleting service provider: ", err);
    }
}

const serviceProviderCreate = async (data) => {
    try {
        const response = await api.post(`/service-provider/users/create`, data);
        return response.data;
    } catch (err) {
        console.log("Error creating service provider: ", err);
        toast.error("Error creating service provider: ", err);
    }
}

const serviceProviderDeactivate = async (id) => {
    try {
        const response = await api.patch(`/service-provider/deactivate/${id}`);
        return response.data;
    } catch (err) {
        console.log("Error deactivating service provider: ", err);
        toast.error("Error deactivating service provider: ", err);
    }
}

const serviceProviderUpdate = async (id, data) => {
    try {
        const response = await api.patch(`/service-provider/users/update/${id}`, data);
        return response.data;
    } catch (err) {
        console.log("Error updating service provider: ", err);
        toast.error("Error updating service provider: ", err);
    }
}

const serviceProviderGet = async () => {
    try {
        const response = await api.get(`/service-provider/users/view/service/providers`);
        return response.data;
    } catch (err) {
        console.log("Error fetching service providers: ", err);
        toast.error("Error fetching service providers: ", err);
    }
}

export default {
    serviceProviderDelete,
    serviceProviderCreate,
    serviceProviderDeactivate,
    serviceProviderUpdate,
    serviceProviderGet,
}