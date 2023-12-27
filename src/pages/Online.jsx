import React from "react";
import check from "/icons/check.png";
import ComingSoon from "../components/ComingSoon";

const Online = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20 space-y-7 px-4">
      <ComingSoon />

      <section className="max-w-4xl mx-auto space-y-5">
        <p className="text-lg text-center font-medium">
          Introducing We Hold A Hand youth development initiative online
          training, a revolutionary online training providing free, accessible,
          and high-quality courses.
        </p>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium ">
            Empowering young people worldwide, we offer a diverse range of
            subjects and expert-led modules.
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium ">
            Unlock your potential, enhance your skills, and ignite your passion
            for lifelong learning with our innovative platform.
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium">
            Education without boundaries starts here.
          </span>
        </div>
      </section>
    </main>
  );
};

export default Online;
