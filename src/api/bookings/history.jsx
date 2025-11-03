import { createApiRequest } from '../helper';

const bookingsHistoryAPI = {
    getBookingHistory: createApiRequest('get', '/bookings/bookings/history', {
        errorMessage: 'An error occurred fetching booking history.'
    })
}

export default {
    bookingsHistoryAPI,
}