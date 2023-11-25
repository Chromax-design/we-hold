import { create } from "zustand";

const savedChatroom = localStorage.getItem("chatroom");
const parsedChatroom = savedChatroom ? JSON.parse(savedChatroom) : null;

const chatStore = create((set) => ({
  chatroom: parsedChatroom,
  setChatroom: (chatroom) => {
    set((state) => ({ chatroom: (state.chatroom = chatroom) }));
  },
}));

export default chatStore;