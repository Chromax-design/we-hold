import React from "react";
import Success from "../components/Success";
import updatesuccessImg from "../assets/success/update_successful.svg";

const UpdateSuccess = () => {
  return (
    <Success
      message={
        "Password updated successfully, please proceed to the login page"
      }
      img={updatesuccessImg}
    />
  );
};

export default UpdateSuccess;
