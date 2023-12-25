import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLoader from "../store/loaderStore";
import PreLoader from "../components/PreLoader";
import check from "../assets/icons/check.png";
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

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

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
      <div className="w-full min-h-screen px-4">
        <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10">
            <div className="">
              <img
                src={`${mentor.image}`}
                alt=""
                className="shadow-xl rounded-sm"
              />
            </div>
            <div className="space-y-5 py-3">
              <h2 className="capitalize text-2xl font-bold">
                Mentorship details
              </h2>
              <div className="capitalize">
                <h4 className="capitalize font-semibold text-lg">
                  mentor's name
                </h4>
                <p className="text-sm">{`${mentor.firstName} ${mentor.initials}`}</p>
              </div>
              <div className="capitalize">
                <h4 className="capitalize font-semibold text-lg">price</h4>
                <p className="text-sm">{`$${mentor.price}`}</p>
              </div>
              <div>
                <h4 className="capitalize font-semibold text-lg">
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
                <h2 className="capitalize font-semibold text-lg">extras</h2>
                <ul className="space-y-3 text-sm mt-2">
                  <li className="flex gap-2">
                    <img src={check} alt="" width={20} />
                    <span> Get 1 - on - 1 Mentoring session</span>
                  </li>
                  <li className="flex gap-2">
                    <img src={check} alt="" width={20} />
                    <span>Unlimited Q & A via chat</span>
                  </li>
                  <li className="flex gap-2">
                    <img src={check} alt="" width={20} />
                    <span>2 calls per month (45min / call)</span>
                  </li>
                  <li className="flex gap-2">
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
                className="bg-lime-800 text-white px-5 p-4 rounded-sm capitalize font-medium hover:bg-lime-900  ring-1 ring-gray-200  flex place-items-center place-content-center"
              >
                make payment
              </Link>
            </div>
          </div>

          <p className="mt-5">
            <button
              className="first-letter:capitalize capitalize font-medium text-sm inline-block underline"
              onClick={handleNavigate}
            >
              back
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
