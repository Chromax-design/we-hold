import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { loginWithGoogle } from "../utils/handlers";
import useLoader from "../store/loaderStore";
import { useNavigate } from "react-router-dom";
import useAuth from "../store/AuthStore";

const useGoogleAuth = () => {
  const { login } = useAuth();
  const { setLoader } = useLoader();
  const navigate = useNavigate();
  const client_id =
    "180560069205-9m3kfjtjmdsjskqc9rbcj3uh1mm9b7f4.apps.googleusercontent.com";

  const handleGoogleLogin = (response) => {
    const user = jwt_decode(response.credential);
    const userData = {
      firstName: user.given_name,
      email: user.email,
    };
    // console.log(user);
    console.log(userData);
    loginWithGoogle(userData, setLoader, login, navigate);
  };

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id,
      callback: handleGoogleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);
};

export default useGoogleAuth;
