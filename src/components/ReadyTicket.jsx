// import React from "react";

const ReadyTicket = () => {
  return (
    <div
      className="items-center mt-10 w-[100%] bg-[#08252B] ms:bg-[#041E23]
     p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[55%] md:p-[48px]
    rounded-2xl space-x-10 space-y-6"
    >
      <section className="flex-col justify-center items-center space-y-3">
        <div className="text-white md:flex md:justify-between md:items-center">
          <h1 className="text-[24px] md:text-[32px] sm:text-3xl  text-white font-mono">
            Ready
          </h1>
          <span>
            <p className="text-gray-300 mt-2 flex-row ml-96">Step 3/3</p>
          </span>
        </div>
        <div className="bg-[#13bcd6] h-[4px] rounded-sm w-[100%]"></div>
      </section>

      <div className="mt-10">
        <div className="font-bold justify-center items-center">
          <h1 className="text-[32px] text-[#ffffff] text-center font-Alatsi">
            Your Ticket is Booked!
          </h1>
        </div>

        <div className="mt-10">
          <p className="text-gray-300 text-center">
            Check your email for a copy or you can{" "}
            <span>
              <b>download</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadyTicket;
