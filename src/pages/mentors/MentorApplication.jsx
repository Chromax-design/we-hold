import React, { useState } from "react";
import { handleApplication } from "../../utils/mentorHandlers";
import { useNavigate, useParams } from "react-router-dom";
import useLoader from "../../store/loaderStore";
import PreLoader from "../../components/PreLoader";
import { mentor_types } from "../../data/mentor_types";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MentorApplication = () => {
  const navigate = useNavigate();
  const [phoneData, setphoneData] = useState("");
  const { Loader, setLoader } = useLoader();
  const [data, setData] = useState({});
  const { userId } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePhoneNoChange = (value) => {
    setphoneData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mentorData = {
      ...data, telNumber: phoneData
    }
    handleApplication(mentorData, userId, setLoader, navigate);
  };
  return (
    <>
      {Loader && <PreLoader />}
      <main className="bg-gray-50 py-20 px-4">
        <section className="max-w-4xl mx-auto">
          <p className="capitalize mb-10 mt-3 text-3xl font-semibold">
            complete your mentor profile to proceed.
          </p>
          <form action="#" onSubmit={handleSubmit}>
            <div className="shadow-lg rounded-md bg-white p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="job_title"
                    className="text-sm capitalize font-medium"
                  >
                    job title
                  </label>
                  <input
                    type="text"
                    id="job_title"
                    name="job_title"
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="text-sm capitalize font-medium"
                  >
                    industry
                  </label>
                  <select
                    type="text"
                    id="industry"
                    name="industry"
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  >
                    <option value={''}>------</option>
                    {mentor_types.map((item) => {
                      return (
                        <option className="capitalize" value={item.value} key={item.id}>
                          {item.data}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 max-sm:flex-col">
                <div className="sm:col-span-12 md:col-span-5 space-y-3" >
                  <label
                    htmlFor="telNumber"
                    className="text-sm capitalize font-medium"
                  >
                    telephone number
                  </label>
                  <PhoneInput
                    country={"ng"}
                    value={phoneData}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      display: "block",
                      marginTop: "0.75rem",
                      borderColor: "rgb(77, 124, 15)",
                      borderRadius: "0.125rem"
                    }}
                    onChange={handlePhoneNoChange}
                  />
                </div>

                <div className=" sm:col-span-2">
                  <label
                    htmlFor="experience"
                    className="text-sm capitalize font-medium"
                  >
                    yrs of exp
                  </label>
                  <input
                    type="number"
                    min={"0"}
                    id="experience"
                    name="yrs_of_experience"
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:col-span-10 md:col-span-5">
                  <label
                    htmlFor="social"
                    className="text-sm capitalize font-medium"
                  >
                    social media link (FB/ IG/ LinkedIn)
                  </label>
                  <input
                    type="url"
                    id="social"
                    name="social_link"
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="bio" className="text-sm capitalize font-medium">
                  bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  rows="5"
                  className=" mt-3 p-2 rounded-sm border-lime-700 border w-full"
                  placeholder="Minimum of 100 words"
                  minLength={100}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="why_mentoring"
                  className="text-sm capitalize font-medium"
                >
                  why mentoring?
                </label>
                <textarea
                  name="why_mentoring"
                  id="why_mentoring"
                  rows="5"
                  minLength={100}
                  className=" mt-3 p-2 rounded-sm border-lime-700 border w-full"
                  placeholder="Minimum of 100 words"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
              >
                submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default MentorApplication;
