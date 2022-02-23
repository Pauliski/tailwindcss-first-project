import React from "react";

const ServicesCard = ({ color, text }) => {
  return (
    <div
      className={`${color} w-[98%]  sm:w-72 px-20  h-16 rounded-md flex  sm:flex-wrap items-center justify-center text-center`}
    >
      <div className="w-52">
        <p className="text-white">{text}</p>
      </div>
      
    </div>
  );
};

export default ServicesCard;
