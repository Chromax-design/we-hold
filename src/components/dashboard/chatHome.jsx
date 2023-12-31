import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import talk from "/info_graphics/letschat.svg";
import useAuth from "../../store/AuthStore";
import chatStore from "../../store/ChatStore";
import chatServices from "../../services/chatService";
import { socket } from "../../config/socket";
import { BASE_URL } from "../../config/config";
import axios from "axios";
import useLoader from "../../store/loaderStore";
import PreLoader from "../PreLoader";

const ChatHome = () => {
  const { Loader, setLoader } = useLoader();
  const { user } = useAuth();
  const { setChatroom } = chatStore((state) => state);
  const [users, setUsers] = useState([]);
  const [aside, setAside] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setAside(!aside);
  };

  const url =
    user.role === "mentor"
      ? `${BASE_URL}/mentor/myMentees/${user.id}`
      : `${BASE_URL}/mentee/myMentors/${user.id}`;

  useEffect(() => {
    try {
      const getMentors = async () => {
        setLoader(true);
        const { data } = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setUsers(data.subscribed);
        setLoader(false);
      };
      getMentors();
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }, [url, setLoader]);

  const generateRoomId = (userId1, userId2) =>
    [userId1, userId2].sort().join("");

  const createChatroomForUser = async (otherUserId) => {
    const roomId = generateRoomId(user.id, otherUserId);

    const payload = {
      roomId,
      participantA: user.id,
      participantB: otherUserId,
    };

    const chatroom = await chatServices.createChat(payload);
    socket.emit("create_chatroom", roomId);
    setChatroom(chatroom);
    navigate(`/${user.role}/dashboard/chatRoom`);
  };

  useEffect(() => {
    socket.on("chatroom_created", () => {
      navigate(`/${user.role}/dashboard/chatRoom`);
    });
  }, [socket, navigate, user.role]);

  return (
    <>
      {Loader && <PreLoader />}
      <main className="bg-gray-50 p-2 sm:p-4">
        <section className="max-w-6xl mx-auto px-2 sm:px-4 py-7 ">
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
                <div>
                  {users.length > 0 ? (
                    users.map((otherUser, index) => (
                      <div
                        className="w-full py-2 max-md:px-6 flex items-center gap-3 px-4 hover:bg-gray-50 hover:cursor-pointer hover:border-l-2 border-lime-800"
                        key={index}
                        onClick={() => createChatroomForUser(otherUser.id)}
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
                    ))
                  ) : (
                    <p className="p-4">No subscription found</p>
                  )}
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
    </>
  );
};

export default ChatHome;
