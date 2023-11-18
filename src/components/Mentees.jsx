import React from "react";
import { mentees } from "../data/Mentees";
import MenteeCard from "./MenteeCard";

const Mentees = () => {
  return (
    <div className="relative flex overflow-x-hidden py-3">
      <div className="flex animate-scroll">
        {mentees.map((item) => {
          return <MenteeCard key={item.id} mentee={item} />;
        })}
      </div>
      <div className="absolute top-0 flex animate-scroll2 py-3">
        {mentees.map((item) => {
          return <MenteeCard key={item.id} mentee={item} />;
        })}
      </div>
    </div>
  );
};

export default Mentees;
