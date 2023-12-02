import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../../config/config";
import marker from "../../assets/icons/map.png";
import userIcon from "../../assets/icons/user_icon.png";
import { mentees } from "../../data/Mentees";
import axios from "axios";
import useLoader from "../../store/loaderStore";
import PreLoader from "../../components/PreLoader";
import useAuth from "../../store/AuthStore";

const MentorProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { Loader, setLoader } = useLoader();
  const { id } = useParams();
  const [mentor, setMentor] = useState([]);
  const url = `${BASE_URL}/mentor/${id}`;

  useEffect(() => {
    try {
      const getMentor = async () => {
        setLoader(true);
        const { data } = await axios.get(url);
        if (data.profile.length == 0) {
          navigate("/404");
        }
        setMentor(data.profile[0]);
        setLoader(false);
      };

      getMentor();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const product = {
    name: `${mentor?.firstName} ${mentor?.initials}`,
    mentorId: `${mentor?.id}`,
    menteeId: `${user?.id}`,
    price: 1000,
    description: "mentor subscription",
    quantity: 1,
  };

  const makePayment = async () => {
    setLoader(true);
    const stripe = await loadStripe(
      "pk_test_51N2arXIYmnZ4DnJJ1gSvYCDhGFLAVDTHGPo8vTJTdJPnioyLZYnYAJUho80iMQsHPLXRbFD0SYqyt4y1hmps79ci00xEmplYtF"
    );
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${BASE_URL}/stripe/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
      setLoader(false);
    }
    setLoader(false);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <main className="bg-gray-50 space-y-5 py-10">
        <section className="max-w-5xl mx-auto ring-1 ring-gray-100 rounded-md p-10 shadow-sm bg-white">
          <div className="lg:grid grid-cols-12 gap-10 max-lg:space-y-2">
            <div className="col-span-3">
              <img
                src={mentor?.image}
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
                <button
                  to={""}
                  className="bg-lime-800 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-lime-900  ring-1 ring-gray-200  flex place-items-center place-content-center"
                  onClick={makePayment}
                >
                  + subscribe
                </button>
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
              {mentees.slice(0, 2).map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-2 items-center">
                      <img src={userIcon} alt="" className="w-[50px]" />
                      <div className="capitalize">
                        <h3 className="font-semibold">{item?.name}</h3>
                        <p className="text-xs tracking-wider">june 12 1911</p>
                      </div>
                    </div>
                    <p className="italic mt-3 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis labore voluptates, facere similique ullam
                      debitis repudiandae quam molestias obcaecati magnam.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MentorProfile;
