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
    console.error(error);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleRegister = async (
  userData,
  setLoader,
  userType,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/register`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, userData);
    toast.success(data.message);
    navigate(`/auth/${userType}/confirm-registration/${data.userId}`);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleAccountConfirmation = async (
  otpData,
  userId,
  userType,
  setLoader,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/confirm-registration/${userId}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, otpData);
    toast.success(data.message);
    navigate(`/${userType}/application/${data.userId}`, { replace: true });
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleResendOtp = async (
  requestData,
  userType,
  setLoader,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/resend-otp`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, requestData);
    toast.success(data.message);
    navigate(`/auth/${userType}/confirm-registration/${data.userId}`);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleResetPassword = async (
  data,
  userType,
  setLoader,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/password-reset`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    setLoader(false);
    navigate("/auth/login", { replace: true });
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleUpdatePassword = async (
  updates,
  userType,
  setLoader,
) => {
  const url = `${BASE_URL}/${userType}/update-password/${updates.userId}`;
  try {
    setLoader(true);
    const response = await axios.put(url, updates);
    setLoader(false);
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    toast.error(`Error: ${error.response.data.message}`);
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
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const loginWithGoogle = async (
  googledata,
  setLoader,
  login,
  navigate
) => {
  const url = `${BASE_URL}/mentee/loginWithGoogle`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, googledata);
    localStorage.setItem("user", JSON.stringify(data));
    login(data);
    navigate(`/mentee/dashboard`);
    toast.success(data.message);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(`Error: ${error.response.data.message}`);
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
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handleSearch = async (
  searchParam,
  setLoader,
  setSearchResults,
  navigate
) => {
  const url = `${BASE_URL}/mentor/search`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, searchParam);
    setSearchResults(data.mentors);
    navigate("/search");
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const updateLocalStorage = (data, setUser) => {
  const Profile = JSON.parse(localStorage.getItem("user"));
  const updatedProfile = { ...Profile, ...data };
  localStorage.setItem("user", JSON.stringify(updatedProfile));
  setUser(updatedProfile);
};
