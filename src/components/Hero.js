import React from "react";

const Hero = () => {
  return (
    <div className="z-0">
      <div className="flex lg:h-80 bg-gradient-to-t from-red-200 py-8 lg:pt-8 px-5 sm:pl-[6.6116%] items-center lg:justify-between">
        <div className="">
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <p className="text-red-700">NOUS VALORISONS LA,</p>
            <h1 className="text-5xl text-red-700">CLARTE </h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <button className="text-red-700 border-solid border-1 border-red-300 pt-1 pb-1 px-7 mt-5 font-bold">
            En savoir plus
          </button>
        </div>
        <div className="w-[32rem] hidden sm:block">
          <img className="w-full" src="assets/images/pen.png" alt="pen" />
        </div>
      </div>
      <div className="h-[20rem] lg:h-[32rem]">
        <img className="w-full h-full" src="assets/images/houses.png" alt="house"/>
      </div>
    </div>
  );
};

export default Hero;
