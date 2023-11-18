import React, { useEffect } from "react";
import noMentor from "../../../assets/dashboard/no mentor.svg";
import { Link} from "react-router-dom";

import edit from "../../../assets/icons/dashboards/edit.png";
import userIcon from "../../../assets/icons/user_icon.png"
import useAuth from "../../../store/AuthStore";
import DisplayInfo from "../../../components/dashboard/DisplayInfo";
import { getUserData } from "../../../utils/handlers";

const MenteesDashboard = () => {
  const {user, setUser}= useAuth();

  useEffect(()=>{
    getUserData(user.role, user.id, user.token, setUser)
  }, [])

  return (
    <main className="bg-gray-50 p-4">
      <DisplayInfo user={user} />

      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="bg-white rounded-md shadow-xl p-10 grid lg:grid-cols-12 gap-7 items-start">
          <div className=" lg:col-span-3 rounded-full p-2 bg-gray-100 shadow-lg  mx-auto">
            <img src={user.image ? user.image : userIcon } alt="user image" className="w-[220px] h-[220px] object-cover max-lg:mx-auto rounded-full" />
          </div>
          <div className="lg:col-span-9 rounded-md">
            <div className="flex justify-between max-sm:flex-col gap-3">
              <div className="space-y-1">
                <h2 className="text-3xl capitalize font-semibold">{user?.firstName + ' ' + user?.initials}.</h2>
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
                  {user?.bio ? user.bio : 'nothing yet'}
                </p>
              </div>
              <div className="space-y-3 md:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">phone number</h2>
                  <p>+{user?.telNumber? user.telNumber : 'Nothing yet...'}</p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">email address</h2>
                  <p>{user?.email? user.email : 'Nothing yet...'}</p>
                </div>
              </div>
              <div className="space-y-3 lg:text-right">
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">location</h2>
                  <p>{user?.country? user.country : 'Nothing yet...'}</p>
                </div>
                <div className="space-y-1">
                  <h2 className="capitalize font-semibold">mentorship</h2>
                  <p className="capitalize">{user?.mentor_type? user.mentor_type : 'Nothing yet...'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-7 ">
        <div className="p-5 bg-white shadow-sm">
          <h1 className="capitalize text-3xl sm:text-4xl font-medium">my mentors</h1>
          <div className="flex flex-col justify-center items-center mt-20">
            <img src={noMentor} alt="" className="max-w-[350px]" />
            <h2 className="capitalize text-lg">
              You have no mentors yet
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenteesDashboard;
