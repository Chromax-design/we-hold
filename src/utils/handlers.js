import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getUserData = async (userType, userId, token, setUser) => {
  try {
    const url = `${BASE_URL}/${userType}/${userId}`;
    const { data } = await axios.get(url, {
      headers: { Authorization: token },
    });
    updateLocalStorage(data, setUser);
  } catch (error) {
    console.log(error);
  }
};

// registration handler
export const handleRegister = async (userData, setLoader, userType) => {
  const url = `${BASE_URL}/${userType}/register`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, userData);
    if (data.success == false) {
      toast.error(data.message);
      setLoader(false);
    }
    toast.success(data.message);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    const errorMessage = error.response?.data?.message || "An error occurred";
    console.log(error);
    toast.error(`Error: ${errorMessage}`);
  }
};

// handle login
export const handleLogin = async (
  loginData,
  userType,
  setLoader,
  navigate,
  login
) => {
  const url = `${BASE_URL}/${userType}/login`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, loginData);
    localStorage.setItem("user", JSON.stringify(data));
    login(data);
    navigate(`/${userType}/dashboard`);
    toast.success(data.message);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// handle profile img upload

export const handleUpload = async (
  imgData,
  id,
  setUser,
  setLoader,
  userType
) => {
  const url = `${BASE_URL}/${userType}/upload/${id}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoader(false);
    toast.success(data.message);
    const newProfile = { image: data.image };
    updateLocalStorage(newProfile, setUser);
  } catch (error) {
    setLoader(false);
    console.log(error);
  }
};

// send reset password link for both mentor & mentee as it is the same component controlling both
export const handlesendpwdLink = async (data, userType, setLoader) => {
  const url = `${BASE_URL}/${userType}/sendpwdResetLink`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    setLoader(false);
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

// update password for mentor and mentee as it is the same component controlling both
export const handleUpdatePWD = async (
  data,
  userType,
  userId,
  setLoader,
  logout,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/updatePassword/${userId}`;
  try {
    setLoader(true);
    const response = await axios.put(url, data);
    setLoader(false);
    logout();
    navigate("/auth/login", { replace: true });
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

// handle resend email token for both mentors and mentees
export const sendEmailVerification = async (data, setLoader, userType) => {
  const url =
    userType === "mentor"
      ? `${BASE_URL}/mentor/sendResetToken`
      : `${BASE_URL}/mentee/sendResetToken`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    setLoader(false);
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    if (error.response) {
      console.error("Error in sendToken:", error.response.data.message);
      toast.error(`Error: ${error.response.data.message}`);
    } else {
      console.error("Network error in sendToken:", error);
      toast.error("An error occurred while sending the token.");
    }
  }
};

export const updateLocalStorage = (data, setUser) => {
  const Profile = JSON.parse(localStorage.getItem("user"));
  const updatedProfile = { ...Profile, ...data };
  localStorage.setItem("user", JSON.stringify(updatedProfile));
  setUser(updatedProfile);
};
