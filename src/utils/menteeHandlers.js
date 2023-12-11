import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import { updateLocalStorage } from "./handlers";

export const handleApplication = async (updatedData, id, navigate) => {
  const url = `${BASE_URL}/mentee/application/${id}`;

  try {
    const { data } = await axios.put(url, updatedData);
    toast.success(data.message);
    navigate("/verification/success", { replace: true });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
    console.log(error);
  }
};

export const handleMenteeProfile = async (
  updatedData,
  login,
  setLoader,
  userId
) => {
  const url = `${BASE_URL}/mentee/menteeprofile/${userId}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, updatedData);
    toast.success(data.message);
    updateLocalStorage(data.update, login);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
    console.log(error);
  }
};

export const handleMenteeDetails = async (
  userData,
  setLoader,
  userId,
  setUser
) => {
  const url = `${BASE_URL}/mentee/userdetails/${userId}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, userData);
    toast.success(data.message);
    updateLocalStorage(data.update, setUser);
    setLoader(false);
  } catch (error) {
    setLoader(false);
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
  }
};

export const handleReviews = async (reviewData, setLoader) => {
  try {
    setLoader(true);
    const url = `${BASE_URL}/mentee/reviews`;
    const { data } = await axios.post(url, reviewData);
    toast.success(data.message)
    setLoader(false);
  } catch (error) {
    console.log(error);
    setLoader(false);
  }
};

