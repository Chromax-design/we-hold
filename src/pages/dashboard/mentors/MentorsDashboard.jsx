import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import noMentor from "/info_graphics/no-mentor.svg";
import edit from "/icons/edit.png";
import userIcon from "/icons/user_icon.png";
import useAuth from "../../../store/AuthStore";
import MentorInfoGraphic from "../../../components/dashboard/mentor/MentorInfoGraphic";
import { BASE_URL } from "../../../config/config";
import axios from "axios";

const NoMentors = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img src={noMentor} alt="" className="max-w-[350px]" />
      <h2 className="capitalize text-sm">You have no mentees yet</h2>
    </div>
  );
};

const MentorsDashboard = () => {
  const { user } = useAuth();
  const [myMentees, setMyMentees] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);

  const url = `${BASE_URL}/mentor/myMentees/${user.id}`;

  const MyMentees = async () => {
    const { data } = await axios.get(url);
    setMyMentees(data.subscribed);
  };

  const reviews = async () => {
    const url = `${BASE_URL}/mentor/reviews/${user.id}`;
    const { data } = await axios.get(url);
    setReviewCount(data.count);
    console.log(data);
  };

  useEffect(() => {
    MyMentees();
  }, []);

  useEffect(() => {
    reviews();
  }, []);

  return (
    <main className="bg-gray-50 p-2 sm:p-4">
      <MentorInfoGraphic
        user={user}
        myMentees={myMentees}
        reviewCount={reviewCount}
      />

      <section className="max-w-6xl mx-auto px-2 sm:px-4 py-7">
        <div className="lg:rounded-l-full bg-white rounded-md shadow-xl p-4 sm:p-10 grid lg:grid-cols-12 gap-7 items-start">
          <div className=" lg:col-span-3 p-2 mx-auto">
            <img
              src={user.image ? user.image : userIcon}
              alt="user image"
              className="rounded-full object-top h-[200px] w-[200px] object-cover shadow-md"
            />
          </div>
          <div className="lg:col-span-9 rounded-md">
            <div className="flex justify-between max-sm:flex-col gap-3">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-3xl capitalize font-medium">
                  {user?.firstName + " " + user?.initials}.
                </h2>
                <p className="capitalize max-sm:text-sm font-medium text-gray-700">
                  {user?.industry}
                </p>
              </div>
              <Link to={"settings"} className="flex items-center gap-1">
                <img src={edit} alt="" className="w-6" />
                <h4 className="capitalize font-medium">edit profile</h4>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between mt-5 gap-5">
             <div className="space-y-2">
                <h2 className="capitalize font-semibold">about</h2>
                <p className=" line-clamp-4 text-sm leading-6">
                  {user?.bio ? user.bio : "nothing yet"}
                </p>
              </div>
              <div className="space-y-3 md:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">phone number</h2>
                  <p className="text-sm">
                    +{user?.telNumber ? user?.telNumber : "Nothing yet..."}
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">email address</h2>
                  <p className="text-sm">
                    {user?.email ? user?.email : "Nothing yet..."}
                  </p>
                </div>
              </div>
              <div className="space-y-3 lg:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">location</h2>
                  <p className="text-sm">
                    {user?.country ? user?.country : "Nothing yet..."}
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">industry</h2>
                  <p className="capitalize text-sm">
                    {user?.industry ? user?.industry : "Nothing yet..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="p-2 sm:p-5 bg-white shadow-sm space-y-4">
          <h1 className="capitalize text-2xl font-medium">
            my mentees
          </h1>
          {myMentees.length == 0 ? (
            <NoMentors />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {myMentees.map((mentor) => {
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
                      <div>
                        <Link
                          to={`/mentor/dashboard/chat`}
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

export default MentorsDashboard;
