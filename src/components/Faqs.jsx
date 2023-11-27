import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faqdata } from "../data/Faqsdata";
import plus from "../assets/icons/plus.png";
import minus from "../assets/icons/minus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="space-y-3 mt-10">
      {faqdata.slice(0, 3).map((item, i) => {
        return (
          <div key={item.id} className="space-y-3">
            <div
              className="bg-white p-4 shadow-md text-sm font-semibold rounded-sm flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h3>{item.title}</h3>
              <img
                src={selected === i ? minus : plus}
                alt=""
                className="w-[20px]"
              />
            </div>
            <div
              className={`${
                selected === i ? "py-3 h-auto" : "py-0 h-0 overflow-hidden"
              } pl-10 mr-auto`}
            >
              <p className="border-l-2 p-3 border-amber-400 max-sm:text-sm">{item.info}</p>
            </div>
          </div>
        );
      })}
      <Link
        className="bg-lime-800 inline-block text-sm text-white px-5 py-3 rounded-md capitalize font-medium hover:bg-lime-900 group"
        to={"/faqs"}
      >
        view all FAQs
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 text-white text-sm font-medium group-hover:ml-3 transition-all ease-in-out`}
        />
      </Link>
    </div>
  );
};

export default Faqs;
