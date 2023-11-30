import React from "react";
import MiniProfile from "../../../components/dashboard/MiniProfile";
import useAuth from "../../../store/AuthStore";

const MentorsHistory = () => {
    const {user} = useAuth()
    return (
        <main className="bg-gray-50 sm:p-4">
        <section className="max-w-6xl mx-auto px-2 sm:px-4 py-7 ">
          <div className="grid gap-4 grid-cols-12">
            <MiniProfile user={user}/>
            <div className="col-span-12 lg:col-span-9 bg-white p-2 sm:p-5 rounded-md shadow-md space-y-10">
              <h1 className="capitalize text-2xl sm:text-4xl font-medium">
                mentorship history
              </h1>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-10">
                <h2 className="capitalize font-medium text-lg sm:text-xl">
                  My mentorships
                </h2>
                <div className="flex gap-4 text-center mt-5">
                  <div>
                    <h3 className="font-bold text-2xl sm:text-3xl">0</h3>
                    <p className="capitalize text-gray-500 text-sm">done</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl sm:text-3xl">0</h3>
                    <p className="capitalize text-gray-500 text-sm">in progress</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center  ">
                <h3 className="capitalize text-lg sm:text-xl font-medium">total mentorships:</h3>
                <span className="text-2xl font-semibold">20</span>
              </div>
              <div className=" bg-lime-900 text-white p-3 sm:p-5 rounded-md shadow-sm mt-10">
                <h4 className="font-semibold text-xl">Disclaimer !!!</h4>
                <p className=" font-normal mt-3">
                  The mentorship sessions provided are intended for informational
                  and guidance purposes only. By engaging in the mentorship
                  sessions, both mentors and mentees acknowledge that they have
                  read and understood this disclaimer and agree to release the
                  mentors from any liability or claims arising out of the
                  mentorship relationship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default MentorsHistory;
