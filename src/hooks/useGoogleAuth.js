import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const useGoogleAuth = () => {
  const [googleEmail, setGoogleEmail] = useState("");
  const client_id =
    "88438004311-2pqa2r2r2peo2su0566c72qc02b0lv97.apps.googleusercontent.com";

  const handleGoogleLogin = (response) => {
    const user = jwt_decode(response.credential);
    if (user) {
      setGoogleEmail(user.email);
    }
  };

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id,
      callback: handleGoogleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "filled_black",
        size: "large",
      }
    );

    window.google.accounts.id.prompt();
  }, []);

  return { googleEmail, setGoogleEmail };
};

export default useGoogleAuth;
