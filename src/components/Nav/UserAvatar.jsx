import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { dashboard } from "../../data/Links";
import signOut from "../../assets/icons/dashboards/signOut.png";
import userIcon from "../../assets/icons/user_icon.png"
import useAuth from "../../store/AuthStore";


const UserAvatar = ({ userType }) => {
  const {user, logout}= useAuth()
  const [profile, setProfile] = useState(false);
  const avatarRef = useRef(null);
  
  const handleProfile = () => {
    setProfile(!profile);
  };

  const closeProfile = () => {
    setProfile(false);
  };


  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    if (avatarRef.current && !avatarRef.current.contains(e.target)) {
      closeProfile();
    }
  };

  return (
    <div className="group" onClick={handleProfile} ref={avatarRef}>
      <div className=" flex items-center gap-1 cursor-pointer py-1">
        <div className="relative">
          <img
            src={user.image? user.image : userIcon}
            alt=""
            className=" max-sm:w-9 max-sm:h-9 w-10 h-10 object-cover object-center rounded-full shadow-md border-lime-700 border-2"
          />
        </div>
        <div className="hidden min-[520px]:block">
          <div className="flex items-center">
            <h5 className=" capitalize font-semibold text-sm">
            {user?.firstName}
            </h5>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 font-medium ${
                profile && "rotate-180"
              } text-sm`}
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute top-12 right-0 w-[250px] z-30 py-4 px-2 ${
          profile ? "block" : "hidden"
        }`}
      >
        <div
          className={`bg-white rounded-md shadow-lg border border-gray-500 py-5 px-2
        }`}
        >
          <div className=" flex items-center gap-2 cursor-pointer py-1 mb-3 px-4">
            <img
              src={user.image? user.image : userIcon}
              alt=""
              className="max-sm:w-9 max-sm:h-9 w-10 h-10 object-cover object-center rounded-full shadow-md border-lime-700 border-2"
            />
            <h5 className="capitalize font-semibold text-sm">
              {user?.firstName}
            </h5>
          </div>
          <hr />
          <div className="py-5">
            {dashboard.map((item) => {
              return (
                <Link
                  to={`/${userType}/dashboard/${item.link}`}
                  className="flex items-center gap-3 capitalize hover:bg-gray-50 py-2 sm:py-3 px-4 font-medium max-sm:text-sm"
                  key={item.id}
                >
                  <img
                    src={`${item.icon}`}
                    alt={`${item.title} icon`}
                    className="w-5 sm:w-6"
                  />
                  <h5>{item.title}</h5>
                </Link>
              );
            })}
          </div>
          <hr />
          <button
            type="button"
            className="flex w-full items-center gap-3 py-5 px-4 capitalize hover:bg-gray-50 font-medium"
            onClick={()=>logout()}
          >
            <img src={`${signOut}`} alt={`${signOut} icon`} className="w-5 md:w-6" />
            <h5>sign out</h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
