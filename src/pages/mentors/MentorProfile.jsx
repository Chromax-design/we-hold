import React, { useEffect, useState } from "react";
// import user from "../../assets/mentors/mentor-10.jpg";
import marker from "../../assets/icons/map.png";
import userIcon from "../../assets/icons/user_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { mentees } from "../../data/Mentees";
import mentor12 from "../../assets/mentors/mentor-12.jpg";

import { BASE_URL } from "../../config/config";
import axios from "axios";

const MentorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mentor, setMentor] = useState([]);
  const url = `${BASE_URL}/mentor/${id}`;

  useEffect(() => {
    try {
      const getMentor = async () => {
        const { data } = await axios.get(url);
        if (data.profile.length == 0) {
          navigate("/404");
        }
        setMentor(data.profile[0]);
      };

      getMentor();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="bg-gray-50 space-y-5 py-10">
      <section className="max-w-5xl mx-auto ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
        <div className="lg:grid grid-cols-12 gap-10 max-lg:space-y-2">
          <div className="col-span-3">
            <img
              src={mentor?.image}
              alt=""
              className="rounded-full shadow-md border-2 border-lime-700 w-full max-lg:max-w-md max-lg:mx-auto"
            />
          </div>
          <div className="col-span-9">
            <div className="pt-3 flex flex-col gap-5 max-lg:text-center lg:justify-between lg:flex-row max-lg:items-center">
              <div>
                <h2 className="capitalize text-2xl font-semibold">
                  {`${mentor?.firstName} ${mentor?.initials}`}.
                </h2>
                <p className="capitalize font-medium text-lg">
                  {mentor?.industry}
                </p>
                <div className="flex gap-1 items-center max-lg:justify-center">
                  <img src={marker} alt="" className="w-[20px]" />
                  <p className="capitalize text-sm font-medium">{`${mentor.country}`}</p>
                </div>
              </div>
              <div className="flex flex-col lg:items-center">
                <span className="text-3xl font-semibold">$50</span>
                <span className="text-xs font-semibold">monthly</span>
              </div>
            </div>
            <div className="flex flex-col text-center mt-7 gap-4 lg:flex-row">
              <div className="flex-1 ring-1 ring-gray-200 p-2 bg-gray-50">
                <span className="font-bold text-xl">20 yrs</span>
                <h4 className=" leading-3 text-sm capitalize">experience</h4>
              </div>
              <div className="flex-1 ring-1 ring-gray-200 p-2 bg-gray-50 flex place-content-center place-items-center">
                <h4 className=" leading-3 text-lg font-semibold capitalize p-2">
                  quick responder
                </h4>
              </div>
              <Link
                to={""}
                className="bg-lime-800 text-white px-5 p-2 rounded-sm capitalize font-medium hover:bg-lime-900 flex-1 ring-1 ring-gray-200 flex place-items-center place-content-center"
              >
                + subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl grid grid-cols-12 mx-auto space-y-2 gap-5 p-4">
        <div className="col-span-12 md:col-span-8 bg-white ring-1 ring-gray-100 rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="capitalize text-2xl font-semibold">bio</h2>
            <div className=" text-sm bg-gray-100 p-2 font-semibold">
              {" "}
              verified
            </div>
          </div>
          <p className="text-sm leading-6">{mentor?.bio}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h3 className="capitalize font-semibold text-lg">skills:</h3>
          <div className="flex items-center flex-1 justify-around text-center capitalize font-medium gap-3 flex-wrap mt-5 text-xs">
            {mentor?.skills?.split(",").map((skill, index) => {
              return (
                <div
                  className="flex-1 p-3 ring-1 ring-gray-100 shadow-sm bg-white "
                  key={index}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 bg-white ring-1 ring-gray-100 rounded-md p-4">
          <h3 className="capitalize font-semibold text-lg">
            how i can be of help?
          </h3>
          <p className="text-sm leading-6">{mentor.How_help}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-4 space-y-2">
        <div className="ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
          <h2 className="capitalize text-xl font-semibold mb-5">
            mentee reviews
          </h2>
          <div className="space-y-7">
            {mentees.slice(0, 2).map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-2 items-center">
                    <img src={userIcon} alt="" className="w-[50px]" />
                    <div className="capitalize">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-xs tracking-wider">june 12 1911</p>
                    </div>
                  </div>
                  <p className="italic mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis labore voluptates, facere similique ullam debitis
                    repudiandae quam molestias obcaecati magnam.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentorProfile;
