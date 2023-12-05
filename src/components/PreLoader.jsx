import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.8)] z-50 flex justify-center items-center p-4">
      <div className="mx-auto w-full h-52 max-w-[400px] bg-white rounded-md shadow-lg flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default PreLoader;
