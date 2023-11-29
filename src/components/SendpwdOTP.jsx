import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-full.png";
import { handlesendpwdOTP } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";

const SendpwdOTP = ({ userType }) => {
  const { Loader, setLoader } = useLoader();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlesendpwdOTP(data, userType, setLoader, navigate);
  };
  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover py-20 px-4">
        <Link to={"/"}>
          <img src={Logo} alt="" className="block w-52 mx-auto mb-5" />
        </Link>
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg">
          <p className="text-sm">
            Enter your email address and you'll receive an OTP to proceed
          </p>
          <form
            action=""
            method="post"
            className="space-y-3 mt-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="text-sm capitalize font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
            >
              send OTP
            </button>
          </form>
          <p className="mt-5">
            <Link
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              to={"/auth/login"}
            >
              back to login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SendpwdOTP;
