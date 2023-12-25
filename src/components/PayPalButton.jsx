import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useNavigate } from "react-router-dom";

const PayPalButton = () => {
  const savedProduct = JSON.parse(localStorage.getItem("product"));
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ASfxNwn0CcjjFb8xdselsMCB1tIc279UQb0dbXqpG7sPYbdEaAeJ1q80WZzdl-HI63ffmOzAhyt-GKMB&currency=USD";
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: `${parseInt(savedProduct.price)}`,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              // console.log(details);
              // console.log(data);
              // console.log(checkout);
              axios
                .post(`${BASE_URL}/payPal/payWithPayPal`, {
                  details,
                  savedProduct,
                })
                .then(() => {
                  navigate("/stripe/success");
                });
            });
          },
        })
        .render("#paypal-button-container");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="paypal-button-container">
      {/* The PayPal button will be rendered here */}
    </div>
  );
};

export default PayPalButton;
