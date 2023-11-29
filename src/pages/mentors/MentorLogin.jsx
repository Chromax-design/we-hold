import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login";

const MentorLogin = ({ tab }) => {
  return (
    <div className={`${tab == 2 ? "block" : "hidden"}`}>
      {/* main form component*/}
      <Login userType={"mentor"} />

      <Link
        className="capitalize font-medium text-sm mt-3 inline-block underline"
        to={"/auth/mentor/sendpwdOTP"}
      >
        forgot password?
      </Link>
      <p className="mt-5">Don't have an account?</p>
      <p className="text-sm">
        <Link
          className="first-letter:capitalize capitalize font-medium inline-block underline"
          to={"/auth/signup-as-a-mentee"}
        >
          sign up as a mentee
        </Link>{" "}
        or{" "}
        <Link
          to={"/auth/signup-as-a-mentor"}
          className="first-letter:capitalize font-medium inline-block underline"
        >
          sign up as a mentor
        </Link>
      </p>
    </div>
  );
};

export default MentorLogin;
