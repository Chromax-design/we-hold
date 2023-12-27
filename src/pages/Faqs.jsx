import React, { useState } from "react";
import { faqdata } from "../data/Faqsdata";
import plus from "/icons/plus.png";
import minus from "/icons/minus.png";
import faqs from "/info_graphics/faqs.svg"

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected == id) {
      setSelected(null);
    }else {
      setSelected(id);
    }
  };

  return (
    <main className="bg-gray-50">
      <section className="py-20 px-4">
        <img src={faqs} alt="" className="max-w-xl mx-auto"/>
        <div className="max-w-4xl mx-auto mt-10">
          {faqdata.map((item, i)=>{
            return (
              <div key={item.id} className="space-y-2">
                <div
                  className="bg-white p-4 shadow-sm text-sm font-medium rounded-sm flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <h3>{item.title}</h3>
                  <img
                    src={selected == i ? minus : plus}
                    alt=""
                    className="w-[20px]"
                  />
                </div>
                <div
                  className={`${
                    selected == i ? "py-3 h-auto" : "py-0 h-0 overflow-hidden"
                  } pl-10 mr-auto`}
                >
                  <p className="border-l-2 p-3 border-amber-400 text-sm">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Faqs;
