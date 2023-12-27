import React from "react";
import { Link } from "react-router-dom";
import check from "/icons/check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const inspire = [
  {
    id: 1,
    title: "Personal and Professional Growth",
    info: "As a mentor, you will be constantly challenged to think critically, communicate effectively, and lead by example. This can lead to personal and professional growth in areas such as leadership, communication, and problem-solving.",
  },
  {
    id: 2,
    title: "Sense of Fulfillment",
    info: "Mentoring can be a rewarding experience as you get to make a positive impact on someone's life. By sharing your knowledge and experience, you can help someone achieve their goals, overcome challenges, and reach their full potential.",
  },
  {
    id: 3,
    title: "Networking Opportunities",
    info: "Mentoring can provide opportunities to connect with other professionals in your field, including fellow mentors, mentees, and industry experts. This can help you build relationships and expand your network.",
  },
  {
    id: 4,
    title: "Improved Communication Skills",
    info: "As a mentor, you will need to communicate effectively and clearly to share your knowledge and provide guidance to your mentee. This can help you develop and improve your communication skills, which can be valuable in both personal and professional settings.",
  },
  {
    id: 5,
    title: "Legacy Building",
    info: "Mentoring can leave a lasting impact on the lives of your mentees and can contribute to building a positive legacy. Your mentee may go on to achieve great things, and your influence can be felt for years to come.",
  },
];

const Inspire = () => {
  return (
    <div className="space-y-4">
      {inspire.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex gap-3 items-center">
              <img src={check} alt="" className="w-[25px]" />{" "}
              <span className="text-lg font-semibold">{item.title}</span>
            </div>
            <p>{item.info}</p>
          </div>
        );
      })}
      <Link to={'/auth/signup-as-a-mentor'} className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group">
        become a mentor
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
        />
      </Link>
    </div>
  );
};

export default Inspire;
