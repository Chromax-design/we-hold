import React from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const savedProduct = JSON.parse(localStorage.getItem("product"));
  const navigate = useNavigate();

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASfxNwn0CcjjFb8xdselsMCB1tIc279UQb0dbXqpG7sPYbdEaAeJ1q80WZzdl-HI63ffmOzAhyt-GKMB&currency=USD",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: `${parseInt(savedProduct.price)}`,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            axios
            .post(`${BASE_URL}/payPal/payWithPayPal`, {
              details,
              savedProduct,
            })
            .then(() => {
              navigate("/stripe/success");
            });
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
