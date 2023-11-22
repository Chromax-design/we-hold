import axios from "axios";
import { BASE_URL } from "../config/config";

const getMessages = async (chatId) => {
  const res = await axios.get(`${BASE_URL}/get_messages/${chatId}`);
  return res.data;
};

const sendMessage = async (payload) => {
  const res = await axios.post(`${BASE_URL}/send_message`, payload);
  return res.data;
};

const messageServices = {
  getMessages,
  sendMessage,
};

export default messageServices;
