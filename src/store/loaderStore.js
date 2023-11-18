import { create } from "zustand";

const useLoader = create((set) => ({
  Loader: false,
  setLoader: (bool) => set(() => ({ Loader: bool })),
}));

export default useLoader;
