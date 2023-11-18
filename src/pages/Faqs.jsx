import React, { useState } from "react";
import { faqdata } from "../data/Faqsdata";
import plus from "../assets/icons/plus.png";
import minus from "../assets/icons/minus.png";

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected == id) {
      setSelected(null);
    }

    setSelected(id);
  };

  return (
    <main className="bg-gray-50">
      <section className="py-20 px-4">
        <h2 className="text-lg sm:text-3xl font-semibold text-center mb-10">FAQs</h2>
        <div className="max-w-4xl mx-auto">
          {faqdata.map((item, i)=>{
            return (
              <div key={item.id} className="space-y-3">
                <div
                  className="bg-white p-4 shadow-md text-lg font-semibold rounded-sm flex justify-between items-center cursor-pointer"
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
                  <p className="border-l-2 p-3 border-amber-400">{item.info}</p>
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
