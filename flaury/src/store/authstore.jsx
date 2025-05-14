import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist ((set) => ({
  // Initial state
  isAuth: false,
  isSmallViewport: window.innerWidth <= 900,
  token: localStorage.getItem('token') || null,

  setToken: (newToken) => {
    localStorage.setItem('accessToken', newToken);
    set({ token: newToken });
  },
  
  clearToken: () => {
    localStorage.removeItem('accessToken');
    set({ token: null });
  },

  // User management
  setUser: (user) => set({ user, isAuth: true }),

  clearUser: () => set({ user: null, isAuth: false}),

  // Actions
  login: () => set({ isAuth: true }),
  logout: () => set({ isAuth: false }),
  checkViewport: (width) => set({ isSmallViewport: width <= 900 }),
})));