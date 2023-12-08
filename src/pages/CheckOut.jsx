import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../store/AuthStore";
import useLoader from "../store/loaderStore";
import PreLoader from "../components/PreLoader";
import axios from "axios";
import { BASE_URL } from "../config/config";
import PayPalButton from "../components/PayPalButton";
import StripeButton from "../components/StripeButton";

const CheckOut = () => {
  const { user } = useAuth();
  const { Loader, setLoader } = useLoader();
  const { id } = useParams();
  const [mentor, setMentor] = useState([]);
  const url = `${BASE_URL}/mentor/${id}`;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

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

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover py-20 px-4 flex justify-between items-center">
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg w-full">
          <p className="text-xl text-center font-semibold capitalize">
            Choose payment option
          </p>

          <div className="my-10">
            <PayPalButton product={product} />
            <p className="text-center font-semibold text-lg uppercase">or</p>
            <StripeButton product={product} setLoader={setLoader} />
          </div>

          <p className="mt-5">
            <button
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              onClick={handleNavigate}
            >
              back
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
