import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Success = ({ message, img, link }) => {
  return (
    <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover pt-24 pb-20 px-4">
      <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg">
        <img src={img} alt="" className="block max-w-[350px] mx-auto mb-5" />
        <h1 className="text-lg font-semibold text-center mb-5">{message}</h1>
        <Link
          to={link ? link : "/auth/login"}
          className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
        >
          {link ? "go to home page" : "Go to login"}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Success;
