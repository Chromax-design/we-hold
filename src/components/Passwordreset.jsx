import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/logo-full.png";
import { handleResetPWD } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";
import useAuth from "../store/AuthStore";

const Passwordreset = ({ userType }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { Loader, setLoader } = useLoader();
  const [data, setData] = useState({});
  const { userId } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetPWD(data, userType, userId, setLoader, logout, navigate);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover pt-32 pb-20 px-4">
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
              <label htmlFor="pwd" className="text-sm capitalize font-medium">
                Create new password
              </label>
              <input
                type="password"
                id="pwd"
                name="password"
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
                name="confirm_password"
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
        </div>
      </div>
    </>
  );
};

export default Passwordreset;
