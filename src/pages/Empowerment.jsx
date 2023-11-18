import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Empower from "../assets/icons/info_icons/empowerment.svg";

const Empowerment = () => {
  return (
    <main>
      <section className="py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-4xl mx-auto items-center">
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-5">
              We Hold A Hand Equip Youth Initiative
            </h1>
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
          <img src={Empower} alt="" className="max-md:max-w-[350px] mx-auto" />
        </div>
      </section>
      <section className="bg-gray-50 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl capitalize text-center font-semibold mb-5">
            Join the waitlist
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              Welcome to We Hold A Hand Youth development initiative, a
              transformative initiative dedicated to bridging the digital divide
              and empowering less privileged individuals. We strive to provide
              essential equipment, such as laptops, computers, cameras, and
              lighting, to enable them to access online learning opportunities
              and explore remote work options.
            </p>
            <p className="text-lg">
              By removing barriers to entry, we aim to unlock the potential
              within these individuals and empower them to learn, acquire new
              skills, and find meaningful employment in the digital era.
              Together, let's create a level playing field and open doors to a
              brighter future for all, one device at a time.
            </p>
            <p className="text-lg">
              Join us today and make a lasting impact! If you require help,
              please join the waiting list, and we will contact you as soon as
              possible.
            </p>
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
        </div>
      </section>
    </main>
  );
};

export default Empowerment;
