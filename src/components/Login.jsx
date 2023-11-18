import React, { useState } from "react";
import { handleLogin } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import Preloader from "./PreLoader"
import { useNavigate } from "react-router-dom";
import useAuth from "../store/AuthStore";

const Login = ({ userType }) => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({});
  const {Loader, setLoader} = useLoader();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData, userType, setLoader, navigate, login);
  };

  const emailId = userType === "mentee" ? "menteeEmail" : "mentorEmail";
  const passwordId =
    userType === "mentee" ? "menteePassword" : "mentorPassword";

  return (
    <>
    {Loader && <Preloader />}
    <form
      action=""
      method="post"
      className="space-y-3 mt-5"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor={emailId} className="text-sm capitalize font-medium">
          Email
        </label>
        <input
          type="text"
          id={emailId}
          className="mt-3 block p-3 border-lime-700 border w-full rounded-sm"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={passwordId} className="text-sm capitalize font-medium">
          Password
        </label>
        <input
          type="password"
          id={passwordId}
          className="mt-3 mb-5 block p-3 border-lime-700 border w-full rounded-sm"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
      >
        Login
      </button>
    </form></>
  );
};

export default Login;
