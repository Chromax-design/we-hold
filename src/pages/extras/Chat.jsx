import { useEffect, useState } from "react"
import { socket } from "../../config/socket"
import messageServices from "../../services/messageServices"
import useAuth from "../../store/AuthStore"
import chatStore from "../../store/chatStore"

const Chat = () => {
    const { user } = useAuth(state => state)
    const { chatroom } = chatStore(state => state)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [mentors, setMentors] = useState([]);
    const filteredUsers = mentors.filter(otherUser => otherUser.id !== user.id)
    const receiver = filteredUsers.find(user => user.id === chatroom.participantA || user.id === chatroom.participantB)

    const getMessages = async () => {
        const messages = await messageServices.getMessages(chatroom.roomId)
        setMessages(messages)
    }

    const sendMessage = async () => {
        const payload = {
            roomId: chatroom.roomId,
            message: message,
            sender: chatroom.participantA,
            receiver: chatroom.participantB,
        }
        await messageServices.sendMessage(payload)
        socket.emit("create_chatroom", chatroom.roomId)
        socket.emit("send_message", payload)
    }

    useEffect(() => {
        const receiveMessage = (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        }

        socket.on("message_sent", receiveMessage)

        return () => {
            socket.off("message_sent", receiveMessage)
        }
    }, [socket])

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <div>
            <div style={{ border: "1px solid black", width: "300px" }}>
                <p style={{ border: "1px solid black" }}>
                    {receiver.name}
                </p>
                <div style={{ height: "400px" }}>
                    {messages.map((message, index) => (<p key={index}>{message.message}</p>))}
                </div>
                <div style={{ display: "flex" }}>
                    <input type="text" placeholder="message" value={message} onChange={e => setMessage(e.target.value)} style={{ flex: "1" }} />
                    <button style={{ flex: "1" }} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat