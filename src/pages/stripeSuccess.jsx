import React from "react";
import Success from "../components/Success";
import updatesuccessImg from "/info_graphics/update_successful.svg";

const StripeSuccess = () => {
  return <Success message={"Payment successful"} img={updatesuccessImg} link={'/'} />;
};

export default StripeSuccess;
