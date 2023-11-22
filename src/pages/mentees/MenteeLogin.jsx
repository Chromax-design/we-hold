import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/companies/google-color.svg";
import Login from "../../components/Login";

const MenteeLogin = ({ tab }) => {
  return (
    <div className={`${tab == 1 ? "block" : "hidden"}`}>
      {/* main form component*/}
      <Login userType={"mentee"} />
      <p className="uppercase text-center font-medium my-5">or</p>
      <button
        type="button"
        className="font-medium p-3 w-full text-sm bg-white hover:bg-gray-50 text-center border border-lime-700 rounded-sm flex items-center justify-center gap-2"
      >
        <img src={Google} alt="google logo" className="w-5" />
        <span>Log in with Google</span>
      </button>
      <Link
        className="capitalize font-medium text-sm mt-3 inline-block underline"
        to={"/auth/mentee/send_reset_link"}
      >
        forgot password?
      </Link>
      <p className="mt-5">Don't have an account?</p>
      <p>
        <Link
          className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
          to={"/auth/signup-as-a-mentee"}
        >
          sign up as a mentee
        </Link>{" "}
        or{" "}
        <Link
          to={`/auth/signup-as-a-mentor`}
          className="first-letter:capitalize font-medium text-sm inline-block underline"
        >
          sign up as a mentor
        </Link>
      </p>
    </div>
  );
};

export default MenteeLogin;
