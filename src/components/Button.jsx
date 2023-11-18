import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  return (
    <Link
      className={`${
        props.class ? props.class : "bg-lime-800 hover:bg-lime-900"
      } inline-block text-white px-5 py-3 rounded-full capitalize font-medium`}
      to={`${props.location}`}
    >
      {props.text}{" "}
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`ml-2 text-white text-sm font-medium md:group-hover:rotate-180`}
      />
    </Link>
  );
};

export default Button;
