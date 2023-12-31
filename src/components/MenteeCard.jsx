import React from "react";

const MenteeCard = ({mentee}) => {
  return (
    <div
      className="bg-white inline-block shadow-md rounded-md p-5 items-center min-w-[350px] mx-3"
    >
      <div className="flex gap-2 items-center py-3">
        <img
          src={`${mentee.photo}`}
          alt=""
          className="rounded-full w-14 h-14 object-cover"
        />
        <div className="capitalize">
          <h4 className="font-semibold max-sm:text-sm">{mentee.name}</h4>
          <p className="max-sm:text-sm">{mentee.title}</p>
        </div>
      </div>
      <p className="mt-3 max-sm:text-sm">
        <q>{mentee.review}</q>
      </p>
    </div>
  );
};

export default MenteeCard;
