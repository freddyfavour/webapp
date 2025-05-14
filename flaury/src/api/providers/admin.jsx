import { createApiRequest } from "../helper";

const providersAdminAPI = {
    serviceApprovalProviderRequest: (id) => createApiRequest('patch', `/service-provider/admin/approval/$(id)`, {
        errorMessage: 'An error occured approving service provider request.'
    }),
    
    serviceBlockUnblockProviderRequest: (id) => createApiRequest('patch', `/service-provider/admin/block-unblock/$(id)`, {
        errorMessage: 'An error occured blocking/unblocking service provider request.'
    }),
}

export default {
    providersAdminAPI,
}