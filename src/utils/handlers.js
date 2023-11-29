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

// ========== REGISTRATION STARTS===============

// registration handler
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
    if (data.success == false) {
      toast.error(data.message);
      setLoader(false);
    }
    toast.success(data.message);
    navigate(`/auth/${userType}/verifyEmail`);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    const errorMessage = error.response?.data?.message || "An error occurred";
    console.log(error);
    toast.error(`Error: ${errorMessage}`);
  }
};

// email otp handler
export const handleEmailOTP = async (otp, userType, setLoader, navigate) => {
  const url = `${BASE_URL}/${userType}/verifyEmail`;
  try {
    setLoader(true);
    const { data } = await axios.post(url, otp);
    if (data.expired) {
      toast.success(data.message);
      navigate(`/auth/${userType}/expiredEmailOTP`);
    } else {
      toast.success(data.message);
      navigate(`/${userType}/application/${data.userId}`);
    }
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// handle resend email otp for both mentors and mentees
export const handleResendEmailOTP = async (
  data,
  setLoader,
  userType,
  navigate
) => {
  const url =
    userType === "mentor"
      ? `${BASE_URL}/mentor/resendEmailOTP`
      : `${BASE_URL}/mentee/resendEmailOTP`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    navigate(`/auth/${userType}/verifyEmail`);
    setLoader(false);
    toast.success(response.data.message);
  } catch (error) {
    setLoader(false);
    if (error.response) {
      console.error("Error in sendOTP:", error.response.data.message);
      toast.error(`Error: ${error.response.data.message}`);
    } else {
      console.error("Network error in sendOTP:", error);
      toast.error("An error occurred while sending the OTP.");
    }
  }
};

// ========== REGISTRATION ENDS===============

// ======= PASSWORD RESET STARTS ========

// send reset password OTP for both mentor & mentee as it is the same component controlling both
export const handlesendpwdOTP = async (data, userType, setLoader, navigate) => {
  const url = `${BASE_URL}/${userType}/sendpwdResetOTP`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    setLoader(false);
    toast.success(response.data.message);
    navigate(`/auth/${userType}/verifyPwdOTP`);
  } catch (error) {
    setLoader(false);
    toast.error(`Error: ${error.response.data.message}`);
  }
};

export const handlePwdOTP = async (data, userType, setLoader, navigate) => {
  const url = `${BASE_URL}/${userType}/verifyPwdOTP`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    if (response.data.expired) {
      toast.error(response.data.message);
      navigate(`/auth/${userType}/sendPwdOTP`);
    } else {
      toast.success(response.data.message);
      navigate(`/auth/${userType}/pwdreset/${response.data.userId}`);
    }
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(error.response.data.message);
  }
};

// reset password for mentor and mentee as it is the same component controlling both
export const handleResetPWD = async (
  data,
  userType,
  userId,
  setLoader,
  logout,
  navigate
) => {
  const url = `${BASE_URL}/${userType}/resetPwd/${userId}`;
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

// ======= PASSWORD RESET ENDS ========

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

export const loginWithGoogle = async (googledata, setLoader, login, navigate) => {
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

export const updateLocalStorage = (data, setUser) => {
  const Profile = JSON.parse(localStorage.getItem("user"));
  const updatedProfile = { ...Profile, ...data };
  localStorage.setItem("user", JSON.stringify(updatedProfile));
  setUser(updatedProfile);
};
