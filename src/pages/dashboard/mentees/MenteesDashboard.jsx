import React, { useEffect, useState } from "react";
import noMentor from "../../../assets/dashboard/no mentor.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import edit from "../../../assets/icons/dashboards/edit.png";
import userIcon from "../../../assets/icons/user_icon.png";
import useAuth from "../../../store/AuthStore";
import { getUserData } from "../../../utils/handlers";
import { BASE_URL } from "../../../config/config";
import axios from "axios";
import MenteeInfoGraphic from "../../../components/dashboard/mentee/MenteeInfoGraphic";

const NoMentors = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img src={noMentor} alt="" className="max-w-[350px]" />
      <h2 className="capitalize text-lg">You have no mentors yet</h2>
    </div>
  );
};

const MenteesDashboard = () => {
  const { user, setUser } = useAuth();
  const [myMentors, setMyMentors] = useState([]);

  useEffect(() => {
    getUserData(user.role, user.id, user.token, setUser);
  }, []);

  const url = `${BASE_URL}/mentee/myMentors/${user.id}`;

  const MyMentors = async () => {
    const { data } = await axios.get(url);
    setMyMentors(data.subscribed);
  };

  useEffect(() => {
    MyMentors();
  }, []);

  return (
    <main className="bg-gray-50 p-4">
      <MenteeInfoGraphic user={user} mymentors={myMentors} />

      <section className="max-w-6xl mx-auto px-2 sm:px-4 py-7 ">
        <div className="bg-white rounded-md shadow-xl p-4 sm:p-10 grid lg:grid-cols-12 gap-7 items-start">
          <div className=" lg:col-span-3 rounded-full p-2 bg-gray-100 shadow-lg  mx-auto">
            <img
              src={user.image ? user.image : userIcon}
              alt="user image"
              className="w-full sm:w-[220px] sm:h-[220px] object-cover max-lg:mx-auto rounded-full"
            />
          </div>
          <div className="lg:col-span-9 rounded-md">
            <div className="flex justify-between max-sm:flex-col gap-3">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl capitalize font-semibold">
                  {user?.firstName + " " + user?.initials}.
                </h2>
              </div>
              <Link to={"settings"} className="flex items-center gap-1">
                <img src={edit} alt="" className="w-6" />
                <h4 className="capitalize font-medium">edit profile</h4>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between mt-5 gap-5">
              <div className="space-y-2">
                <h2 className="capitalize font-semibold">about</h2>
                <p className=" line-clamp-5">
                  {user?.bio ? user.bio : "nothing yet"}
                </p>
              </div>
              <div className="space-y-3 md:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">phone number</h2>
                  <p className="max-sm:text-sm">
                    +{user?.telNumber ? user.telNumber : "Nothing yet..."}
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">email address</h2>
                  <p className="max-sm:text-sm">
                    {user?.email ? user.email : "Nothing yet..."}
                  </p>
                </div>
              </div>
              <div className="space-y-3 lg:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">location</h2>
                  <p className="max-sm:text-sm">
                    {user?.country ? user.country : "Nothing yet..."}
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">mentorship</h2>
                  <p className="capitalize max-sm:text-sm">
                    {user?.mentor_type ? user.mentor_type : "Nothing yet..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto p-2 sm:px-4 py-7 ">
        <div className="p-2 sm:p-5 bg-white shadow-sm space-y-4">
          <h1 className="capitalize text-2xl sm:text-3xl font-medium">
            my mentors
          </h1>
          {myMentors.length == 0 ? (
            <NoMentors />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {myMentors.map((mentor) => {
                return (
                  <div
                    className="shadow-lg rounded-lg overflow-hidden"
                    key={mentor.id}
                  >
                    <div className="h-[400px] md:h-[300px] overflow-hidden">
                      <img
                        src={mentor?.image}
                        className="min-h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5 bg-white">
                      <h2 className="capitalize font-semibold text-lg">
                        {`${mentor?.firstName} ${mentor?.initials}`}.
                      </h2>
                      <p className="my-4 text-sm line-clamp-4">{mentor?.bio}</p>
                      <div className="space-y-2">
                        <Link
                          to={`/mentors/${mentor?.id}`}
                          className="bg-lime-800 inline-block text-xs text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-lime-900 group"
                        >
                          view profile{" "}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
                          />
                        </Link>{" "}
                        <br />
                        <Link
                          to={`/mentee/dashboard/chat`}
                          className="bg-amber-800 inline-block text-xs text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-amber-900 group"
                        >
                          view in chat{" "}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MenteesDashboard;
