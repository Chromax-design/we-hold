import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../config/config";
import marker from "../../assets/icons/map.png";
import userIcon from "../../assets/icons/user_icon.png";
import axios from "axios";
import useLoader from "../../store/loaderStore";
import PreLoader from "../../components/PreLoader";
import useAuth from "../../store/AuthStore";
import { handleReviews } from "../../utils/menteeHandlers";
import checkOutStore from "../../store/checkOutStore";
import checked from "../../assets/icons/checked.png";

const createDate = (timestamp, timeZone = "UTC") => {
  if (timestamp < 1e12) {
    timestamp *= 1000;
  }

  const date = new Date(timestamp);
  const options = { year: "numeric", day: "numeric", month: "short", timeZone };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const MentorProfile = () => {
  const { user } = useAuth();
  const { setCheckOut } = checkOutStore();
  const navigate = useNavigate();
  const initialState = { review: "" };
  const [review, setReview] = useState(initialState);
  const [allReviews, setAllReviews] = useState([]);
  const { Loader, setLoader } = useLoader();
  const { id } = useParams();
  const [mentor, setMentor] = useState([]);
  const [sub, setSub] = useState(true);

  

  useEffect(() => {
    try {
      const getMentor = async () => {
        const url = `${BASE_URL}/mentor/${id}`;
        setLoader(true);
        const { data } = await axios.get(url);
        if (data.profile.length == 0) {
          navigate("/404");
        }
        const details = data.profile[0];
        const checkOutData = {
          name: `${details.firstName} ${details.initials}`,
          mentorId: details.id,
          menteeId: user.id,
          price: details.price ?? "50",
          description: "mentor subscription",
          quantity: 1,
        };
        setCheckOut(checkOutData);
        setMentor(details);
        setLoader(false);
      };

      getMentor();
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    try {
      const url = `${BASE_URL}/mentee/reviews/${mentor.id}`;
      setLoader(true);
      const getReviews = async () => {
        const { data } = await axios.get(url);
        setAllReviews(data.reviews);
        setLoader(false);
      };
      getReviews();
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }, [mentor]);

  useEffect(() => {
    try {
      const url = `${BASE_URL}/mentee/checksubscribed/${mentor.id}/${user.id}`;
      const subCheck = async () => {
        const { data } = await axios.get(url);
        // console.log(data)
        setSub(data.expired);
      };
      subCheck();
    } catch (error) {
      console.log(error);
    }
  }, [mentor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      review: review.review,
      mentee_Id: user.id,
      mentor_Id: mentor.id,
    };
    handleReviews(reviewData, setLoader);
    setReview(initialState);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <main className="bg-gray-50 space-y-5 py-10">
        <section className="max-w-5xl mx-auto ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
          <div className="lg:grid grid-cols-12 gap-10 max-lg:space-y-2">
            <div className="col-span-3">
              <img
                src={mentor?.image ? mentor.image : userIcon}
                alt=""
                className="rounded-full shadow-md border-2 border-lime-700 w-full max-lg:max-w-sm max-lg:mx-auto"
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
                    <p className="capitalize text-sm font-medium">{`${mentor?.country}`}</p>
                  </div>
                </div>
                <div className="flex flex-col lg:items-center">
                  <span className="text-3xl font-semibold">$50</span>
                  <span className="text-xs font-semibold">monthly</span>
                </div>
              </div>
              <div className="flex flex-col text-center mt-7 gap-4 lg:flex-row">
                <div className="flex-1 ring-1 ring-gray-200 p-2 bg-gray-50">
                  <span className="font-bold text-xl">
                    {mentor?.yrs_of_experience} yrs
                  </span>
                  <h4 className=" leading-3 text-sm capitalize">experience</h4>
                </div>
                <div className="flex-1 ring-1 ring-gray-200 p-2 bg-gray-50 flex place-content-center place-items-center">
                  <h4 className=" leading-3 text-lg font-semibold capitalize p-2">
                    quick responder
                  </h4>
                </div>
                {sub == true ? (
                  <Link
                    to={`/checkout/${mentor?.id}`}
                    className="bg-lime-800 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-lime-900  ring-1 ring-gray-200  flex place-items-center place-content-center"
                  >
                    + subscribe
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="bg-lime-800 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-lime-900  ring-1 ring-gray-200  flex place-items-center place-content-center"
                  >
                    <img src={checked} alt="" width={25} className="mr-2" />{" "}
                    <span>subscribed</span>
                  </button>
                )}
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
            <p className="text-sm leading-6">{mentor?.How_help}</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto p-4 space-y-2">
          <div className="ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
            <h2 className="capitalize text-xl font-semibold mb-5">
              mentee reviews
            </h2>
            <div className="space-y-7">
              {allReviews.length == 0 ? (
                <p className="text-lg capitalize italic">No reviews yet...</p>
              ) : (
                allReviews.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex gap-2 items-center">
                        <img src={item.image} alt="" className="w-[50px]" />
                        <div className="capitalize">
                          <h3 className="font-semibold">{`${item?.firstName} ${item?.initials}`}</h3>
                          <p className="text-xs tracking-wider">
                            {createDate(item.created_at)}
                          </p>
                        </div>
                      </div>
                      <p className="italic mt-3 text-sm first-letter:uppercase">
                        {item?.review}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {sub == false ? (
          <section className="max-w-4xl mx-auto p-4 space-y-2">
            <div className="ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
              <h2 className="capitalize text-xl font-semibold mb-5">
                write a review
              </h2>
              <form action="" className="space-y-2" onSubmit={handleSubmit}>
                <textarea
                  name="review"
                  className=" mt-3 p-2 rounded-sm border-lime-700 border w-full resize-none h-auto"
                  value={review.review}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
                >
                  send
                </button>
              </form>
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default MentorProfile;
