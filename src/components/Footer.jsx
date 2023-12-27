import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logos/logo_2.png";
import { footLinks } from "../data/Links";
import { socials } from "../data/Constants";

const Footer = () => {
  return (
    <footer className="bg-orange text-white py-12 px-3 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-start gap-10 justify-between mb-10 max-md:flex-col">
        <div className="basis-4/12">
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="" width={200} />
          </Link>
          <p className="mt-5">
            Connecting founders and marketers with battle-hardened mentors that
            genuinely enjoy helping people
          </p>
          <div className="flex gap-4 mt-3">
            {socials.map((item) => {
              return (
                <Link to={`${item.location}`} key={item.id} target="_blank">
                  <img
                    src={`${item.icon}`}
                    alt=""
                    className=" w-8 shadow-lg hover:scale-110 transition ease-in"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-start gap-7 max-md:gap-10 justify-between max-md:basis-full basis-6/12 w-full flex-wrap">
          {footLinks.map((item) => {
            return (
              <div key={item.title}>
                <h3 className="font-bold capitalize">{item.title}</h3>
                <ul className="flex flex-col">
                  {item.links.map((sublink) => {
                    return (
                      <Link
                        key={sublink.title}
                        to={`/${sublink.location}`}
                        className="capitalize text-sm font-light py-2 hover:font-medium"
                      >
                        {sublink.title}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 text-sm font-light capitalize gap-2 text-center">
        <p>
          &copy; {new Date().getFullYear()} We Hold A Hand. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
