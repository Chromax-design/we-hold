import React from "react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <div className="max-lg:hidden flex gap-5 items-center">
      <Link
        to={"/auth/signup-as-a-mentor"}
        className="bg-lime-800 text-white px-4 py-2 rounded-md capitalize font-medium hover:bg-lime-900"
      >
        Get started
      </Link>
      <Link
        className={`capitalize font-semibold text-sm p-3`}
        to={`/auth/login`}
      >
        login
      </Link>
    </div>
  );
};

export default Actions;
