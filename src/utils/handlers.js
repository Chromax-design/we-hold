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
    // navigate(`/auth/${userType}/verifyEmail`);
    navigate(`/${userType}/application/${data.userId}`);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    console.log(error);
    toast.error(error.response.data.message);
  }
};


export const handleCheckEmail = async (data, userType, setLoader, navigate) => {
  const url = `${BASE_URL}/${userType}/checkEmail`;
  try {
    setLoader(true);
    const response = await axios.post(url, data);
    if (response.data.valid) {
      navigate(`/auth/${userType}/pwdreset/${response.data.userId}`);
    }
    setLoader(false);
  } catch (error) {
    toast.error(`Error: ${error.response.data.message}`);
    setLoader(false);
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
    toast.error(error.response.data.message);
  }
};

export const updateLocalStorage = (data, setUser) => {
  const Profile = JSON.parse(localStorage.getItem("user"));
  const updatedProfile = { ...Profile, ...data };
  localStorage.setItem("user", JSON.stringify(updatedProfile));
  setUser(updatedProfile);
};
