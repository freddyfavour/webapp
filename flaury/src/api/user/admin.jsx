import { createApiRequest } from "../helper";

const userAdminAPI = {
    adminDeleteUser: (id) => createApiRequest('delete', `/users/delete/${id}`, {
        errorMessage: 'An error occured deleting user.'
    }),

    adminUpdateUserRole: (id) => createApiRequest('patch', `/users/role/${id}`, {
        errorMessage: 'An error occured updating user role.'
    }),

    adminBanUser: (id) => createApiRequest('patch', `/users/status/${id}`, {
        errorMessage: 'An error occured banning user.'
    }), 

    adminGetUsers: createApiRequest('get', '/users/users', {
        errorMessage: 'An error occured getting users.'
    })
}

export default {
    userAdminAPI,
}