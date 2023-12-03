import React from "react";
import user from "../../assets/mentees/mentee-3.jpeg";
import telephone from "../../assets/icons/phone.png";

const MessageHeader = ({receiver}) => {
  return (
    <div className="flex justify-between items-center h-[60px] p-4 w-full border-b">
      <div className="flex gap-2 items-center">
        <img
          src={receiver?.image}
          alt=""
          className="w-10 h-10 object-cover object-center rounded-full border-2 border-black shadow-md"
        />
        <h1 className="capitalize sm:text-lg font-semibold">{`${receiver?.firstName} ${receiver?.initials}`}</h1>
      </div>
      <a href="tel:+45789023">
        <img src={telephone} alt="" className="w-5" />
      </a>
    </div>
  );
};

export default MessageHeader;
