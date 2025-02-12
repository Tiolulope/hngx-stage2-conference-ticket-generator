// import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky flex justify-between navbar w-[100%] border-[#197686] border-[1px] bg-[rgba(5, 37, 44, 0.50)] h-[60px] md:h-[76px] py-[12px] rounded-[24px] px-[16px] items-center mt-[20px] ">
      <div className="flex gap-[10px]">
        {/* <img src={} alt="" />
        <img src={} alt="" /> */}
      </div>

      <ul>
        <li>Events</li>
        <li>My Ticket</li>
        <li>About</li>
      </ul>
      <button className="bg-white flex justify-center items-center h-[44px] w-[141px] rounded-[12px] md:h-[52px] md:w-[169px] gap-[8px]">
        <span>My Tickets </span>
        {/* <img src={} alt="" /> */}
      </button>
    </nav>
  );
};

export default NavBar;
