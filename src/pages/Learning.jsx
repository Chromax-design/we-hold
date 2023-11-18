import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Learner from "../assets/learning.svg";
import check from "../assets/icons/check.png";
import { learningStyleInfo } from "../data/Information";

const Learning = () => {
  return (
    <main>
      <section className="py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-4xl mx-auto items-center">
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-5">
              Know Your Learning Style
            </h1>
            <Link
              to={"https://vark-learn.com/the-vark-questionnaire/"}
              className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
            >
              take a free test
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
              />
            </Link>
          </div>
          <img src={Learner} alt="" className="max-md:max-w-[350px] mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-3xl sm:text-5xl text-center font-semibold capitalize mb-5">
            What are Learning styles?
          </h2>
          <p className="text-center text-lg">
            Learning styles refer to the different ways in which individuals
            prefer to receive, process, and retain information. They are often
            thought to be personal preferences or tendencies that affect how
            people learn best. There are several commonly recognized learning
            styles, including:
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-md:max-w-xl md:max-w-4xl mx-auto space-y-5 ">
          {learningStyleInfo.map((item) => {
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
        <div className="flex justify-center items-center">
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
      </section>

      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl text-center font-semibold mb-10">
            4 Reasons WHY Knowing Your Learning Style Is Important
          </h2>
          <div className="space-y-5 max-md:columns-1 columns-2 gap-7 md:text-justify">
            <div>
              <div className="flex gap-3 items-center mb-3">
                <img src={check} alt="" className="w-[25px]" />{" "}
                <h3 className="text-lg font-semibold">Enhanced Learning</h3>
              </div>
              <p>
                Knowing your learning style can help you optimize your learning
                process. By understanding how you best process and retain
                information, you can tailor your study techniques and strategies
                to align with your learning style. For example, if you are a
                visual learner, you may find it beneficial to use visual aids
                like diagrams or videos to help you understand and remember
                information more effectively.
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center mb-3">
                <img src={check} alt="" className="w-[25px]" />{" "}
                <h3 className="text-lg font-semibold ">
                  Improved Study Strategies
                </h3>
              </div>
              <p>
                Knowing your learning style can help you develop study
                strategies that align with your preferences. For instance, if
                you are an auditory learner, you may find it helpful to record
                lectures or discussions and listen to them repeatedly to
                reinforce your understanding. If you are a kinesthetic learner,
                you may benefit from incorporating physical activities or
                hands-on experiences into your learning process.
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center mb-3">
                <img src={check} alt="" className="w-[25px]" />{" "}
                <h3 className="text-lg font-semibold ">
                  Increased Self-Awareness
                </h3>
              </div>
              <p>
                Understanding your learning style can foster self-awareness and
                self-reflection. It can help you recognize your strengths and
                weaknesses as a learner, and enable you to better advocate for
                your learning needs. Knowing your learning style can also help
                you understand why certain study methods or instructional
                approaches may work better for you than others, which can lead
                to a more positive and proactive learning experience.
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center mb-3">
                <img src={check} alt="" className="w-[25px]" />{" "}
                <h3 className="text-lg font-semibold ">
                  Efficient Time Management
                </h3>
              </div>
              <p>
                Being aware of your learning style can help you manage your time
                more efficiently. By utilizing study strategies that align with
                your learning style, you can optimize your study time and avoid
                wasting time on methods that may not be as effective for you.
                This can result in more focused and productive learning
                sessions, leading to better retention of information and
                improved academic performance.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Link
              type="button"
              className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
              to={"https://vark-learn.com/the-vark-questionnaire/"}
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

export default Learning;
