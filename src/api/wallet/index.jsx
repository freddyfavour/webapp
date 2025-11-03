import { createApiRequest } from "../helper";

const walletAPI = {
    addFunds: createApiRequest('post', '/wallet/add-funds', {
        errorMessage: 'An error occurred while adding funds.'
    }),

    getBalance: createApiRequest('get', '/wallet/balance', {
        errorMessage: 'An error occurred while fetching balance.'
    }),

    getTransactions: createApiRequest('get', '/wallet/transactions', {
        errorMessage: 'An error occurred while fetching transactions.'
    }),

    withdrawFunds: createApiRequest('post', '/wallet/withdraw', {
        errorMessage: 'An error occurred while withdrawing funds.'
    })
}

export default {
    walletAPI,
}