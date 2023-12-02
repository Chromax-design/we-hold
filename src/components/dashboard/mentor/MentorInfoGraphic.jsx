import React from "react";
import img1 from "../../../assets/icons/dashboards/mentees.png";
import img2 from "../../../assets/icons/dashboards/review.png";
import img3 from "../../../assets/icons/dashboards/time.png";

const createDate = (timestamp, timeZone = "UTC") => {
  if (timestamp < 1e12) {
    timestamp *= 1000;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric", timeZone };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const MentorInfoGraphic = ({ user }) => {
  const MenteeAdmin = [
    {
      id: 1,
      img: img1,
      title: "member since",
      value: `${createDate(user?.created_at)}`,
    },
    { id: 2, img: img2, title: "total mentors", value: `10` },
    { id: 3, img: img3, title: "reviews", value: "10" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4 py-7">
      {user.updated == 0 && (
        <div className="bg-red-600 max-sm:text-sm text-white p-3 mb-5 rounded-sm shadow-sm">
          Your application is still pending. Please update your profile!!!
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MenteeAdmin.map((item) => {
          return (
            <div
              className="bg-lime-700 px-5 py-7 shadow-xl rounded-md text-white flex justify-between items-center gap-3"
              key={item.id}
            >
              <img
                src={item.img}
                alt=""
                className="max-w-[60px] sm:max-w-[70px]"
              />
              <div className="text-right space-y-2">
                <h3 className="capitalize sm:text-lg font-medium text-gray-50">
                  {item.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-semibold">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MentorInfoGraphic;
