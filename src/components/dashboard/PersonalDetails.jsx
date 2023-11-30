import React, { useState } from "react";
import edit from "../../assets/icons/dashboards/edit.png";
import "react-phone-input-2/lib/style.css";
import { Country } from "country-state-city";
import userIcon from "../../assets/icons/user_icon.png";
import { handleUpload } from "../../utils/handlers";
import useAuth from "../../store/AuthStore";
import useLoader from "../../store/loaderStore";
import PreLoader from "../PreLoader";
import { handleMentorDetails } from "../../utils/mentorHandlers";

const PersonalDetails = ({ tab, userType }) => {
  const { user, setUser } = useAuth();
  const { Loader, setLoader } = useLoader();
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(user.country || "");
  const [data, setdata] = useState({
    firstName: user.firstName || "",
    initials: user.initials || "",
    currentRole: user.role || "",
    experience: user.experience || "",
    skills: user.skills || "",
    country: user.country || "",
    bio: user.bio || "",
    How_help: user.How_help || "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setSelectedImg(imgURL);
    } else {
      setSelectedImg(null);
    }
  };

  const Upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    handleUpload(formData, user.id, setUser, setLoader, userType);
  };

  const countryList = Country.getAllCountries();

  const handleCountryChange = (e) => {
    const { value } = e.target;
    const selectedCountryObj = countryList.find(
      (country) => country.name == value
    );
    setSelectedCountry(selectedCountryObj.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstName,
      initials: data.initials,
      currentRole: data.role,
      experience: data.experience,
      skills: data.skills,
      bio: data.bio,
      How_help: data.How_help,
      country: selectedCountry
    };
    handleMentorDetails(userData, setLoader, user.id, setUser);
  };

  return (

    <>
      {Loader && <PreLoader />}
      <div
        className={`p-2 sm:p-10 pt-5 grid md:grid-cols-12 gap-5 ${
          tab == 1 ? "block" : "hidden"
        }`}
      >
        <div className="md:col-span-4 rounded-md p-2 gap-5">
          <form action="" onSubmit={Upload}>
            <div className="relative shadow-lg max-w-[300px]">
              <img
                src={
                  selectedImg ? selectedImg : user.image ? user.image : userIcon
                }
                alt="user image"
                className="w-full max-w-[300px]"
              />
              <div className="absolute bottom-0 translate-y-[50%] translate-x-[50%] left-0 w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center shadow-md">
                <input
                  type="file"
                  name=""
                  id="upload"
                  hidden
                  onChange={handleFileChange}
                  accept=".jpg, .png, .jpeg, .svg"
                />
                <label htmlFor="upload">
                  <img src={edit} alt="" className="w-9 cursor-pointer" />
                </label>
              </div>
            </div>
            <div className=" mt-10">
              <button
                type="submit"
                className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group shadow-md"
              >
                upload
              </button>
            </div>
          </form>
        </div>
        <div className="md:col-span-8 rounded-md space-y-6 md:p-5 pt-0">
          <h2 className="font-semibold text-2xl max-md:mt-10">User details</h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="rounded-md bg-white space-y-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="fname"
                    className="text-sm capitalize font-medium"
                  >
                    preferred name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    value={data.firstName}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="initials"
                    className="text-sm capitalize font-medium"
                  >
                    initials
                  </label>
                  <input
                    type="text"
                    id="initials"
                    name="initials"
                    value={data.initials}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="role"
                    className="text-sm capitalize font-medium block mb-3"
                  >
                    current role
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    id="role"
                    value={data.currentRole}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="text-sm capitalize font-medium block mb-3"
                  >
                    experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    value={data.experience}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-sm:flex-col">
                <div>
                  <label
                    htmlFor="skills"
                    className="text-sm capitalize font-medium block mb-3"
                  >
                    skills{" "}
                    <span className="text-xs">
                      (seperate each skill with a comma)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={data.skills}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="text-sm capitalize font-medium block mb-3"
                  >
                    country
                  </label>
                  <select
                    name="country"
                    id=""
                    value={selectedCountry}
                    className="mt-3 block p-2 border-lime-700 border w-full rounded-sm"
                    onChange={handleCountryChange}
                    required
                  >
                    {countryList.map((country, index) => {
                      return (
                        <option value={country.name} key={index}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className=" ">
                <label
                  htmlFor="bio"
                  className="text-sm capitalize font-medium block mb-3"
                >
                  personal bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  value={data.bio}
                  className="w-full border-lime-700 border rounded-sm p-3"
                  rows={5}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className=" ">
                <label
                  htmlFor="how"
                  className="text-sm capitalize font-medium block mb-3"
                >
                  How i can help mentees grow
                </label>
                <textarea
                  name="How_help"
                  id="how"
                  value={data.How_help}
                  className="w-full border-lime-700 border rounded-sm p-3"
                  rows={5}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
