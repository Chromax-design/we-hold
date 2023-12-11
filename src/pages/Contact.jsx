import React from "react";
import contact from "../assets/contact.svg";
import { Link } from "react-router-dom";
import { address } from "../data/Constants";

const Contact = () => {
  return (
    <>
      <main className="w-full break-words pb-20 bg-gray-50">
        <section className="w-full bg-gray-5 mx-auto space-y-10 px-3 py-14">
          <div className="max-w-5xl mx-auto pt-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-2">
              <h1 className="capitalize max-lg:text-3xl lg:text-5xl font-bold mb-5">
                contact us
              </h1>
              <p className="lg:text-lg font-medium">Need support on your personal and career growth journey?</p>
              <p className="lg:text-lg">
                We're here to help! Our mentoring platform is dedicated to
                providing assistance tailored to your unique needs. Contact us
                today and let us guide you towards a fulfilling and empowered
                life. We're ready to support you every step of the way.
              </p>
            </div>
            <img
              src={contact}
              alt=""
              className="w-full mx-auto mb-10"
            />
          </div>
        </section>
        <section className="p-4 max-w-2xl lg:max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3 lg:grid-cols-1">
              {address.map((item) => {
                return (
                  <div
                    className="bg-white p-4 flex gap-4 items-center shadow-sm rounded-md"
                    key={item.id}
                  >
                    <div className="p-3 rounded-full bg-gray-100">
                      <img
                        src={item.icon}
                        alt=""
                        className="block min-w-[20px]"
                        width={30}
                      />
                    </div>
                    <div className="break-words">
                      <h4 className="capitalize font-semibold">{item?.title}</h4>
                      <Link
                        to={`${item.location}`}
                        className="block font-medium hyphens-auto break-words break-all"
                      >
                        {item.desc}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-2 bg-white rounded-md shadow-sm p-5">
              <h3 className="font-semibold capitalize text-lg mb-3">
                send message
              </h3>
              <p>
                Get talking to the right person in our team and we'll get back
                to you as soon as possible.
              </p>
              <form method="post" className="space-y-3 mt-5">
                <div className="flex max-sm:flex-col gap-3">
                  <input
                    type="text"
                    name=""
                    className="w-full p-2 border border-lime-900 rounded-sm placeholder:capitalize placeholder:text-black placeholder:text-sm"
                    placeholder="your name"
                  />
                  <input
                    type="email"
                    name=""
                    className="w-full p-2 border border-lime-900 rounded-sm placeholder:capitalize placeholder:text-black placeholder:text-sm"
                    placeholder="your email"
                  />
                </div>
                <div className="flex max-sm:flex-col gap-3">
                  <input
                    type="tel"
                    name=""
                    className="w-full p-2 border border-lime-900 rounded-sm placeholder:capitalize placeholder:text-black placeholder:text-sm"
                    placeholder="phone number"
                  />
                  <input
                    type="text"
                    name=""
                    className="w-full p-2 border border-lime-900 rounded-sm placeholder:capitalize placeholder:text-black placeholder:text-sm"
                    placeholder="subject"
                  />
                </div>
                <textarea
                  name=""
                  className="w-full min-h-[200px] p-2 border border-lime-900 rounded-sm placeholder:capitalize placeholder:text-black placeholder:text-sm"
                  placeholder="your message"
                ></textarea>
                <button
                  type="submit"
                  className="max-md:block bg-lime-800 text-white px-4 py-2 rounded-md capitalize font-medium hover:bg-lime-900"
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
