import React from "react";
import { NavbarItems } from "../StaticData";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5  sm:px-[6.6116%] lg:py-20">
      <div className="flex lg:w-1/2">
        <div className="w-6 h-6 mr-5">
          <img className="w-full" src="assets/images/logo.png" alt="logo" />
        </div>
        <span className="lg:text-3xl">BARBE & CIMON NOTAIRES</span>
      </div>
      <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row">
        <div className="gap-5 w-full lg:w-1/2">
          {NavbarItems.map((item) => (
            <span className="text-lg block">{item}</span>
          ))}
        </div>
        <div className="mt-5 lg:mt-0">
          <h3>BUREAU</h3>
          <p>101 BOULEVARD SAINT JOSEPH O, MONTRÉAL, QC H2T 2P7</p>
          <h3>NOUS SUIVRE</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
