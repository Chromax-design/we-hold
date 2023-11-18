import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ handleClick, menu }) => {

  return (
    <div className="lg:hidden">
      <FontAwesomeIcon
        icon={menu === false ? faBars : faXmark}
        className={`text-xl cursor-pointer block`}
        onClick={handleClick}
      />
    </div>
  );
};

export default MobileMenu;
