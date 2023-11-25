import React from "react";
import user from "../../assets/mentors/mentor-3.jpg";

const ConversationList = () => {
  return (
    <>
      <div className="w-full py-2 flex items-center gap-3 px-4 hover:bg-gray-50 hover:cursor-pointer hover:border-l-2 border-lime-800">
        <img
          src={user}
          alt=""
          className="w-12 h-12 rounded-full object-cover object-center"
        />
        <div className="">
          <h4 className="text-sm font-semibold capitalize">magdalene jane</h4>
        </div>
      </div>
      <div className="w-full py-2 flex items-center gap-3 px-4 hover:bg-gray-50 hover:cursor-pointer hover:border-l-2 border-lime-800">
        <img
          src={user}
          alt=""
          className="w-12 h-12 rounded-full object-cover object-center"
        />
        <div className="">
          <h4 className="text-sm font-semibold capitalize">mary pearker</h4>
        </div>
      </div>
    </>
  );
};

export default ConversationList;
