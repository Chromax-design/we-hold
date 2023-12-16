import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../config/config";

const Mentor = ({setLoader}) => {
  const [mentor, setMentors] = useState([]);
  const url = `${BASE_URL}/mentor/`;

  useEffect(() => {
    try {
      setLoader(true)
      const getMentors = async () => {
        const { data } = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setMentors(data.mentors);
        setLoader(false)
      };
      getMentors();
    } catch (error) {
      console.log(error);
      setLoader(false)
    }
  }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {mentor.map((item) => {
        return (
          <div className="shadow-lg rounded-lg overflow-hidden" key={item.id}>
            <div className="h-[400px] md:h-[300px] overflow-hidden">
              <img
                src={item?.image}
                className="min-h-full w-full object-cover"
              />
            </div>
            <div className="p-5 bg-white">
              <h2 className="capitalize font-semibold text-lg">
                {`${item?.firstName} ${item?.initials}`}.
              </h2>
              <span className="capitalize text-sm">{`${item?.industry}`}</span>
              <p className="my-4 text-sm line-clamp-4">{item?.bio}</p>
              <Link
                to={`/mentors/${item?.id}`}
                className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-lime-900 group"
              >
                view profile{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mentor;
