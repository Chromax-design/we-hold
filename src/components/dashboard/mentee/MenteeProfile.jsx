import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { handleMenteeProfile } from "../../../utils/menteeHandlers";
import { mentor_types } from "../../../data/mentor_types";
import useAuth from "../../../store/AuthStore";
import useLoader from "../../../store/loaderStore";
import PreLoader from "../../PreLoader";

const MenteeProfile = ({ tab }) => {
  const { user, login } = useAuth();
  const { Loader, setLoader } = useLoader();
  const [mentor_type, setmentorType] = useState(user.mentor_type || "");
  const [data, setData] = useState({
    mentor_type: user.mentor_type || "",
    telNumber: user.telNumber || "",
    other: user.other || "",
    challenge: user.challenge || "",
    learning_style: user.learning_style || "",
    personality_trait: user.personality_trait || "",
    goal: user.goal || "",
  });
  const [phoneData, setphoneData] = useState(user.telNumber || "");
  const handlePhoneNoChange = (value) => {
    setphoneData(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      ...data,
      telNumber: phoneData,
      mentor_type,
    };
    handleMenteeProfile(userData, login, setLoader, user.id);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div
        className={`p-3 sm:p-10 pt-5 ${
          tab == 2 ? "block" : "hidden"
        } max-w-4xl mx-auto`}
      >
        <div className="col-span-8 rounded-md space-y-6 p-5 pt-0">
          <h2 className="font-semibold text-2xl">Profile Settings</h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="rounded-md bg-white space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="mentor_type"
                    className="text-sm capitalize font-medium"
                  >
                    type of mentor
                  </label>
                  <select
                    id="mentor_type"
                    name="mentor_type"
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={(e) => setmentorType(e.target.value)}
                    value={mentor_type}
                  >
                    <option value="">--- select type---</option>
                    {mentor_types.map((item) => {
                      return (
                        <option
                          value={item.value}
                          key={item.id}
                          className="capitalize"
                        >
                          {item.data}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="tel"
                    className="text-sm capitalize font-medium block mb-3"
                  >
                    telephone no
                  </label>
                  <PhoneInput
                    country={"ng"}
                    value={phoneData}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                      display: "block",
                    }}
                    onChange={handlePhoneNoChange}
                  />
                </div>
              </div>

              <div className="grid grid-col-1 md:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="other"
                    className="text-sm capitalize font-medium"
                  >
                    other
                  </label>
                  <input
                    type="text"
                    id="other"
                    name="other"
                    value={data.other}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="text-sm capitalize font-medium"
                  >
                    which areas do you need support?
                  </label>
                  <input
                    type="text"
                    id="challenge"
                    name="challenge"
                    value={data.challenge}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="learning"
                    className="text-sm capitalize font-medium"
                  >
                    learning style
                  </label>
                  <input
                    type="text"
                    id="learning"
                    name="learning_style"
                    value={data.learning_style}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="personality"
                    className="text-sm capitalize font-medium"
                  >
                    personality trait
                  </label>
                  <input
                    type="text"
                    id="personality"
                    name="personality_trait"
                    value={data.personality_trait}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="career"
                  className="text-sm capitalize font-medium"
                >
                  goal
                </label>
                <textarea
                  name="goal"
                  id="career"
                  rows="5"
                  minLength={100}
                  value={data.goal}
                  className=" mt-3 p-2 rounded-sm border-lime-700 border w-full"
                  placeholder="Minimum of 100 words"
                  onChange={handleChange}
                  required
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
        </div>
      </div>
    </>
  );
};

export default MenteeProfile;
