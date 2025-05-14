import { createApiRequest } from "../helper";

const reviewAPI = {
    reviewCreate: createApiRequest('post', 'services/review', {
        errorMessage: "An error occured creating review."
    }),

    getReviews: (id) => createApiRequest('get', `/services/reviews/${id}`, {
        errorMessage: "An error occured fetching reviews."
    })
}

export default {
    reviewAPI,
}