import React from "react";
import { admin } from "../data/Admin";

const Admin = () => {
  return (
    <div className="space-y-10">
      {admin.map((item) => {
        return (
          <div className="flex max-md:flex-col gap-10 item-start md:even:flex-row-reverse shadow-xl p-10 rounded-xl border-black border-t-2" key={item.id}>
            <img
              src={`${item.photo}`}
              alt=""
              className=" max-md:mx-auto max-md:shadow-md object-cover h-60 w-60 rounded-xl object-top flex-initial"
            />
            <div className="flex-1 text-lg">
              <p className="italic">
                <q>{item.message}</q>
              </p>
              <h4 className="capitalize font-semibold mt-5">{`- ${item.name} ${item.title}`}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
