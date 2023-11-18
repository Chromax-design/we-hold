import React from "react";
import check from "../assets/icons/check.png";
import ComingSoon from "../components/ComingSoon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Collaborate = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20 space-y-7 px-4">
      <ComingSoon />

      <section className="max-w-4xl mx-auto space-y-5">
        <p className="text-lg text-center font-medium">
          Introducing We Hold A Hand Collaboration Hub, your ultimate space for
          entrepreneurial connections.
        </p>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium ">
            Our innovative platform connects aspiring entrepreneurs with
            like-minded individuals and potential investors, fostering the
            perfect environment for collaboration and growth.
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium ">
            Find your dream co-founder, business partner, or investor and bring
            your business ideas to life. Success starts here!
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img src={check} alt="" className="w-[25px]" />
          <span className="text-lg font-medium">
            Networking events, chat-rooms, private parties for members.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to={""}
            className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
          >
            join the wait list
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Collaborate;
