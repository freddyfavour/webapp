import { createApiRequest } from "../helper";

const servicesAPI = {
    deleteService: (id) => createApiRequest('delete', `/services/delete/${id}`, {
        errorMessage: 'An error occured deleting '
    }),

    approveDeclineService: (id) => createApiRequest('patch', `/services/status/${id}`, {
        errorMessage: 'An error occured changing approval of service.'
    }),

    toggleServiceStatus: (id) => createApiRequest('patch', `/services/toggle-status/${id}`, {
        errorMessage: 'An error occured toggling service status.'
    }),

    createService: (id) => createApiRequest('post', `/services/users/create/service`, {
        errorMessage: 'An error occured creating a service.'
    }),

    fetchServices: (id) => createApiRequest('get', '/services/users/services', {
        errorMessage: 'An error occured fetching services.'
    })
}

export default {
    servicesAPI,
}