import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useLoader from "../store/loaderStore";
import PreLoader from "../components/PreLoader";
import check from "/icons/check.png";
import axios from "axios";
import { BASE_URL } from "../config/config";

const CheckOut = () => {
  const { Loader, setLoader } = useLoader();
  const [help, setHelp] = useState("");
  const [helpArray, setHelpArray] = useState([]);
  const [mentor, setMentor] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getMentor = async () => {
        const url = `${BASE_URL}/mentor/${id}`;
        setLoader(true);
        const { data } = await axios.get(url);
        if (data.profile.length == 0) {
          navigate("/404");
        }
        const details = data.profile[0];
        setMentor(details);
        setHelp(details.How_help);
        setLoader(false);
      };

      getMentor();
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }, []);

  const getTotalPrice = (price) => {
    const intPrice = parseInt(price);
    const totalPrice = intPrice + intPrice * 0.2;
    const roundedUp =  Math.round(totalPrice * 100) / 100;
    return roundedUp;
  };

  useEffect(() => {
    const helpParagraphs = help.split("\n");
    setHelpArray(helpParagraphs);
  }, [mentor]);

  return (
    <>
      {Loader && <PreLoader />}
      <div className="w-full min-h-screen p-2 sm:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="">
              <img
                src={`${mentor.image}`}
                alt=""
                className="shadow-xl rounded-sm"
              />
            </div>
            <div className="space-y-5 py-3">
              <h2 className="capitalize text-2xl font-medium">
                Mentorship details
              </h2>
              <div className="capitalize">
                <h4 className="capitalize font-medium text-lg">
                  mentor's name
                </h4>
                <p className="text-sm">{`${mentor.firstName} ${mentor.initials}`}</p>
              </div>
              <div className="capitalize">
                <h4 className="capitalize font-medium text-lg">price</h4>
                <p className="text-sm">{`$${mentor.price}`}</p>
              </div>
              <div>
                <h4 className="capitalize font-medium text-lg">
                  mentors offer
                </h4>
                {helpArray.map((item, i) => {
                  return (
                    <p className="text-sm leading-6" key={i}>
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h2 className="capitalize font-medium text-lg">extras</h2>
                <ul className="space-y-3 text-sm mt-2">
                  <li className="flex gap-2 items-center">
                    <img src={check} alt="" width={20} />
                    <span> Get 1 - on - 1 Mentoring session</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <img src={check} alt="" width={20} />
                    <span>Unlimited Q & A via chat</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <img src={check} alt="" width={20} />
                    <span>2 calls per month (45min / call)</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <img src={check} alt="" width={20} />
                    <span>Unlimited support</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="capitalize font-semibold text-sm">
                  service charge:
                </h4>
                <span className="text-lg font-bold text-gray-700">20%</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h4 className="capitalize font-semibold text-sm">
                  total charge:
                </h4>
                <span className="text-lg font-bold text-gray-700">
                  ${getTotalPrice(mentor.price)}
                </span>
              </div>
              <Link
                to={`/payout/${mentor.id}`}
                className="bg-amber-200 text-amber-900 px-5 p-4 rounded-sm capitalize hover:bg-amber-100 font-semibold  flex place-items-center place-content-center shadow-md"
              >
                make payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
