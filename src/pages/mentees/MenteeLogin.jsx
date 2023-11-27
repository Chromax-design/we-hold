import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/companies/google-color.svg";
import Login from "../../components/Login";
import LoginGoogle from "../../components/loginGoogle";

const MenteeLogin = ({ tab }) => {
  return (
    <div className={`${tab == 1 ? "block" : "hidden"}`}>
      <Login userType={"mentee"} />

      <p className="uppercase text-center font-medium my-5">or</p>
      <LoginGoogle />
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
