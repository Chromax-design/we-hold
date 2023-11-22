import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../store/AuthStore";
import chatStore from "../../store/chatStore";
import chatServices from "../../services/chatServices"
import { socket } from "../../config/socket"

const Home = () => {
  const { user } = useAuth(state => state)
  const { setChatroom } = chatStore(state => state)
  const [mentors, setMentors] = useState([]);
  const filteredUsers = mentors.filter(otherUser => otherUser.id !== user.id)
  const navigate = useNavigate()

  const createChatroom = async (otherUser) => {
    const payload = {
      roomId: [user.id, otherUser.id].sort().join(""),
      participantA: user.id,
      participantB: otherUser.id
    }

    const chatroom = await chatServices.createChat(payload)
    socket.emit("create_chatroom", chatroom.roomId)
    setChatroom(chatroom)
  }

  useEffect(() => {
    socket.on("chatroom_created", () => {
      navigate("/chat")
    })
  }, [socket, navigate])

  return <div>
    <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
      {filteredUsers.map((otherUser, index) => (<p key={index} style={{ cursor: "pointer", backgroundColor: "gray", padding: "10px" }} onClick={() => createChatroom(otherUser)}>{otherUser.name}</p>))}
    </div>
  </div>;
};

export default Home;
