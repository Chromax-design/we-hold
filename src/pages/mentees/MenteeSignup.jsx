import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-full.png";
import Partpage from "../../components/Partpage";
// import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';

import SignUp from "../../components/SignUp";
const MenteeSignup = () => {

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-screen">
        <Partpage />

        <div className="bg-white p-10 max-w-lg mx-auto">
          <Link to={"/"}>
            <img src={Logo} alt="" className="block w-52 mx-auto mt-10" />
          </Link>
          <div className="">
            <div className="p-7 bg-white">
              <h2 className="first-letter:capitalize text-2xl font-semibold mb-5 py-3">
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
