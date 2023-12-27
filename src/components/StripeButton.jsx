import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../config/config";
import stripe from "/icons/stripe.png";


const StripeButton = ({ setLoader }) => {
  const savedProduct = JSON.parse(localStorage.getItem("product"));
  const makePayment = async () => {
    console.log(savedProduct);
    setLoader(true);
    const stripe = await loadStripe(
      "pk_live_51N2arXIYmnZ4DnJJADIrHtXGUSDXLYB1tXnF7Y0MaGtC8HXZf3yFnGlFkfOSRif3DBOsJFcHrSQLSqtIhAYt3zsW004p8lRt6d"
    );
    const body = { savedProduct };
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
      <button
        className="capitalize py-3 px-5 text-center text-sm w-full text-white font-normal shadow-sm hover:bg-lime-800 outline bg-lime-700 rounded-sm flex justify-center items-center gap-1"
        onClick={makePayment}
      >
        <img src={stripe} alt="" width={30}/>
        <p>pay with stripe</p>
      </button>
    </div>
  );
};

export default StripeButton;
