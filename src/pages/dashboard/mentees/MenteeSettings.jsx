import React, { useState } from "react";
import MenteeProfile from "../../../components/dashboard/mentee/MenteeProfile";
import MenteeAccount from "../../../components/dashboard/mentee/MenteeAccount";
import UserProfile from "../../../components/dashboard/mentee/MenteeDetails";

const MenteeSettings = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  const tabs = [
    { label: "user details", index: 1 },
    { label: "mentee profile", index: 2 },
    { label: "account settings", index: 3 },
  ];


  return (
    <main>
      <section className="max-w-6xl mx-auto p-2 sm:px-4 py-7 ">
        <div className="bg-white rounded-md shadow-xl">
          <div className="sm:p-5">
            <ul className="flex flex-col sm:flex-row justify-center items-center capitalize font-medium text-center mb-10">
              {tabs.map((t) => (
                <li
                  key={t.index}
                  className={`border-0 border-b-2 ${
                    tab === t.index ? "border-b-lime-800" : "border-b-lime-100"
                  } flex-1`}
                >
                  <div
                    className="w-full p-4 inline-block cursor-pointer"
                    onClick={() => toggleTab(t.index)}
                  >
                    {t.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <MenteeProfile tab={tab} />
          <UserProfile tab={tab} />
          <MenteeAccount tab={tab} />
        </div>
      </section>
    </main>
  );
};

export default MenteeSettings;
