import React, { useState } from "react";
// import Select from "react-select";

const TicketType = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketError, setTicketError] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [quantityError, setQuantityError] = useState("");

  const ticketData = [
    { id: 1, price: "Free", label: "REGULAR ACCESS 20/92" },
    { id: 2, price: "$150", label: "VIP ACCESS 20/52" },
    { id: 3, price: "$150", label: "VIP ACCESS 20/92" },
  ];

  const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#041E23",
      color: "#fff",
      borderColor: "#197686",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto p-4">
        {ticketData.map((ticketdata) => (
          <button
            key={ticketdata.id}
            className={`cursor-pointer flex flex-col p-2 border-2 text-white  rounded-lg transition-all border-[#197686] ${
              selectedTicket?.label === ticketdata.label
                ? "bg-[#12464E]"
                : "bg-[#041E23]"
            }`}
            onClick={() => {
              setSelectedTicket(ticketdata);
              setTicketError("");
            }}
          >
            <span className="mb-2 font-semibold text-lg">
              {ticketdata.price}
            </span>
            <span className="text-sm uppercase">{ticketdata.label}</span>
          </button>
        ))}
        {ticketError && <p className="text-red-500 mt-2">{ticketError}</p>}
      </div>
    </>
  );
};

export default TicketType;
