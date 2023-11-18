import React from "react";
import error from "../assets/errors/403.svg";
import Button from "../components/Button";

const Error403 = () => {
  return (
    <div className="max-sm:p-5 max-w-3xl mx-auto text-center min-h-screen flex justify-center items-center flex-col py-20 ">
      <img src={error} alt="" className="max-w-[400px]" />
      <div>
        <h2 className="uppercase text-sm font-semibold mb-3">
          unauthorized user!!!
        </h2>
        <Button
          text={"go to home"}
          class={"bg-gray-800 hover:bg-gray-900"}
          location={"/"}
        />
      </div>
    </div>
  );
};

export default Error403;
