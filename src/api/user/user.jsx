import { createApiRequest } from "../helper";

const userAPI = {
    deletLoggedUser: createApiRequest('delete', '/users/delete', {
        errotMessage: 'An error occured deleting user.'
    }),

    getLoggedUser: createApiRequest('get', '/users/profile', {
        errorMessage: 'An error occured fetching user.'
    }),

    updateLoggedUser: createApiRequest('patch', '/users/update', {
        errorMessage: 'An error occured updating user.'
    })
}

export default {
    userAPI,
}