import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../config/config";
import userIcon from "/icons/user_icon.png";
import axios from "axios";
import useLoader from "../../store/loaderStore";
import PreLoader from "../../components/PreLoader";
import useAuth from "../../store/AuthStore";
import { handleReviews } from "../../utils/menteeHandlers";
import checked from "/icons/checked.png";
import verified from "/icons/verified.png";

const createDate = (timestamp, timeZone = "UTC") => {
  if (timestamp < 1e12) {
    timestamp *= 1000;
  }
  const date = new Date(timestamp);
  const options = { year: "numeric", day: "numeric", month: "short", timeZone };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const MentorProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const initialState = { review: "" };
  const [review, setReview] = useState(initialState);
  const [bioArray, setBioArray] = useState([]);
  const [helpArray, setHelpArray] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const { Loader, setLoader } = useLoader();
  const { userId } = useParams();
  const [mentor, setMentor] = useState([]);
  const [sub, setSub] = useState(true);

  const fetchMentorDetails = async () => {
    try {
      const url = `${BASE_URL}/mentor/${userId}`;
      setLoader(true);
      const { data } = await axios.get(url);
      if (data.profile.length === 0) {
        navigate("/404");
      }
      const details = data.profile[0];
      setMentor(details);
      setBioArray(details.bio.split("\n"));
      setHelpArray(details.How_help.split("\n"));
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const url = `${BASE_URL}/mentee/reviews/${mentor.id}`;
      setLoader(true);
      const { data } = await axios.get(url);
      setAllReviews(data.reviews);
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  const checkSubscription = async () => {
    try {
      const url = `${BASE_URL}/mentee/checksubscribed/${mentor.id}/${user.id}`;
      const { data } = await axios.get(url);
      setSub(data.expired);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMentorDetails();
  }, []);

  useEffect(() => {
    if (mentor.id) {
      fetchReviews();
    }
  }, [mentor]);

  useEffect(() => {
    if (mentor.id) {
      checkSubscription();
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
      <main className="bg-gray-50 space-y-5 py-10 px-2">
        <section className="max-w-5xl mx-auto ring-1 ring-gray-100 rounded-md p-4 sm:p-10 shadow-xl bg-white lg:rounded-l-full">
          <div className="md:grid grid-cols-12 gap-5 lg:gap-10 max-lg:space-y-2">
            <div className="col-span-4 lg:col-span-3">
              <img
                src={mentor?.image ? mentor.image : userIcon}
                alt=""
                className="h-[200px] w-[200px] rounded-full object-cover object-top shadow-md"
              />
            </div>
            <div className="col-span-8 lg:col-span-9 space-y-4">
              <div className="pt-3 flex flex-col gap-5 sm:justify-between sm:flex-row">
                <div className="">
                  <h2 className="capitalize text-2xl font-medium text-amber-900">
                    {`${mentor?.firstName} ${mentor?.initials}`}.
                  </h2>
                  <div className="flex items-center gap-1 capitalize font-medium text-sm">
                    <img src={verified} alt="" width={25} />
                    <p>verified mentor</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-medium">{`$${
                    mentor.price ?? "50"
                  }`}</span>
                  <span className="text-xs font-semibold">Monthly</span>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <h4 className="font-medium">Industry</h4>
                  <p className="text-xs font-normal capitalize">
                    {mentor.industry}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Country</h4>
                  <p className="text-xs font-normal capitalize">
                    {mentor.country}
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center mt-7 gap-4 lg:flex-row justify-between">
                <div className="flex-1 p-2 bg-amber-50 text-amber-800 shadow-sm font-semibold rounded-md">
                  <span className="font-semibold text-lg">
                    {mentor?.experience} yrs
                  </span>
                  <h4 className=" leading-3 text-sm capitalize">experience</h4>
                </div>
                <div className="flex-1 p-2 bg-amber-50 text-amber-800 shadow-sm flex place-content-center place-items-center rounded-md">
                  <h4 className=" leading-3 font-semibold capitalize p-2">
                    quick responder
                  </h4>
                </div>
                {!user ? (
                  <Link
                    to={`/auth/login`}
                    className="bg-amber-900 text-white px-5 p-4 rounded-md capitalize font-medium hover:bg-amber-800 flex place-items-center place-content-center"
                  >
                    Login to continue
                  </Link>
                ) : user.role == "mentor" ? (
                  <button
                    type="button"
                    className="bg-amber-900 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-amber-800 flex place-items-center place-content-center"
                  >
                    <img src={checked} alt="" width={25} className="mr-2" />{" "}
                    <span>for mentees</span>
                  </button>
                ) : sub == true ? (
                  <Link
                    to={`/checkout/${mentor?.userId}`}
                    className="bg-amber-900 text-white px-5 p-4 rounded-md capitalize font-medium hover:bg-amber-800 flex place-items-center place-content-center"
                  >
                    + subscribe
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="bg-amber-900 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-amber-800 flex place-items-center place-content-center"
                  >
                    <img src={checked} alt="" width={25} className="mr-2" />{" "}
                    <span>subscribed</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl grid grid-cols-12 mx-auto space-y-2 gap-5">
          <div className="col-span-12 md:col-span-8 bg-white rounded-md p-4 shadow-sm">
            <h2 className="capitalize text-lg font-medium mb-3">bio</h2>
            <div className="space-y-4">
              {bioArray.map((item, i) => {
                return (
                  <p className="text-sm leading-6" key={i}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white p-4 shadow-sm">
            <h3 className="capitalize font-medium text-lg mb-3">skills:</h3>
            <div className="space-y-2">
              {mentor?.skills?.split(",").map((skill, index) => {
                return (
                  <div
                    className="flex-1 p-4 capitalize text-sm shadow-sm text-amber-800 bg-amber-50 rounded-full max-md:text-center font-semibold"
                    key={index}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 bg-white rounded-md p-4 shadow-sm">
            <h3 className="capitalize font-medium text-lg mb-5">
              how i can be of help?
            </h3>

            <div className="space-y-3">
              {helpArray.map((item, i) => {
                return (
                  <p className="text-sm leading-6" key={i}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-2">
          <div className=" rounded-md p-10 shadow-sm bg-white">
            <h2 className="capitalize text-lg font-medium mb-5">
              mentee reviews
            </h2>
            <div className="space-y-7">
              {allReviews.length == 0 ? (
                <p className="text-sm capitalize italic">No reviews yet...</p>
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
