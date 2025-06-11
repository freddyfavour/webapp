import { createApiRequest } from "../helper";

const bookingsIndexAPI = {
    createBooking: createApiRequest('post', '/bookings/create', {
        errorMessage: 'An error occured creating booking.'
    }),

    deleteBooking: (id) => createApiRequest('delete', `/bookings/delete/$(id)`, {
        errorMessage: 'An error occured deleting booking.'
    }),

    updateBooking: (id) => createApiRequest('put', `/bookings/update/$(id)`, {
        errorMessage: 'An error occured updating booking.'
    }),
}

export default {
    bookingsIndexAPI,
};