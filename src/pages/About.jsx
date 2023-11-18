import React from "react";
import Button from "../components/Button";
import { Video2 } from "../components/Video";
import Admin from "../components/Admin";
import mentor from "../assets/mentor.svg";
import vision from "../assets/vision.svg";
import purpose from "../assets/purpose.svg";

const About = () => {
  return (
      <main>
        <section className="py-10 bg-gray-50 px-3">
          <div className="max-w-6xl grid max-md:grid-cols-1 grid-cols-3 gap-10 items-center mx-auto">
            <div className="pl-5">
              <h1 className="max-lg:text-4xl text-5xl font-black capitalize mb-5">about us</h1>
              <p className="text-lg">
                The #1 Platform for young people to get support and guidance
                from reputable Mentors
              </p>
            </div>
            <div className=" col-span-2 bg-[url('./assets/video/poster2.jpg')] bg-cover bg-center">
              <Video2 />
            </div>
          </div>
        </section>

        <div className="space-y-10 py-10">
        <section className="px-4">
          <div className="max-w-4xl mx-auto items-center grid max-sm:grid-cols-1 grid-cols-2">
            <div className="max-md:order-2">
              <h2 className="text-capitalize font-bold text-4xl capitalize mb-5">
                our mission
              </h2>
              <p className="text-lg">
                Finding the right mentors to help mentees reach their
                professional and business objectives, and enabling the path to
                success through structured Mentoring.
              </p>
            </div>
            <img src={mentor} alt="" className="max-md:order-1" />
          </div>
        </section>

        <section className="px-4">
          <div className="max-w-4xl mx-auto grid max-sm:grid-cols-1 grid-cols-2 gap-5">
            <div className="shadow-xl p-5 rounded-md ring ring-black">
              <h2 className="text-capitalize font-bold text-2xl capitalize mb-5">
                our mentors
              </h2>
              <p className="text-lg">
                Our mentors are truly passionate about 2 things, their field of
                work and seeing their mentee’s grow
              </p>
            </div>
            <div className="p-5 shadow-xl rounded-md ring ring-black">
              <h2 className="capitalize text-2xl font-bold mb-5">
                our team
              </h2>
              <p className="text-lg">
                Our team has always had a natural passion for seeing people grow
                and an affinity to assist young professionals and entrepreneurs
                reach their full potentials.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="max-w-4xl mx-auto items-center grid max-sm:grid-cols-1 grid-cols-2">
            <img src={vision} alt="" className="" />
            <div>
              <h2 className="text-capitalize font-bold text-4xl capitalize mb-5">
                our vision
              </h2>
              <p className="text-lg">
                To connect over ONE BILLION young people Worldwide spearhead
                their way to success through guided and quality mentorship in
                any field
              </p>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="max-w-4xl mx-auto items-center grid max-sm:grid-cols-1 grid-cols-2">
            <div className="max-sm:order-2">
              <h2 className="text-capitalize font-bold text-4xl capitalize mb-5">
                our purpose
              </h2>
              <p className="text-lg">
                Creating a bridge for young people to move through life with
                clarity and confidence in order to pursue a meaningful and
                successful career
              </p>
            </div>
            <img src={purpose} alt="" className="max-md:order-1" />
          </div>
        </section>
        

        <section className="max-w-5xl mx-auto p-5">
          <h2 className="capitalize text-4xl font-semibold text-center mb-5">meet the team</h2>
          <Admin />
        </section>
        </div>
      </main>
  );
};

export default About;
