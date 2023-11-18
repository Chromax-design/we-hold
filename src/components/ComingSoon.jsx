import React from "react";
import coming_soon from "../assets/icons/info_icons/coming_soon.svg";

const ComingSoon = () => {
  return (
    <section className=" w-full">
      <div className="max-w-4xl mx-auto">
        <img
          src={coming_soon}
          alt="coming soon"
          className="max-w-[400px] mx-auto"
        />
      </div>
      <div className="space-y-5 text-center tracking-[15px] uppercase font-semibold ">
        <h1 className="text-5xl">coming soon</h1>
        <p>are you ready?</p>
      </div>
    </section>
  );
};

export default ComingSoon;
