import React from "react";
import avatar from "../assets/mentors/mentor-2.jpg";

const Partpage = ({message}) => {
  return (
    <div className="h-full hidden bg-[url('./assets/King&QueenHD.jpeg')] bg-cover bg-center relative lg:flex justify-center flex-col items-center p-5 sm:p-10 max-md:py-10">
      <div className="absolute top-0 left-0 w-full  h-full bg-[linear-gradient(to_right,rgba(230,115,0,0.3)50%,rgba(230,115,0,1))]"></div>
      <div className="max-w-sm z-10">
        <div className="text-white space-y-3 bg-[rgba(0,0,0,0.3)] p-5">
          <div className="border-l border-white pl-5 sm:pl-10 pt-7">
            <p className="text-xs sm:text-sm leading-5">
              {message}
            </p>
            <div className="mt-5 flex gap-3 items-center">
              <img
                src={avatar}
                alt=""
                className="w-12 h-12 mx-auto rounded-full object-cover object-center shadow-sm shadow-white ring ring-white"
              />
              <div className=" w-96">
                <h4 className="capitalize font-semibold text-sm">
                  linda midshay
                </h4>
                <p className="text-xs">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partpage;
