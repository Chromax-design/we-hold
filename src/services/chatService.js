import axios from "axios";
import { BASE_URL } from "../config/config";

const createChat = async (payload) => {
  const res = await axios.post(`${BASE_URL}/create_chat`, payload);
  localStorage.setItem("chatroom", JSON.stringify(res.data));

  return res.data;
};

const chatServices = {
  createChat,
};

export default chatServices;