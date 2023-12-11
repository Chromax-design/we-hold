import { create } from "zustand";

const checkOutStore = create((set) => ({
  checkOut: {},
  setCheckOut: (data) => set({ checkOut: data }),
}));

export default checkOutStore