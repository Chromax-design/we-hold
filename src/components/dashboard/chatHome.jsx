import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import talk from "../../assets/letschat.svg";
import useAuth from "../../store/AuthStore";
import chatStore from "../../store/ChatStore";
import chatServices from "../../services/chatService";
import { socket } from "../../config/socket";
import { BASE_URL } from "../../config/config";
import axios from "axios";
// import userimg from "../../assets/mentors/mentor-3.jpg";

const ChatHome = () => {
  const { user } = useAuth();
  const { setChatroom } = chatStore((state) => state);
  const [users, setUsers] = useState([]);
  const [aside, setAside] = useState(true);

  const handleClick = () => {
    setAside(!aside);
  };

  const url =
    user.role == "mentee" ? `${BASE_URL}/mentor/` : `${BASE_URL}/mentee/`;

  useEffect(() => {
    try {
      const getMentors = async () => {
        const { data } = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setUsers(data.mentors);
      };
      getMentors();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const filteredUsers = users.filter((otherUser) => otherUser.id !== user.id);
  const navigate = useNavigate();

  const createChatroom = async (otherUser) => {
    const payload = {
      roomId: [user.id, otherUser.id].sort().join(""),
      participantA: user.id,
      participantB: otherUser.id,
    };

    const chatroom = await chatServices.createChat(payload);
    socket.emit("create_chatroom", chatroom[0].roomId);
    setChatroom(chatroom);
  };

  useEffect(() => {
    socket.on("chatroom_created", () => {
      navigate(`/${user.role}/dashboard/chatRoom`);
    });
  }, [socket, navigate]);

  return (
    <main className="bg-gray-50 p-4">
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="grid gap-4 grid-cols-12">
          <div
            className={`${
              aside
                ? "max-md:col-span-12 col-span-4 lg:col-span-3 bg-white rounded-md shadow-md overflow-hidden"
                : "hidden"
            }`}
          >
            <h2 className="capitalize max-md:px-6 font-semibold text-xl p-4">
              select chat
            </h2>
            <hr />
            <div className=" py-3">
              {/* <ConversationList /> */}
              <div>
                {filteredUsers.map((otherUser, index) => (
                  <div
                    className="w-full py-2 max-md:px-6 flex items-center gap-3 px-4 hover:bg-gray-50 hover:cursor-pointer hover:border-l-2 border-lime-800"
                    key={index}
                    onClick={() => createChatroom(otherUser)}
                  >
                    <img
                      src={otherUser.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover object-center"
                    />
                    <div className="">
                      <h4 className="text-sm font-semibold capitalize">
                        {`${otherUser?.firstName} ${otherUser?.initials}`}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${
              aside ? "col-span-8 lg:col-span-9" : "col-span-12"
            } bg-white rounded-md shadow-md relative min-h-[650px] p-5 max-md:hidden`}
          >
            <FontAwesomeIcon
              icon={aside === false ? faBars : faXmark}
              className={`text-xl cursor-pointer block`}
              onClick={handleClick}
            />
            <h1 className="capitalize text-lg font-semibold text-center mt-5">
              please select a chat to continue
            </h1>
            <div className="max-w-sm mx-auto mt-10">
              <img src={talk} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatHome;
