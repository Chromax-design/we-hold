import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import { updateLocalStorage } from "./handlers";

export const handleApplication = async (
  updatedData,
  id,
  setLoader,
  navigate
) => {
  const url = `${BASE_URL}/mentor/application/${id}`;

  try {
    setLoader(true);
    const { data } = await axios.put(url, updatedData);
    console.log(data);
    toast.success(data.message);
    setLoader(false);
    navigate("/verification/success", { replace: true });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
    console.log(error);
  }
};

export const handleMentorProfile = async (
  updatedData,
  setUser,
  userId,
  setLoader
) => {
  const url = `${BASE_URL}/mentor/mentorprofile/${userId}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, updatedData);
    toast.success(data.message);
    updateLocalStorage(data.update, setUser);
    setLoader(false);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
    console.log(error);
  }
};

export const handleMentorDetails = async (
  userData,
  setLoader,
  userId,
  setUser,
) => {
  const url = `${BASE_URL}/mentor/userdetails/${userId}`;
  try {
    setLoader(true);
    const { data } = await axios.put(url, userData);
    toast.success(data.message);
    updateLocalStorage(data.update, setUser);
    setLoader(false);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    toast.error(`Error: ${errorMessage}`);
  }
};