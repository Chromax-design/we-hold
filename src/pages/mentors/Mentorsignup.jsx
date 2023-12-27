import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logos/logo-full.png";
import SignUp from "../../components/SignUp";

const Mentorsignup = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto min-h-screen">
        <div className="bg-white p-4 sm:p-10 max-w-lg mx-auto">
          <Link to={"/"}>
            <img
              src={Logo}
              alt=""
              className="block w-44 sm:w-52 mx-auto my-5 sm:my-10"
            />
          </Link>
          <div className="">
            <div className="bg-white">
              <h2 className="first-letter:capitalize text-lg sm:text-2xl font-semibold mb-5 py-3">
                create your Mentor account <br />{" "}
                <Link
                  to={"/auth/signup-as-a-mentee"}
                  className="text-xs underline text-lime-700"
                >
                  or sign up as a mentee
                </Link>
              </h2>

              <SignUp userType={"mentor"} />
            </div>
          </div>
        </div>
        <div className="h-full hidden bg-[url('/images/signup.jpg')] bg-cover bg-center relative lg:flex justify-center flex-col items-center p-5 sm:p-10 max-md:py-10">
          <div className="absolute top-0 left-0 w-full  h-full bg-[linear-gradient(to_right,rgba(230,115,0,0.3)50%,rgba(230,115,0,1))]"></div>
          <div className="max-w-sm z-10">
            <div className="text-white space-y-3 bg-[rgba(0,0,0,0.3)] p-5">
              <div className="border-l border-white pl-5 sm:pl-10 pt-7">
                <p className="text-xs sm:text-lg leading-5 uppercase">
                  <q>
                    {" "}
                    YOUR MENTORS IN LIFE ARE IMPORTANT, SO CHOOSE THEM WISELY
                  </q>
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
      </div>
    </div>
  );
};

export default Mentorsignup;
