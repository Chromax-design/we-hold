import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "/images/logos/logo-full.png";
import { handleAccountConfirmation } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";

const ConfirmRegistratiion = ({ userType }) => {
  const initial = { otp: "" };
  const [otpData, setData] = useState(initial);
  const { Loader, setLoader } = useLoader();
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAccountConfirmation(otpData, userId, userType, setLoader, navigate);
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
              <label htmlFor="otp" className="text-sm capitalize font-medium">
                Enter your OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otpData.otp}
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
            >
              Confirm Registration
            </button>
          </form>
          <div className="mt-5 flex justify-between items-center">
            <Link
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              to={"/auth/login"}
            >
              back to login
            </Link>
            <Link
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              to={`/auth/${userType}/resend-otp/${userId}`}
            >
              request otp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmRegistratiion;
