// import React from "react";

import { logoIcon, ticz } from "../appimages";

const NavBar = () => {
  return (
    <nav
      className="sticky flex justify-between
     navbar w-[100%] border-[#197686] border-[1px] bg-[rgba(5, 37, 44, 0.50)]
      h-[60px] md:h-[76px] py-[12px] rounded-[24px] px-[16px] items-center mt-[20px] space-x-96 font-mono "
    >
      <div className="flex gap-[10px]">
        <img src={logoIcon} alt="logo" />
        <img src={ticz} alt="ticz" />
      </div>

      <div className="justify-center items-center text-center font-mono">
        <ul className="text-[#ffffff] flex flex-row space-x-16  md:flex md:gap-[26px] md:justify-between md:items-center  ">
          <li>Events</li>
          <li>My Tickets</li>
          <li>About</li>
        </ul>
      </div>

      <button className="bg-white flex justify-center items-center h-[44px] w-[141px] rounded-[12px] md:h-[52px] md:w-[169px] gap-[8px]">
        <span>My Tickets </span>
        {/* <img src={} alt="" /> */}
      </button>
    </nav>
  );
};

export default NavBar;
