import React from "react";

const Partpage = () => {
  return (
    <div className="h-full hidden bg-[url('./assets/King&QueenHD.jpeg')] bg-cover bg-center relative lg:flex justify-center flex-col items-center p-5 sm:p-10 max-md:py-10">
      <div className="absolute top-0 left-0 w-full  h-full bg-[linear-gradient(to_right,rgba(230,115,0,0.3)50%,rgba(230,115,0,1))]"></div>
      <div className="max-w-sm z-10">
        <div className="text-white space-y-3 bg-[rgba(0,0,0,0.3)] p-5">
          <div className="border-l border-white pl-5 sm:pl-10 pt-7">
            <p className="text-xs sm:text-lg leading-5 uppercase">
              YOUR MENTORS IN LIFE ARE IMPORTANT, SO CHOOSE THEM WISELY
            </p>
            <div className="mt-5">
              <div className=" w-96">
                <h4 className="capitalize font-semibold text-sm tracking-wider">
                  ROBERT KIYOSAKI
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partpage;
