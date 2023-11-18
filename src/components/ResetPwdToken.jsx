import React, { useState } from "react";
import error401 from "../assets/errors/401error.svg";
import { Link } from "react-router-dom";
import { handlesendpwdLink } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";
const ResetPwdToken = ({ userType }) => {
  const {Loader, setLoader}= useLoader()
  const [data, setData]= useState({})
  const handleChange =(e)=>{
    const {name, value}= e.target
    setData((prev)=>{
      return {...prev, [name]: value}
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    handlesendpwdLink(data, userType, setLoader)
  }
  return (
    <>
    {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover pt-32 pb-20 px-4">
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg">
          <img
            src={error401}
            alt=""
            className="block max-w-[350px] mx-auto mb-5"
          />
          <form action="" className="space-y-3 mt-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-sm capitalize font-medium">
                The provided token is not valid or has expired. Please enter
                your email to resend token to reset password
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
          </form>
          <Link
            to={"/"}
            className="capitalize font-semibold text-lime-700 text-sm underline inline-block mt-5"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetPwdToken;
