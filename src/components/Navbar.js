import React, { useState } from "react";
import { NavbarItems } from "../StaticData";

const Navbar = () => {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const handleNavToggle = () => {
    setShowSecondaryNav(!showSecondaryNav);
  };
  return (
    <div className={`${showSecondaryNav ? 'h-80' : 'h-20'} lg:flex lg:justify-between items-center py-7 px-5 lg:h-20 sm:px-[6.6116%] transition-[height] ease-in-out duration-100`} >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-5">
            <img className="w-full" src="assets/images/logo.png" alt="logo" />
          </div>
          <span className="sm:text-[1.5rem]">BARBE & CIMON NOTAIRES</span>
        </div>

        <span className="block lg:hidden" onClick={handleNavToggle}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>
      {showSecondaryNav ? (
        <div className="flex flex-col py-7 gap-5 items-center w-full lg:hidden">
          {NavbarItems.map((item) => (
            <span className="text-base block">{item}</span>
          ))}
          <span className="text-base block">EN</span>
        </div>
      ) : (
        <></>
      )}
      <div className="hidden lg:flex flex-row gap-3 xl:gap-5 items-center  lg:w-7/10">
          {NavbarItems.map((item) => (
            <span className="text-lg block">{item}</span>
          ))}
           <span className="text-base block">EN</span>
        </div>
    </div>
  );
};

export default Navbar;
