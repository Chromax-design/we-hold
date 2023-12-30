import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PreLoader from "./PreLoader";
import useLoader from "../store/loaderStore";
import Logo from "/images/logos/logo-full.png";
import { handleResendOtp } from "../utils/handlers";

const ResendOtp = ({userType}) => {
  const { Loader, setLoader } = useLoader();
  const initial = { email: "" };
  const [requestData, setData] = useState(initial);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResendOtp(requestData, userType, setLoader, navigate);
    setData(initial);
  };

  return (
    <>
      {Loader && <PreLoader />}

      <div className="w-full min-h-screen bg-[url('/images/bg-gradient.jpg')] backdrop-blur-lg bg-cover py-20 px-4">
        <Link to={"/"}>
          <img src={Logo} alt="" className="block w-52 mx-auto mb-5" />
        </Link>
        <div className="max-w-lg mx-auto p-3 sm:p-8 shadow-xl bg-white rounded-lg">
          <form
            action=""
            method="post"
            className="space-y-3 mt-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="text-sm capitalize font-medium">
                Enter your Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={requestData.email}
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
            >
              Request OTP.
            </button>
          </form>
          <div className="mt-5">
            <Link
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              to={"/auth/login"}
            >
              back to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResendOtp;
