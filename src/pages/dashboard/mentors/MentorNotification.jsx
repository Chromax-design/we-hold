import React from "react";
import noMentor from "/info_graphics/no-mentor.svg";

const MentorNotification = () => {
  return (
    <main className="bg-gray-50 p-4">
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="max-w-4xl mx-auto">
          <div className=" col-span-9 bg-white rounded-md shadow-md relative h-[650px]">
            <div className="p-5">
              <h1 className="capitalize text-3xl sm:text-4xl font-medium">
                notifications
              </h1>
              <div className="flex flex-col justify-center items-center mt-20">
                <img src={noMentor} alt="" className="max-w-[350px]" />
                <h2 className="capitalize text-lg">
                  You have no notifications
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentorNotification;
