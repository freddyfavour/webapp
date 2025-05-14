import { createApiRequest } from "../helper";

const paymentsAPI = {
    confirmPayment: (id) => createApiRequest('post', `/bookings/pay/$(id)`, {
        errorMessage: 'An error occured confirming payment.'
    })
}

export default {
    paymentsAPI,
}