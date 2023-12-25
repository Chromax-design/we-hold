import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-full.png";
import MenteeLogin from "./mentees/MenteeLogin";
import MentorLogin from "./mentors/MentorLogin";

const LoginBase = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  const tabs = [
    { label: "I'm a mentee", index: 1 },
    { label: "I'm a mentor", index: 2 },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="h-full hidden bg-[url('./assets/login.jpg')] bg-cover bg-center relative lg:flex justify-center flex-col items-center p-5 sm:p-10 max-md:py-10">
          <div className="absolute top-0 left-0 w-full  h-full bg-[linear-gradient(to_right,rgba(230,115,0,0.3)50%,rgba(230,115,0,1))]"></div>
          <div className="max-w-sm z-10">
            <div className="text-white space-y-3 bg-[rgba(0,0,0,0.3)] p-5">
              <div className="border-l border-white pl-5 sm:pl-10 pt-7">
                <p className="text-xs sm:text-lg leading-5 uppercase">
                  <q> YOUR MENTORS IN LIFE ARE IMPORTANT, SO CHOOSE THEM WISELY </q>
                </p>
                <div className="mt-5">
                  <div className=" w-96">
                    <h4 className="capitalize font-semibold text-sm tracking-wider">
                      ROBERT KIYOSAKI
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white p-4 sm:p-10 max-w-lg mx-auto">
            <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className="block w-40 sm:w-52 mx-auto my-5 sm:mb-10"
              />
            </Link>
            <ul className="flex max-sm:flex-col justify-center items-center capitalize text-sm font-medium text-center mb-5 sm:mb-10">
              {tabs.map((t) => (
                <li
                  key={t.index}
                  className={`border-0 border-b-2 ${
                    tab === t.index ? "border-b-lime-800" : "border-b-lime-100"
                  } flex-1`}
                >
                  <div
                    className="w-full p-4 inline-block cursor-pointer"
                    onClick={() => toggleTab(t.index)}
                  >
                    {t.label}
                  </div>
                </li>
              ))}
            </ul>

            <MenteeLogin tab={tab} />
            <MentorLogin tab={tab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBase;
