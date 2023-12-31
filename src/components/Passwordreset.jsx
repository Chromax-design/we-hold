import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "/images/logos/logo-full.png";
import { handleResetPassword } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";

const Passwordreset = ({ userType }) => {
  const navigate = useNavigate();
  const { Loader, setLoader } = useLoader();
  const initial = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetPassword(data, userType, setLoader, navigate);
    setData(initial);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('/images/bg-gradient.jpg')] backdrop-blur-lg bg-cover pt-32 pb-20 px-4">
        <Link to={"/"}>
          <img src={Logo} alt="" className="block w-52 mx-auto mb-5" />
        </Link>
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg">
          <form
            action=""
            method="post"
            className="space-y-3 mt-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="text-sm capitalize font-medium">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
                minLength={7}
              />
            </div>
            <div>
              <label htmlFor="pwd" className="text-sm capitalize font-medium">
                Create new password
              </label>
              <input
                type="password"
                id="pwd"
                name="password"
                value={data.password}
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
                minLength={7}
              />
            </div>
            <div>
              <label htmlFor="pwd2" className="text-sm capitalize font-medium">
                Confirm password
              </label>
              <input
                type="password"
                id="pwd2"
                name="confirmPassword"
                value={data.confirmPassword}
                className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                onChange={handleChange}
                required
                minLength={7}
              />
            </div>
            <button
              type="submit"
              className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
            >
              reset password
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

export default Passwordreset;
