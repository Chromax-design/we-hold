import { create } from "zustand";

const savedUser = JSON.parse(localStorage.getItem("user"));

const useAuth = create((set) => ({
  user: savedUser ? savedUser : null,

  login: (userData) => {
    set((state) => ({
      user: (state.user = userData),
    }));
  },

  setUser: (userData) => {
    set((state) => ({
      user: (state.user = userData),
    }));
  },

  logout: () => {
    localStorage.removeItem("user");
    set((state) => ({
      user: (state.user = null),
    }));
  },
}));

export default useAuth;
