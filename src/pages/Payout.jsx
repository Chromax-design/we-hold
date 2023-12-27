import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLoader from "../store/loaderStore";
import PreLoader from "../components/PreLoader";
import PayPalButton from "../components/PayPalButton";
import StripeButton from "../components/StripeButton";
import { BASE_URL } from "../config/config";
import axios from "axios";
import useAuth from "../store/AuthStore";
import transfer from "/icons/transfer.png";

const Payout = () => {
  const { user } = useAuth();
  const { Loader, setLoader } = useLoader();
  const { id } = useParams();
  const [mentor, setMentor] = useState([]);

  const getTotalPrice = (price) => {
    const intPrice = parseInt(price);
    const totalPrice = intPrice + intPrice * 0.2;
    const roundedUp = Math.round(totalPrice * 100) / 100;
    return roundedUp;
  };

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
        setMentor(details);
        const product = {
          fullName: `${details.firstName} ${details.initials}`,
          price: `${getTotalPrice(details.price)}`,
          mentorId: `${details.id}`,
          menteeId: `${user.id}`,
        };
        localStorage.setItem("product", JSON.stringify(product));
        setLoader(false);
      };

      getMentor();
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('/images/bg-gradient.jpg')] backdrop-blur-lg bg-cover py-20 px-4 flex justify-between items-center">
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg w-full">
          <p className="text-xl text-center font-semibold capitalize">
            Choose payment option
          </p>

          <div className="my-10 space-y-4">
            <PayPalButton />
            <p className="text-center font-semibold text-sm uppercase">or</p>
            <StripeButton setLoader={setLoader} />
            <a
              href="mailto: enquiry@weholdahand.com"
              className="capitalize w-full border border-amber-900 bg-amber-800 py-2 px-5 text-white text-sm font-normal text-center rounded-sm flex items-center gap-1 justify-center"
            >
              <img src={transfer} alt="" width={35}/>
              <p>bank transfer</p>
            </a>
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

export default Payout;
