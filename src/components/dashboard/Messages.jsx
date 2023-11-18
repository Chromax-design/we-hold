import React, { useState } from "react";
import MessageCard from "./MessageCard";

const Messages = () => {
  const [owner, setOwner] = useState(false);
  return (
    <div
      className={`h-[calc(100%-120px)] bg-gray-100 overflow-y-scroll messageCard overflow-x-hidden py-6 px-4 space-y-3 flex flex-col ${
        owner && "items-end"
      }`}
    >
      <MessageCard owner={owner} />
      <MessageCard owner={owner} />
    </div>
  );
};

export default Messages;
