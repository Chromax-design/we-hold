import React, { useState } from "react";
import user from "../../assets/mentees/mentee-5.jpg";
import demo from "../../assets/mentees/mentee-4.jpg";

const MessageCard = ({ owner }) => {
  // const [owner, setOwner]=useState(true)
  return (
    <div className={`flex gap-3 max-w-sm ${owner && " flex-row-reverse"}`}>
      <img
        src={user}
        alt=""
        className="w-10 h-10 rounded-full border-2 border-black"
      />
      <div className="">
        <p
          className={`max-w-[max-content] bg-white p-3 text-sm shadow-sm ${owner ? 'rounded-s-xl rounded-br-xl' : 'rounded-e-xl rounded-bl-xl'}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, autem!
        </p>
        <img src={demo} alt="" className="mt-3" />
        <span className={`${owner ? 'text-right' : 'text-left'} text-xs block mt-2`}>12:00 pm</span>
      </div>
    </div>
  );
};

export default MessageCard;
