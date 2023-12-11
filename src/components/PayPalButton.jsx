import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

const PayPalButton = ({ checkOut }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AdY8T7xzo2_QnQPGAQl_x7DuuMrIMWDXa9L0YWg3AN8FYOqm8LmbJnOzGK3UPh8KhuxkyabwI14uybRf&currency=USD";
    script.async = true;
    script.onload = () => {
      // Render the PayPal button when the script is loaded
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: `${50}`, // Specify your payment amount
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            // Capture the funds when the buyer approves the payment
            return actions.order.capture().then((details) => {
              // Send details to your server for verification
              // console.log(details);
              // console.log(data);
              axios.post(`${BASE_URL}/payPal/payWithPayPal`, {
                details,
                checkOut,
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
