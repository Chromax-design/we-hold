import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const trust = [
  {
    id: 1,
    info: "Our platform is the trusted destination for young people seeking an exceptional Mentor. With a commitment to excellence, we prioritize your personal and career goals.",
  },
  {
    id: 2,
    info: "Our extensive vetting process ensures that only the most qualified and experienced mentors are part of our network. We understand that trust is paramount, so we prioritize confidentiality and privacy, allowing you to express your aspirations and challenges freely.",
  },
  {
    id: 3,
    info: "Our carefully tailored matching algorithm connects you with a mentor who aligns with your unique goals and values.",
  },
  {
    id: 4,
    info: "Our platform offers a user-friendly interface, convenient scheduling, secure payment options, and regular progress tracking. Trust us to guide you towards transformative change and a fulfilling life journey.",
  },
];

const Trust = () => {
  return (
    <div className="space-y-4">
      <ul className="space-y-4 mt-5 list-disc list-inside marker:text-lime-700">
        {trust.map((item) => {
          return (
            <li className=" list-item" key={item.id}>
              {item.info}
            </li>
          );
        })}
      </ul>
      <Link to={'/info'} className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group">
        find a mentor
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
        />
      </Link>
    </div>
  );
};

export default Trust;
