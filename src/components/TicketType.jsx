const TicketType = () => {
  const ticketData = [
    { id: 1, price: "Free", label: "REGULAR ACCESS 20/92" },
    { id: 2, price: "$150", label: "VIP ACCESS 20/52" },
    { id: 3, price: "$150", label: "VIP ACCESS 20/92" },
  ];

  return (
    <div className="flex flex-row space-x-2 absolute">
      {" "}
      {ticketData.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-center w-[158px] h-[110px] rounded-lg border border-[#197686] bg-[#12464E] p-3 cursor-pointer hover:border-[#24A0B5] transition-all space-x-0.5"
        >
          <p>{item.price}</p>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketType;
