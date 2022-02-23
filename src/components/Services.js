import React from "react";
import { servicesItemColor } from "../StaticData";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="px-5 sm:px-[6.6116%] py-10 bg-white right-0 left-0 mt-[-10rem]  relative">
      <div>
        <h6 className="text-blue-900 text-xs">NOS</h6>
        <h2 className="text-blue-900 text-3xl">SERVICES</h2>
      </div>

      <div className="flex w-full flex-col sm:flex-row flex-wrap gap-2 mt-5">
        {servicesItemColor.map((item, i) => (
          <ServicesCard key={i} color={item.color} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Services;
