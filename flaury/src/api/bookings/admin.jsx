import { createApiRequest } from "../helper";

const adminAPI = {
  getBookings: createApiRequest("get", "/bookings/bookings", {
    errorMessage: "An error occurred fetching bookings.",
  }),
};

export default {
  adminAPI,
};
