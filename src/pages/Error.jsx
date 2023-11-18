import React from "react";
import Button from "../components/Button";
import error from "../assets/404error.svg";

const Error = () => {
  return (
    <div className="max-sm:p-5 max-w-3xl mx-auto text-center min-h-screen flex justify-center items-center flex-col py-20 ">
      <img src={error} alt="" className="max-w-[400px]" />
      <div>
        <h2 className="uppercase text-sm font-semibold mb-3">404 not found</h2>
        <Button
          text={"go to home"}
          class={"bg-gray-800 hover:bg-gray-900"}
          location={"/"}
        />
      </div>
    </div>
  );
};

export default Error;
