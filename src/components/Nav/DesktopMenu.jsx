import React from "react";
import { Link } from "react-router-dom";

import { community, company } from "../../data/Links";
import { mentor_types } from "../../data/mentor_types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DesktopMenu = ({ handleClick, toggles, toggle, menu, user }) => {
  return (
    <div
      className={`max-lg:absolute ${
        !menu && "max-lg:-translate-x-full"
      } max-lg:transition-all max-lg:ease-linear top-full right-0 w-full max-lg:border-t max-lg:flex-col max-lg:p-4 max-lg:bg-white max-lg:shadow-md flex lg:gap-5 lg:items-center`}
    >
      <div className="relative group">
        <div
          className={`max-lg:flex max-lg:justify-between max-lg:items-center max-lg:py-3 max-lg:border-b inline capitalize font-semibold text-sm py-7 px-2 hover:cursor-pointer`}
          to={"javascript:void(0)"}
          onClick={() => {
            toggle(1);
          }}
        >
          <span>Find a mentor</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-2 font-medium ${
              toggles[0] && "max-lg:rotate-180"
            } lg:group-hover:rotate-180`}
          />
        </div>
        <div
          className={`${
            toggles[0]
              ? "max-lg:h-auto max-lg:mb-3"
              : "max-lg:h-0 overflow-hidden max-lg:p-0"
          } max-lg:block lg:overflow-hidden lg:absolute lg:top-12 lg:-left-full lg:min-w-[850px] lg:hidden group lg:group-hover:block rounded-md p-4 shadow-lg bg-white`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2">
            {mentor_types.map((link, index) => (
              <Link
                to={`/search${link.location}`}
                className="block py-1 px-2 capitalize hover:bg-lime-100 text-sm rounded-sm"
                onClick={handleClick}
                key={index}
              >
                {link.data}
              </Link>
            ))}
          </div>
          <div className="mt-4 mb-3 mx-auto flex justify-between items-center">
            <Link
              to={"/mentors"}
              className="bg-lime-800 text-white px-4 py-2 rounded-md capitalize font-medium hover:bg-lime-900 text-sm"
              onClick={handleClick}
            >
              View all mentors
            </Link>
            <Link
              to={"/info"}
              className="text-lime-800 underline px-4 py-2 rounded-md capitalize font-medium text-sm"
              onClick={handleClick}
            >
              more info
            </Link>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div
          className={`max-lg:flex max-lg:justify-between max-lg:items-center max-lg:py-3 max-lg:border-b inline capitalize font-semibold text-sm py-7 px-2 hover:cursor-pointer`}
          onClick={() => {
            toggle(2);
          }}
        >
          community{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-2 font-medium ${
              toggles[1] && "max-lg:rotate-180"
            } lg:group-hover:rotate-180`}
          />
        </div>
        <div
          className={`${
            toggles[1]
              ? "max-lg:h-auto max-lg:mb-3"
              : "max-lg:h-0 overflow-hidden max-lg:p-0"
          } lg:overflow-hidden lg:absolute lg:top-12 lg:-left-16 lg:min-w-[250px] group lg:hidden lg:group-hover:block rounded-md p-4 shadow-lg bg-white`}
        >
          <div className="">
            <div>
              <ul>
                {community.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.location}
                      className="p-2 capitalize hover:bg-lime-100 text-sm rounded-sm block"
                      onClick={handleClick}
                    >
                      <div className="font-medium">{item.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div
          className={`max-lg:flex max-lg:justify-between max-lg:items-center max-lg:py-3 max-lg:border-b inline capitalize font-semibold text-sm py-7 px-2 hover:cursor-pointer`}
          onClick={() => {
            toggle(3);
          }}
        >
          company{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`max-lg:ml-auto ml-2 font-medium ${
              toggles[2] && "max-lg:rotate-180"
            } lg:group-hover:rotate-180`}
          />
        </div>
        <div
          className={`${
            toggles[2]
              ? "max-lg:h-auto max-lg:mb-3"
              : "max-lg:h-0 overflow-hidden max-lg:p-0"
          } h-auto lg:absolute lg:top-12 lg:-left-[50%] lg:min-w-[250px] group lg:hidden lg:group-hover:block rounded-md shadow-lg bg-white overflow-hidden`}
        >
          <div className="">
            <ul className="p-5 flex-1">
              {company.map((item) => (
                <li key={item.title}>
                  <Link
                    to={`/${item.location}`}
                    className="py-2 px-2 capitalize hover:bg-lime-100 text-sm rounded-sm flex items-center gap-3"
                    onClick={handleClick}
                  >
                    <div className="font-medium">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {!user && (
        <div className="lg:hidden max-sm:flex-col max-lg:mt-3 flex gap-5 lg:items-center">
          <Link
            to={`/auth/signup-as-a-mentee`}
            className="bg-lime-800 text-white px-4 py-2 rounded-md capitalize font-medium hover:bg-lime-900"
            onClick={handleClick}
          >
            Get started
          </Link>
          <Link
            className={`capitalize font-semibold text-sm p-3`}
            to={`/auth/login`}
            onClick={handleClick}
          >
            login
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
