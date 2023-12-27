import React from "react";
import userIcon from "/icons/user_icon.png";

const MiniProfile = ({ user }) => {
  return (
    <div className=" col-span-3 hidden lg:block bg-white p-4 rounded-md shadow-md pb-6">
      <div className="space-y-4">
        <img
          src={user.image ? user.image : userIcon}
          alt="users photo"
          className="w-40 h-40 object-cover object-center rounded-full border-2 shadow-md border-black mx-auto my-3"
        />
        <div className="text-center capitalize">
          <h4 className="font-semibold text-lg">
            {user.firstName}
          </h4>
          <span className="text-sm font-medium">UI/UX designer</span>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-center capitalize">
            About me
          </h4>
          <p className="text-center text-sm line-clamp-5">
            {`${user.bio}`}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="capitalize font-semibold">telephone no:</h4>
        <p className="text-sm leading-6 capitalize">+{user.telNumber}</p>
      </div>
      <div className="mt-6">
        <h4 className="capitalize font-semibold">email address</h4>
        <p className="text-sm leading-6 capitalize">{user.email}</p>
      </div>
      <div className="mt-6">
        <h4 className="capitalize font-semibold">location</h4>
        <p className="text-sm leading-6 capitalize block">{`${user.country}`}</p>
      </div>
    </div>
  );
};

export default MiniProfile;
