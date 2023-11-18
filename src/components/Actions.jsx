import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Actions = () => {
  return (
    <div className="p-8 py-12 lg:p-16 max-w-6xl mx-auto bg-[linear-gradient(to_right,#ef7700,rgba(230,115,0,0.5)),url('./assets/background_city.jpg')] bg-center bg-cover rounded-3xl text-white shadow-xl">
      <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl capitalize">
        Get unstuck with mentorship
      </h2>
      <p className="md:text-lg first-letter:capitalize mt-3 mb-7">
        join the community where people help you grow
      </p>
      <Link className="bg-lime-800 text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-lime-900">
        Get started{" "}
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 text-white text-sm font-medium md:group-hover:rotate-180`}
        />
      </Link>
    </div>
  );
};

export default Actions;
