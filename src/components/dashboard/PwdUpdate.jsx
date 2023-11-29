import React, { useState } from "react";
import { handlesendpwdOTP } from "../../utils/handlers";
import useLoader from "../../store/loaderStore";
import PreLoader from "../PreLoader";

const PwdUpdate = ({ tab }) => {
  const { Loader, setLoader } = useLoader();
  const [email, setEmail] = useState({});

  const handeleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlesendpwdOTP(email, "mentee", setLoader);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div
        className={`${
          tab == 3 ? "block" : "hidden"
        } max-w-xl mx-auto space-y-7 p-4 pb-20`}
      >
        <h2 className="capitalize text-3xl sm:text-4xl font-medium">
          Update password
        </h2>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-sm">
            A link to reset your password will be sent to the email provided
            below
          </p>
          <div>
            <label htmlFor="email" className="text-sm capitalize font-medium">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
              onChange={handeleChange}
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

export default PwdUpdate;
