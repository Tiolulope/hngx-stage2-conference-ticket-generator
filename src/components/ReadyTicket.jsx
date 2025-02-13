// import React from "react";

const ReadyTicket = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#08252B] p-6 md:p-10 border border-[#197686] rounded-2xl text-white">
      <section className="flex flex-col space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-mono">Ready</h1>
          <span>
            <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
              Step 3/3
            </p>
          </span>
        </div>

        <div className="bg-[#13bcd6] h-[4px] rounded-sm w-[100%]"></div>
      </section>

      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-Alasti">
          Your Ticket is Booked!
        </h1>

        <div className="">
          <p className="text-gray-300 mt-6">
            Check your email for a copy or you can{" "}
            <span>
              <b className="text-white cursor-pointer hover:underline">
                download
              </b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadyTicket;
