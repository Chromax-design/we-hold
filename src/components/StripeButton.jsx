import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../config/config";

const StripeButton = ({checkOut, setLoader}) => {
  console.log(checkOut)
  const makePayment = async () => {
    setLoader(true);
    const stripe = await loadStripe(
      "pk_test_51N2arXIYmnZ4DnJJ1gSvYCDhGFLAVDTHGPo8vTJTdJPnioyLZYnYAJUho80iMQsHPLXRbFD0SYqyt4y1hmps79ci00xEmplYtF"
    );
    const body = { checkOut };
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
    <div>
      <button className="capitalize py-3 px-5 text-center text-sm w-full my-5 block text-white font-normal shadow-sm hover:bg-lime-800 outline bg-lime-700 rounded-sm" onClick={makePayment}>
        pay with stripe
      </button>
    </div>
  );
};

export default StripeButton;
