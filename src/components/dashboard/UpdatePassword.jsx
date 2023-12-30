import React, { useState } from "react";
import useLoader from "../../store/loaderStore";
import PreLoader from "../PreLoader";
import useAuth from "../../store/AuthStore";
import { handleUpdatePassword } from "../../utils/handlers";

const UpdatePassword = ({ tab, userType }) => {
  const { user } = useAuth();
  const { Loader, setLoader } = useLoader();
  const initial = {
    password: "",
    confirmPassword: "",
  };
  const [updates, setUpdate] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...updates,
      userId: user.userId,
    };
    handleUpdatePassword(updatedData, userType, setLoader);
    setUpdate(initial);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div
        className={`${
          tab == 3 ? "block" : "hidden"
        } max-w-xl mx-auto space-y-7 p-4 pb-20`}
      >
        <h2 className="capitalize text-2xl font-medium">
          Update password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="text-sm capitalize font-medium"
            >
              enter new password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={updates.password}
              minLength={7}
              className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm capitalize font-medium"
            >
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={updates.confirmPassword}
              minLength={7}
              className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePassword;
