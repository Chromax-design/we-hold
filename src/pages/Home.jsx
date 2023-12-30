import React, { useState } from "react";
import { Video } from "../components/Video";
import Mentor from "../components/Mentor";
import Mentees from "../components/Mentees";
import Trust from "../components/Trust";
import Inspire from "../components/Inspire";
import inspireImg from "/images/inspire.png";
import Faqs from "../components/Faqs";
import { handleSearch } from "../utils/handlers";
import { useNavigate } from "react-router-dom";
import useLoader from "../store/loaderStore";
import SearchStore from "../store/SearchStore";
import Loading from "/images/loading.gif";

const PreLoader = () => {
  return (
    <div className="flex justify-center">
      <img src={Loading} alt="" />
    </div>
  );
};

const Home = () => {
  const [search, setSearch] = useState({});
  const { setSearchResults } = SearchStore();
  const { Loader, setLoader } = useLoader();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search, setLoader, setSearchResults, navigate);
  };

  return (
    <>
      <main className="bg-gray-50 space-y-20 pb-10">
        <section className=" mx-auto relative h-[500px] bg-[url('/images/headervideo.gif')] bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-[linear-gradient(to_right,rgba(230,115,0,0.3)50%,rgba(230,115,0,1))] bg-cover bg-center bg-no-repeat z-10"></div>
          <div className="absolute z-20 top-0 left-0 h-full w-full ">
            <div className="max-w-6xl mx-auto pb-10 px-3 min-h-[450px] py-20 flex items-center">
              <div className="text-white max-w-xl relative">
                <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] w-full h-full -z-10 blur-2xl"></div>
                <div className="p-2 sm:p-4">
                  <div>
                    <h1 className="text-2xl sm:text-4xl text-gray-50 capitalize font-bold mb-2">
                      Connecting Africa's Entrepreneurs with trusted MENTORS;
                    </h1>
                    <p className="max-sm:text-xs">
                      To reignite motivation and get knowledge to build
                      generational wealth.
                    </p>
                  </div>
                  <form
                    action="#"
                    className="w-full px-1 mb-5 max-w-lg"
                    onSubmit={handleSubmit}
                  >
                    <div className="my-6 gap-3 w-full space-y-3">
                      <input
                        type="search"
                        placeholder="search mentor type"
                        name="search"
                        className="w-full px-3 py-4 outline-lime-800 rounded-md placeholder:capitalize placeholder:text-sm text-black text-sm placeholder:font-light shadow-lg"
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="submit"
                        className="bg-lime-800 text-white text-sm rounded-md capitalize hover:bg-lime-900 py-3 px-4 shadow-lg"
                      >
                        search mentors
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex">
            <Mentees />
          </div>
        </section>

        <section className=" px-4">
          <div className="max-w-3xl lg:max-w-5xl mx-auto">
            <h2 className="capitalize sm:text-center text-2xl font-medium mb-7">
              Meet our highly esteemed mentors
            </h2>
            <p className="sm:text-center max-w-4xl mx-auto mb-10">
              Your online mentor can elevate your career or be a shoulder to
              lean on. Get a personalized mentoring program, including curated
              study plans, regular check-ins, and unlimited actionable support.
              Be part of an online mentor community that spans across the globe.
            </p>
            {Loader && <PreLoader />}
            <Mentor setLoader={setLoader} />
          </div>
        </section>

        <section className="px-4">
          <div className="max-w-4xl lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 mx-auto gap-7">
            <div>
              <h2 className="text-2xl font-medium capitalize">why trust us?</h2>
              <Trust />
            </div>
            <Video />
          </div>
        </section>

        <section className="px-4">
          <h2 className="text-2xl font-medium capitalize mb-10 sm:text-center">
            Inspire the future. <br />
            Become a Mentor Today.
          </h2>
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 mx-auto gap-7">
            <img
              src={inspireImg}
              alt=""
              className="rounded-md shadow-md max-w-full"
            />
            <div>
              <Inspire />
            </div>
          </div>
        </section>

        <section className=" px-4">
          <h2 className="text-2xl font-medium sm:text-center">FAQs</h2>
          <div className="max-w-4xl mx-auto">
            <Faqs />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
