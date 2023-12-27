import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import info from "/info_graphics/info.svg";
import { information } from "../data/Information";
import check from "/icons/check.png";
import { Video3 } from "../components/Video";

const Info = () => {
  return (
    <main>
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 max-w-4xl mx-auto p-4 items-center">
          <div className="space-y-3">
            <p className="text-xl lg:text-2xl font-medium">
              Thank you for your interest in us finding you a Mentor.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold">
              You're Now One Step Closer To Living A Life That Excites You!
            </p>
            <Link to={'/auth/signup-as-a-mentee'} className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group">
              get started
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
              />
            </Link>
          </div>
          <img src={info} alt="" className="max-md:max-w-[350px] mx-auto" />
        </div>
      </section>

      <section className=" bg-gray-50 px-4 py-20">
        <h2 className="text-2xl font-medium text-center capitalize mb-5">
          10 situations where you need a Mentor
        </h2>
        <div className="max-md:max-w-xl md:max-w-4xl mx-auto space-y-5">
          {information.map((item) => {
            return (
              <div
                className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10 space-y-5"
                key={item.id}
              >
                <div key={item.id} className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <img src={check} alt="" className="w-[25px]" />{" "}
                    <span className="text-lg font-semibold ">{item.title}</span>
                  </div>
                  <p>{item.info}</p>
                </div>
                <img src={item.img} alt="" className="max-w-[350px]" />
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-20 px-3">
        <div className="max-w-3xl lg:max-w-6xl grid max-lg:grid-cols-1 grid-cols-3 gap-10 items-center mx-auto">
          <div className="pl-5">
            <h1 className="text-2xl font-medium capitalize mb-5">
              Book a "Strategy call" to speak to one of our representatives
            </h1>
            <p className="mb-5">
              Are you struggling to decide on the right mentor for yourself? Are
              you not sure about how mentoring works and want more clarity?
              Speak to one of our representatives to answer all your questions
              and coach you on the best Mentor that suits your requirements
            </p>
            <Link className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group">
              Book a call
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
              />
            </Link>
          </div>
          <div className=" col-span-2 bg-[url('./assets/video/poster2.jpg')] bg-cover bg-center">
            <Video3 />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Info;
