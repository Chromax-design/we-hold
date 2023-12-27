import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../config/config";
import axios from "axios";

const Mentors = () => {
  const [mentor, setMentors] = useState([]);
  const url = `${BASE_URL}/mentor`;
  useEffect(() => {
    try {
      const getMentors = async () => {
        const { data } = await axios.get(url, {
          headers: { "Content-Type": "application/json" },
        });
        setMentors(data.mentors);
      };
      getMentors();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <section className="max-w-5xl mx-auto my-5 py-10 px-3 shadow-sm rounded-sm max-lg:max-w-3xl ">
        <h2 className="font-medium capitalize text-2xl mb-5">all mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-7 p-4 md:p-0">
          {mentor.map((item, index) => {
            return (
              <div
                className="shadow-lg rounded-lg overflow-hidden grid lg:grid-cols-12"
                key={index}
              >
                <div className="h-[370px] md:h-[270px] overflow-hidden lg:col-span-3">
                  <img
                    src={item?.image}
                    className="min-h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-7 bg-white lg:col-span-9">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <h2 className="capitalize font-semibold text-lg">
                        {`${item?.firstName} ${item?.initials}.`}
                      </h2>
                      <span className="capitalize font-medium text-sm tracking-wide">
                        {item.industry}
                      </span>
                    </div>
                    <div className="font-medium">
                      {`$${item.price ?? "50"}`}/Month
                    </div>
                  </div>
                  <p className="mb-4 mt-2 max-lg:text-sm line-clamp-4 break-words">
                    {item.bio}
                  </p>
                  <Link
                    to={`/mentors/${item.id}`}
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
      </section>
    </main>
  );
};

export default Mentors;
