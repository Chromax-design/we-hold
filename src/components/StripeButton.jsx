import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../config/config";
import checkOutStore from "../store/checkOutStore";

const StripeButton = ({ setLoader }) => {
  const { checkOut } = checkOutStore();
  const makePayment = async () => {
    console.log(checkOut);
    setLoader(true);
    const stripe = await loadStripe(
      "pk_live_51N2arXIYmnZ4DnJJADIrHtXGUSDXLYB1tXnF7Y0MaGtC8HXZf3yFnGlFkfOSRif3DBOsJFcHrSQLSqtIhAYt3zsW004p8lRt6d"
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
      <button
        className="capitalize py-3 px-5 text-center text-sm w-full my-5 block text-white font-normal shadow-sm hover:bg-lime-800 outline bg-lime-700 rounded-sm"
        onClick={makePayment}
      >
        pay with stripe
      </button>
    </div>
  );
};

export default StripeButton;
