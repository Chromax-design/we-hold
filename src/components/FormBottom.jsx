import React from "react";
import { Link } from "react-router-dom";
import Google from "../assets/companies/google-color.svg";
import LoginGoogle from "./loginGoogle";
const FormBottom = ({ userType }) => {
  return (
    <>
      <p className="text-sm text-gray-500 my-5 text-center">
        By signing up, you agree to our{" "}
        <Link className="underline" to={"/terms"}>
          terms of use
        </Link>
      </p>

      {userType == "mentee" && (
        <div>
          <p className="mt-5 text-sm text-center mb-3">Or</p> <LoginGoogle />{" "}
        </div>
      )}

      <hr className="my-5" />
      <p className="text-sm text-gray-500">
        Already have account?{" "}
        <Link to={"/auth/login"} className="underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default FormBottom;
