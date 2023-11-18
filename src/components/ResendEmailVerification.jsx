import React, { useState } from "react";
import error401 from "../assets/errors/401error.svg";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import Preloader from "../components/PreLoader";
const ResendEmailVerification = ({ userType }) => {
  const { Loader, setLoader } = useLoader();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailVerification(data, setLoader, userType);
  };
  return (
    <>
      {Loader && <Preloader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover pt-24 pb-20 px-4">
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg">
          <img
            src={error401}
            alt=""
            className="block max-w-[350px] mx-auto mb-5"
          />
          <form
            action=""
            method="post"
            className="space-y-3 mt-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="text-sm capitalize font-medium">
                The provided token is not valid or has expired. Please enter
                your email to resend token for account verification
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
            >
              send token
            </button>
            <Link
              to={"/"}
              className="underline capitalize text-sm text-lime-800 inline-block mt-3"
            >
              Back to home
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResendEmailVerification;
