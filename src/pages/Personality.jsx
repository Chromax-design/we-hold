import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Video4 } from "../components/Video";
import check from "../assets/icons/check.png";
import { personality_test } from "../data/Information";
import useAuth from "../store/AuthStore";

const Personality = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <main>
      <section className="py-20 bg-gray-50 px-3">
        <div className="max-w-6xl grid max-md:grid-cols-1 grid-cols-3 gap-10 items-center mx-auto">
          <div className="pl-5">
            <h1 className="max-lg:text-4xl text-5xl font-black capitalize mb-5">
              Know Your Personality Triat!
            </h1>
            <Link
              to={"https://www.16personalities.com"}
              className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
            >
              take a free test
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
              />
            </Link>
          </div>
          <div className=" col-span-2 bg-[url('./assets/video/poster3.jpg')] bg-cover bg-center">
            <Video4 />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="capitalize text-center text-5xl font-semibold">
            What is a Personality test?
          </h2>
          <div className="space-y-5 mt-5 text-lg">
            <p>
              A personality test is a tool designed to assess various aspects of
              an individual's personality traits, characteristics, and
              behaviors. Personality tests are used in a variety of contexts,
              such as in the workplace, education, and clinical settings.
            </p>
            <p>
              There are various types of personality tests, but some of the most
              common ones include self-report inventories, projective tests, and
              behavioral assessments. Self-report inventories are questionnaires
              that ask individuals to rate themselves on various personality
              traits. Projective tests, on the other hand, present individuals
              with ambiguous stimuli, such as pictures or phrases, and ask them
              to provide their interpretations, which can reveal unconscious
              aspects of their personality. Behavioral assessments involve
              observing an individual's behavior in certain situations to
              identify personality traits such as assertiveness or social
              skills.
            </p>
            <Link
              to={!user ? "" : "https://www.16personalities.com"}
              className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
            >
              take a free test
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="capitalize text-center text-5xl font-semibold mb-10">
            {" "}
            4 reasons why Personality tests are important
          </h2>
          <div className="max-md:max-w-xl md:max-w-4xl mx-auto space-y-5 ">
            {personality_test.map((item) => {
              return (
                <div
                  className="flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-10 space-y-5"
                  key={item.id}
                >
                  <div key={item.id} className="space-y-4">
                    <div className="flex gap-3 items-center">
                      <img src={check} alt="" className="w-[25px]" />{" "}
                      <span className="text-lg font-semibold ">
                        {item.title}
                      </span>
                    </div>
                    <p>{item.info}</p>
                  </div>
                  <img src={item.img} alt="" className="max-w-[350px]" />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link
              to={"https://vark-learn.com/the-vark-questionnaire/"}
              type="button"
              className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
            >
              take a free test
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

export default Personality;
