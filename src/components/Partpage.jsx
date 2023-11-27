import React from "react";
import Quote from "../assets/quote.png";
import avatar from "../assets/mentors/mentor-2.jpg";

const Partpage = ({message}) => {
  return (
    <div className="h-full bg-lime-700 sm:flex justify-center flex-col items-center p-5 sm:p-10 max-md:py-10 ">
      <div className="max-w-sm">
        <div className="text-white space-y-3">
          <span className="bg-lime-200 rounded-full inline-block p-3">
            <img src={Quote} alt="" width={43} />
          </span>
          <h1 className="text-4xl sm:text-7xl font-semibold">Make a Dream.</h1>
          <div className="border-l border-white pl-5 sm:pl-10 pt-7">
            <p className="text-xs leading-5">
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
