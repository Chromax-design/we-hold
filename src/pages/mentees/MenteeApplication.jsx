import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleApplication } from "../../utils/menteeHandlers";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { mentor_types } from "../../data/mentor_types";

const MenteeApplication = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [data, setdata] = useState({});
  const [mentor_type, setmentorType]= useState('')
  const [phoneData, setphoneData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePhoneNoChange = (value) => {
    setphoneData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicationdata = {
      ...data,
      telNumber: phoneData,
      mentor_type
    };
    handleApplication(applicationdata, userId, navigate);
    // navigate("/verification/success", { replace: true });
  };

  return (
    <main className="bg-gray-50 py-20 px-4">
      <section className="max-w-4xl mx-auto">
        <p className="capitalize mb-10 mt-5 text-3xl font-semibold">
          complete your mentee profile to proceed.
        </p>
        <form action="#" onSubmit={handleSubmit}>
          <div className="shadow-lg rounded-md bg-white p-10 space-y-5">
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
                  onChange={(e)=>setmentorType(e.target.value)}
                  value={mentor_type}
                >
                  <option value="">--- select type---</option>
                  {mentor_types.map((item) => {
                    return (
                      <option value={item.value} key={item.id} className="capitalize">
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
                  className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                  onChange={handleChange}
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
                  className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                  onChange={handleChange}
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
                  className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                  onChange={handleChange}
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
  );
};

export default MenteeApplication;
