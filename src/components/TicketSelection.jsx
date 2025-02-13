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
    <div className="w-full max-w-4xl bg-[#08252B] p-6 md:p-10 border border-[#197686] rounded-2xl flex flex-col items-center space-x-6">
      <section className="">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-white space-x-9">
          <h1 className="text-2xl md:text-3xl sm:text-3xl font-mono">
            Ticket Selection
          </h1>

          <span>
            <p className="text-gray-300 mt-2 md:mt-0">Step 1/3</p>
          </span>
        </div>

        <div className="w-full bg-[#0c9fb6] h-[4px] rounded-sm mb-10"></div>
      </section>

      <div
        className="w-full text-white text-center p-4 md:p-6 rounded-lg"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-roadRage">
          Techember Fest ”25
        </h1>
        <p className="text-gray-300 text-sm mt-2">
          Join us for an unforgettable experience! at [Event Name]! Secure your
          spot now.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          📍 [Event Location] || March 15, 2025 | 7:00 PM{" "}
        </p>
      </div>

      <hr className="bg-[#07373F] h-[4px] rounded-sm" />

      <div className="w-full text-white font-mono">
        <p className="text-lg mb-4">Select Ticket Type:</p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-4">
        <TicketType />
      </div>

      <div className="w-full flex justify-center">
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

      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center">
        <button className="w-full sm:w-1/2 h-12 border rounded-lg flex items-center justify-center text-[#24A0B5] border-[#24A0B5] bg-transparent hover:bg-[#24A0B5] hover:text-white transition-all">
          <span className="text-base font-medium font-mono">Cancel</span>
        </button>
        <button className="w-full sm:w-1/2 h-12 rounded-lg flex items-center justify-center bg-[#24A0B5] text-white border border-[#07373F] hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-al">
          <span className="text-base font-medium font-mono text-[#ffffff]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
