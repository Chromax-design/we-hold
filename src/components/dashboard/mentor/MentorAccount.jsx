import React from "react";
import UpdatePassword from "../UpdatePassword";

const MentorAccount = ({ tab }) => {
  return <UpdatePassword tab={tab} userType={"mentor"} />;
};

export default MentorAccount;
