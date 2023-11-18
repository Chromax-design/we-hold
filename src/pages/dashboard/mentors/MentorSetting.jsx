import React, { useState } from "react";
import useAuth from "../../../store/AuthStore";
import MentorDetails from "../../../components/dashboard/mentor/MentorDetails";
import MentorProfile from "../../../components/dashboard/mentor/MentorProfile";
import MentorAccount from "../../../components/dashboard/mentor/MentorAccount";

const MentorSetting = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  const tabs = [
    { label: "user details", index: 1 },
    { label: "mentor profile", index: 2 },
    { label: "account settings", index: 3 },
  ];

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="bg-white rounded-md shadow-xl">
          <div className="p-5">
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
          <MentorProfile tab={tab} />
          <MentorDetails tab={tab} />
          <MentorAccount tab={tab} />
        </div>
      </section>
    </main>
  );
};

export default MentorSetting;
