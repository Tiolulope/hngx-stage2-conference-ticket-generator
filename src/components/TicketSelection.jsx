import { useState } from "react";

// import other components
import TicketType from "./TicketType";
import TicketForm from "./TicketForm";

const TicketSelection = () => {
  const [ticketType, setTicketType] = useState("");
  const [numTickets, setNumTickets] = useState(1);

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleNumTicketsChange = (e) => {
    setNumTickets(e.target.value);
  };

  return (
    <div
      className="items-center mt-10 w-[100%] bg-[#08252B] ms:bg-[#041E23]
     p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[55%] md:p-[48px] rounded-2xl space-x-10 space-y-6"
    >
      <section className="flex-col justify-center items-center space-y-3">
        <div className="text-white md:flex md:justify-between md:items-center">
          <h1 className="text-[24px] md:text-[32px] sm:text-3xl  text-white font-mono">
            Ticket Selection
          </h1>
          <span>
            <p className="text-gray-300 mt-2 flex-row ml-96">Step 1/3</p>
          </span>
        </div>
        <div className="bg-[#0e464f] h-[4px] rounded-sm w-[100%]"></div>
      </section>

      <div
        className="banner min-h-[243px]  p-[10px] md:p-[24px] text-white text-center text-[14px] flex-col justify-center items-center space-y-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      >
        <h1 className="font-roadRage banner-head text-[50px] md:text-[62px]">
          Techember Fest ”25
        </h1>
        <p className="text-gray-300 text-sm mt-2 text-center items-center">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <p className="text-gray-600 text-sm mt-2 justify-center items-center text-center">
          📍 [Event Location] || March 15, 2025 | 7:00 PM{" "}
        </p>
      </div>

      <hr className="bg-[#07373F] h-[4px] rounded-sm" />

      <div className="text-white font-roboto">
        <p className="text-lg text-white mb-4">Select Ticket Type:</p>
      </div>

      <div className="w-full sm:w-[556p] h-[142px] border rounded-[24px] flex flex-col gap-4 p-4 mb-20 justify-center items-center">
        <TicketType />

        {/* <div className="flex flex-row gap-4">
          {[
            { Value: "free", label: "Free - REGULAR ACCESS 20/92" },
            { Value: "free", label: "$150 - VIP ACCESS 20/52" },
            { Value: "free", label: "$150 - VIP ACCESS 20/92" },
          ].map((ticket) => (
            <label
              key={ticket.value}
              className="flex flex-col items-center justify-center w-[158px] h-[110px] rounded-lg border border-[#197686] bg-[#12464E] p-3 cursor-pointer hover:border-[#24A0B5] transition-all"
            >
              <input
                type="radio"
                name="ticketType"
                value="free"
                onChange={handleTicketTypeChange}
                className="hidden"
              />

              <span className="text-white text-sm text-center">
                {ticket.label}
              </span>
            </label>
          ))}
        </div> */}
      </div>

      <div className="items-center justify-center w-full">
        <TicketForm
          numTickets={numTickets}
          handleNumTicketsChange={handleNumTicketsChange}
        />
      </div>

      {/* <label className="w-[158px] h-[110px] border rounded-lg flex flex-col gap-3 p-3 bg-[#12464E] border-[#197686] ">
            Free - REGULAR ACCESS 20/92
          </label>
          <label className="w-[158px] h-[110px] border rounded-lg flex flex-col gap-3 p-3 bg-[#12464E] border-[#197686]">
            <input
              type="radio"
              name="ticketType"
              value="vip1"
              onChange={handleTicketTypeChange}
              className="text-gray-300 text-xs"
            />
            $150 VIP ACCESS 20/52
          </label>
          <label className="w-[158px] h-[110px] border rounded-lg flex flex-col gap-3 p-3 bg-[#12464E] border-[#197686]">
            <input
              type="radio"
              name="ticketType"
              value="vip2"
              onChange={handleTicketTypeChange}
              className="text-gray-300 text-xs"
            />
            $150 - VIP ACCESS 20/92
          </label>
        */}

      <div className="flex flex-row space-x-20 justify-center items-center">
        <button
          className="w-full sm:w-[266px] h-12 border rounded-lg pt-3 pr-4 pb-3 pl-4 flex items-center
        justify-center gap2 border-[#24A0B5] bg-transparent text-[#24a0b5] hover:bg-[#24A0B5]
        hover:text-white transiton-all cursor-pointer
        "
        >
          <span className="text-base font-medium font-mono">Cancel</span>
        </button>
        <button className="cursor-pointer w-full sm:w-[266px] h-12 rounded-lg pt-3 pr-4 pb-3 pl-4 flex items-center justify-center gap-2 border border-[#07373F] bg-[#24A0B5] text-white hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-all">
          <span className="text-base font-medium font-mono text-[#ffffff]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
