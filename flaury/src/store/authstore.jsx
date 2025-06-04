import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    // Initial state
    isAuth: false,
    isSmallViewport: window.innerWidth <= 900,
    token: localStorage.getItem("token") || null,

    // Registration flow state
    registrationType: null,
    currentStep: 1,
    totalSteps: 1,
    registrationData: {
      // Step 1
      email: "",
      gender: "",
      name: "",
      password: "",
      phone_number: "",
      role: "",
      type_of_service: "",
      username: "",

      // Step 2
      // TODO: Set up correct fields.
      address: {
        building_number: "",
        city: "",
        country: "",
        postal_code: "",
        state: "",
        street: "",
      },
      availability: {
        days: [],
        end_time: "",
        start_time: "",
      },
      brand_contact: "",
      brand_email: "",
      brand_logo: "",
      brand_name: "",
    },

    // Token management
    setToken: (newToken) => {
      localStorage.setItem("accessToken", newToken);
      set({ token: newToken });
    },

    clearToken: () => {
      localStorage.removeItem("accessToken");
      set({ token: null });
    },

    // User management
    setUser: (user) => set({ user, isAuth: true }),
    clearUser: () => set({ user: null, isAuth: false }),

    // Registration Process actions
    initRegistration: (type) => {
      const totalSteps = type === "customer" ? 1 : 4;
      set({
        registrationType: type,
        currentStep: 1,
        totalSteps: totalSteps,
        registrationData: {
          // Step 1
          email: "",
          gender: "",
          name: "",
          password: "",
          phone_number: "",
          role: "",
          type_of_service: "",
          username: "",

          // Step 2
          // TODO: Set up correct fields.
          address: {
            building_number: "",
            city: "",
            country: "",
            postal_code: "",
            state: "",
            street: "",
          },
          availability: {
            days: [],
            end_time: "",
            start_time: "",
          },
          brand_contact: "",
          brand_email: "",
          brand_logo: "",
          brand_name: "",
        },
      });
    },

    updateRegistrationData: (data) => {
      set((state) => ({
        registrationData: {
          ...state.registrationData,
          ...data,
        },
      }));
    },

    nextStep: () => {
      const { currentStep, totalSteps } = get();
      if ((currentStep, totalSteps)) {
        set({ currentStep: currentStep + 1 });
        return true;
      }
      return false;
    },

    prevStep: () => {
      const { currentStep } = get();
      if (currentStep > 1) {
        set({ currentStep: currentStep - 1 });
      }
    },

    resetRegistration: () => {
      set({
        registrationType: null,
        currentStep: 1,
        totalSteps: 1,
        registrationData: {
          // Step 1
          email: "",
          gender: "",
          name: "",
          password: "",
          phone_number: "",
          role: "",
          type_of_service: "",
          username: "",

          // Step 2
          // TODO: Set up correct fields.
          address: {
            building_number: "",
            city: "",
            country: "",
            postal_code: "",
            state: "",
            street: "",
          },
          availability: {
            days: [],
            end_time: "",
            start_time: "",
          },
          brand_contact: "",
          brand_email: "",
          brand_logo: "",
          brand_name: "",
        },
      });
    },

    // Actions
    login: () => set({ isAuth: true }),
    logout: () => set({ isAuth: false }),
    checkViewport: (width) => set({ isSmallViewport: width <= 900 }),
  }))
);
