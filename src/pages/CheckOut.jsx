import React from "react";
import { useNavigate } from "react-router-dom";
import useLoader from "../store/loaderStore";
import PreLoader from "../components/PreLoader";
import PayPalButton from "../components/PayPalButton";
import StripeButton from "../components/StripeButton";
import checkOutStore from "../store/checkOutStore";

const CheckOut = () => {
  const { checkOut } = checkOutStore();
  const { Loader, setLoader } = useLoader();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  console.log(checkOut);

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen bg-[url('./assets/bg-gradient.jpg')] backdrop-blur-lg bg-cover py-20 px-4 flex justify-between items-center">
        <div className="max-w-lg mx-auto p-8 shadow-xl bg-white rounded-lg w-full">
          <p className="text-xl text-center font-semibold capitalize">
            Choose payment option
          </p>

          <div className="my-10">
            <PayPalButton checkOut={checkOut} />
            <p className="text-center font-semibold text-lg uppercase">or</p>
            <StripeButton setLoader={setLoader} />
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
