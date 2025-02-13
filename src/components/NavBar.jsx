// import React from "react";

import { useState } from "react";
import { arrow, logoIcon, ticz } from "../appimages";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="w-full top-0 sticky flex flex-row md:flex-row justify-between
     navbar border-[#197686] border-[1px] bg-[rgba(5, 37, 44, 0.50)]
      h-auto md:h-[76px] py-[12px] rounded-[24px] px-[16px] items-center
      mt-[20sticky top-0 w-full bg-[rgba(5, 37, 44, 0.50)] border border-[#197686]
      h-[60px] md:h-[76px] rounded-[24px] px-4 md:px-8 flex items-center 
      justify-between font-monopx] font-mono gap-4"
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <img src={logoIcon} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={ticz} alt="ticz" className="w-16 md:w-20" />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <ul
        className={`absolute top-[60px] left-0 w-full bg-[rgba(5, 37, 44, 0.9)] md:static md:flex md:space-x-8 items-center text-white text-lg transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li className="p-4 md:p-0 hover:text-[#197686] cursor-pointer">
          Events
        </li>
        <li className="p-4 md:p-0 hover:text-[#197686] cursor-pointer">
          My Tickets
        </li>
        <li className="p-4 md:p-0 hover:text-[#197686] cursor-pointer">
          About Project
        </li>
      </ul>

      <button className="hidden md:flex bg-white text-black h-[44px] md:h-[52px] w-[141px] md:w-[169px] rounded-[12px] gap-2 items-center justify-center cursor-pointer">
        <span>My Tickets </span>
        <img src={arrow} alt="arrow" className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default NavBar;
