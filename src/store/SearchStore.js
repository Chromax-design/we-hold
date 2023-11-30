import { create } from "zustand";

const SearchStore = create((set) => ({
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));

export default SearchStore
