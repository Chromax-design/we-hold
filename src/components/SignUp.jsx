import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormBottom from "./FormBottom";
import { handleRegister } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import PreLoader from "./PreLoader";
import { useNavigate } from "react-router-dom";

const SignUp = ({ userType }) => {
  const { Loader, setLoader } = useLoader();
  const navigate = useNavigate();
  const initialState = {
    firstname: "",
    initials: "",
    email: "",
    password: "",
    confirmPassword: "",
    telNumber: "",
  };
  const [data, setdata] = useState(initialState);
  const [phoneData, setPhoneData] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstname,
      initials: data.initials,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      telNumber: phoneData,
    };
    handleRegister(userData, setLoader, userType, navigate);
    setdata(initialState);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <form
        action=""
        method="post"
        className="space-y-3"
        onSubmit={handlesubmit}
      >
        <div className="flex gap-3 max-sm:flex-col">
          <div>
            <label htmlFor="fname" className="text-sm capitalize font-medium">
              first name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              value={data.firstname}
              className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
              onChange={handlechange}
              required
            />
          </div>

          <div>
            <label htmlFor="lname" className="text-sm capitalize font-medium">
              initials
            </label>
            <input
              type="text"
              id="initials"
              name="initials"
              value={data.initials}
              className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
              onChange={handlechange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm capitalize font-medium">
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
            onChange={handlechange}
            required
          />
        </div>

        <div>
          <label htmlFor="pwd" className="text-sm capitalize font-medium">
            password
          </label>
          <input
            type="password"
            id="pwd"
            name="password"
            value={data.password}
            className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
            onChange={handlechange}
            required
            minLength={8}
          />
        </div>

        <div>
          <label htmlFor="pwd" className="text-sm capitalize font-medium">
            Confirm password
          </label>
          <input
            type="password"
            id="pwd"
            name="confirmPassword"
            value={data.confirmPassword}
            className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
            onChange={handlechange}
            required
            minLength={8}
          />
        </div>

        <div>
          <label htmlFor="tel" className="text-sm capitalize font-medium">
            telephone no
          </label>
          <PhoneInput
            country={"ng"}
            value={phoneData}
            inputStyle={{
              width: "100%",
              height: "40px",
              fontSize: "16px",
            }}
            onChange={(value) => setPhoneData(value)}
          />
        </div>
        <button
          type="submit"
          className="capitalize block bg-lime-700 text-white font-medium p-3 w-full rounded-md hover:bg-lime-800"
        >
          create account
        </button>
      </form>
      <FormBottom userType={userType} />
    </>
  );
};

export default SignUp;
