import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-full.png";
import Partpage from "../../components/Partpage";
// import axios from "axios"
import "react-toastify/dist/ReactToastify.css";

import SignUp from "../../components/SignUp";
const MenteeSignup = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-screen">
        <Partpage
          message={
            "In the dance of dreams and reality, each step is a note, and the music is composed by the journey of one's heart."
          }
        />

        <div className="bg-white p-4 sm:p-10 max-w-lg mx-auto">
          <Link to={"/"}>
            <img src={Logo} alt="" className="block w-44 sm:w-52 mx-auto my-5 sm:my-10" />
          </Link>
          <div className="">
            <div className=" bg-white">
              <h2 className="first-letter:capitalize text-lg sm:text-2xl font-semibold mb-5 py-3">
                create your Mentee account <br />{" "}
                <Link
                  to={"/auth/signup-as-a-mentor"}
                  className="text-xs underline text-lime-700"
                >
                  or sign up as a mentor
                </Link>
              </h2>

              <SignUp userType={"mentee"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeSignup;
