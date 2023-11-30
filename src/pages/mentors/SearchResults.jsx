import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import none from "../../assets/not-found.svg";
import useLoader from "../../store/loaderStore";
import PreLoader from "../../components/PreLoader";
import SearchStore from "../../store/SearchStore";

const NotFound = () => {
  return (
    <div className=" max-w-3xl mx-auto text-center capitalize mt-20">
      <img src={none} alt="" className="w-full" />
      <h2 className="capitalize text-xl font-medium">no mentors yet...</h2>
    </div>
  );
};

const SearchResults = () => {
  const { Loader } = useLoader();
  const { searchResults } = SearchStore();
  return (
    <>
      {Loader && <PreLoader />}
      <main>
        <section className="max-w-5xl mx-auto py-10 px-4">
          <h2 className="capitalize text-xl text-center font-semibold mt-5">
            search results:
          </h2>
          <div className=" mt-10">
            {searchResults?.length == 0 && <NotFound />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-7 p-4 md:p-0">
              {searchResults.map((item, index) => {
                return (
                  <div
                    className="shadow-lg rounded-lg overflow-hidden grid lg:grid-cols-12"
                    key={index}
                  >
                    <div className="h-[370px] md:h-[270px] overflow-hidden lg:col-span-3">
                      <img
                        src={item?.image}
                        className="min-h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-7 bg-white lg:col-span-9">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <div>
                          <h2 className="capitalize font-semibold text-lg">
                            {`${item?.firstName} ${item?.initials}.`}
                          </h2>
                          <span className="capitalize font-medium text-sm tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <div className="font-medium">$45/Month</div>
                      </div>
                      <p className="mb-4 mt-2 max-lg:text-sm line-clamp-4">
                        {item.bio}
                      </p>
                      <Link
                        to={`/mentors/${item.id}`}
                        className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-lime-900 group"
                      >
                        view profile{" "}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchResults;
