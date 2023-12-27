import React from "react";

import successImg from "/info_graphics/activation_success.svg";
import Success from "../components/Success";

const ActivationSuccess = () => {
  return (
    <Success
      message={
        "Your application and account have been successfully verified. Please proceed to the login page."
      }
      img={successImg}
    />
  );
};

export default ActivationSuccess;
