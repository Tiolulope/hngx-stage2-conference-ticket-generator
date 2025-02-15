// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReadyTicket from "./ReadyTicket";

// import other components
import TicketType from "./TicketType";
import TicketForm from "./TicketForm";
import { useTicket } from "./TicketContext";
import { useEffect, useState } from "react";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ticketError, setTicketError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const navigate = useNavigate();
  const { ticketType, setTicketType, numTickets, setNumTickets } = useTicket();

  useEffect(() => {
    const savedTicket = JSON.parse(localStorage.getItem("ticketSelection"));
    if (savedTicket) {
      setSelectedTicket(savedTicket.ticket);
      setQuantity(savedTicket.quantity);
    }
  }, []);

  useEffect(() => {
    if (selectedTicket) {
      localStorage.setItem(
        "ticketSelection",
        JSON.stringify({ ticket: selectedTicket, quantity })
      );
    }
  }, [selectedTicket, quantity]);

  const quantityOptions = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#08252B",
      borderColor: "#07373F",
      color: "white",
      "&:hover": {
        borderColor: "#07373F",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#07373F" : "#08252B",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#08252B",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <div className="w-full max-w-4xl bg-[#08252B] p-6 md:p-10 border border-[#197686] rounded-2xl flex flex-col items-center space-x-6">
      <section className="">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-white space-x-9">
          <h1 className="text-2xl md:text-3xl sm:text-3xl font-mono JejuMyeongjo">
            Ticket Selection
          </h1>
          <span>
            <p className="text-gray-300 mt-2 md:mt-0">Step 1/3</p>
          </span>
        </div>

        <div className="loading-bar mb-6">
          <div className="filled-bar" style={{ width: "40%" }}></div>
        </div>
      </section>

      <div
        className="w-full text-white text-center p-4 md:p-6 rounded-lg"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      >
        <h1 className="text-3xl md:text-5xl road-rage-regular">
          Techember Fest &apos;&apos;25
        </h1>
        <p className="m-2 sm:w-[50%] mx-auto text-gray-300 text-sm mt-3 w-[80%]">
          Join us for an unforgettable experience! at [Event Name]! Secure your
          spot now.
        </p>
        <p className="text-white text-sm mt-2">
          📍 [Event Location] || March 15, 2025 | 7:00 PM{" "}
        </p>
      </div>

      <div className="loading-bar my-6"></div>

      {/* <hr className="bg-[#07373F] h-[4px] rounded-sm" /> */}

      <div className="w-full text-white font-mono">
        <p className="text-lg mb-3">Select Ticket Type:</p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-4">
        <TicketType />
      </div>

      <div className="w-full flex justify-center">
        <TicketForm setNumTickets={setNumTickets} numTickets={numTickets} />
      </div>

      {ticketType && <ReadyTicket />}

      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center JejuMyeongjo">
        <button className="w-full cursor-pointer sm:w-1/2 h-12 border rounded-lg flex items-center justify-center text-[#24A0B5] border-[#24A0B5] bg-transparent hover:bg-[#24A0B5] hover:text-white transition-all">
          <span
            className="text-base font-medium font-mono"
            onClick={() => {
              setSelectedTicket(null);
              setQuantity(1);
              setTicketError("");
              setQuantityError("");
            }}
          >
            Cancel
          </span>
        </button>
        <button
          onClick={() => navigate("/attendee-details")}
          className="w-full sm:w-1/2 h-12 rounded-lg flex items-center justify-center bg-[#24A0B5] text-white border border-[#07373F] hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-all cursor-pointer"
        >
          <span className="text-base font-medium font-mono text-[#ffffff]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
