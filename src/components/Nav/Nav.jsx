import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/logos/logo-full.png";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Actions from "./Actions";

import UserAvatar from "./UserAvatar";

import useAuth from "../../store/AuthStore";

const Nav = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);
  const [toggles, setToggles] = useState([false, false, false]);

  const handleClick = () => {
    setMenu(!menu);
  };

  const toggle = (id) => {
    const newToggles = [...toggles];
    newToggles[id - 1] = !newToggles[id - 1];
    setToggles(newToggles);
  };

  return (
    <div>
      <nav className={`relative py-3 px-2 sm:px-5 md:p-2 shadow-md bg-white`}>
        <div className="flex justify-between items-center max-w-6xl m-auto px-3">
          <div
            className={`w-auto bg-white shadow-none static flex gap-10 items-center z-30`}
          >
            <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className={` max-sm:w-[150px] w-[200px]`}
              />
            </Link>

            {/* desktop menu */}
            <DesktopMenu
              handleClick={handleClick}
              toggles={toggles}
              toggle={toggle}
              menu={menu}
              user={user}
            />
          </div>

          <div className="flex items-center gap-2 relative">
            {user ? <UserAvatar userType={user.role} /> : <Actions />}

            {/* mobile */}
            <MobileMenu menu={menu} handleClick={handleClick} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
