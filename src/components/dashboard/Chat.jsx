import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { socket } from "../../config/socket";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import messageServices from "../../services/messageServices";
import useAuth from "../../store/AuthStore";
import chatStore from "../../store/ChatStore";
import MessageCard from "./MessageCard";
import MessageHeader from "./MessageHeader";

import Input from "./Input";
import useLoader from "../../store/loaderStore";
import PreLoader from "../PreLoader";

const Chat = () => {
  const { Loader, setLoader } = useLoader();
  const { user } = useAuth();
  const { chatroom } = chatStore((state) => state);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);
  const [messages, setMessages] = useState([]);

  const room = chatroom[0];
  const url =
    user.role == "mentor" ? `${BASE_URL}/mentee/` : `${BASE_URL}/mentor/`;

  useEffect(() => {
    const getMentors = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setUsers(data.mentors);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };

    getMentors();
  }, []);

  const filteredUsers = users.filter((otherUser) => otherUser.id != user.id);
  const receiver = filteredUsers.find(
    (otherUser) =>
      otherUser.id == room.participantA || otherUser.id == room.participantB
  );
  const getMessages = async () => {
    const messages = await messageServices.getMessages(room.roomId);
    setMessages(messages);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleDocChange = (e) => {
    const file = e.target.files[0];
    setDocument(file);
  };

  const sendMessage = async () => {
    const payload = {
      author: user.firstName,
      roomId: room.roomId,
      message: message,
      sender: room.participantA,
      receiver: room.participantB,
      imgFileName: null,
      docOriginalName: null,
      docfileName: null,
    };

    if (message.trim() !== "") {
      socket.emit("send_message", payload);
    }

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const { data } = await axios.post(
          `${BASE_URL}/chat/uploadImg`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        payload.imgFileName = data.fileName;
        socket.emit("send_message", payload);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    if (document) {
      const formData = new FormData();
      formData.append("pdf", document);

      try {
        const { data } = await axios.post(
          `${BASE_URL}/chat/upload-pdf`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        payload.docOriginalName = data.originalName;
        payload.docfileName = data.fileName;
        socket.emit("send_message", payload);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    await messageServices.sendMessage(payload);
    socket.emit("create_chatroom", room.roomId);
    setMessage("");
    setImage(null);
  };

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on("message_sent", receiveMessage);

    return () => {
      socket.off("message_sent", receiveMessage);
    };
  }, [socket]);

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {Loader && <PreLoader />}
      <main className="bg-gray-50 p-1 sm:p-4">
        <section className="max-w-6xl mx-auto p-1 sm:px-4 py-7 ">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-md shadow-md relative h-[650px]">
              <MessageHeader receiver={receiver} />
              <div className="h-[calc(100%-120px)] bg-gray-100 overflow-y-scroll overflow-x-hidden py-6 px-4 space-y-3 flex flex-col messageCard">
                <ScrollToBottom className="w-full h-full messageCard">
                  {messages.map((message, index) => (
                    <MessageCard user={user} message={message} key={index} />
                  ))}
                </ScrollToBottom>
              </div>
              <Input
                message={message}
                setMessage={setMessage}
                handleImageChange={handleImageChange}
                handleDocChange={handleDocChange}
                sendMessage={sendMessage}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Chat;
