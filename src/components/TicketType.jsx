const TicketType = () => {
  const ticketData = [
    { id: 1, price: "Free", label: "REGULAR ACCESS 20/92" },
    { id: 2, price: "$150", label: "VIP ACCESS 20/52" },
    { id: 3, price: "$150", label: "VIP ACCESS 20/92" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto p-4">
      {" "}
      {ticketData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] h-[120px] rounded-lg border border-[#197686] bg-[#12464E] p-4 cursor-pointer hover:border-[#24A0B5] transition-all text-white text-center"
        >
          <p className="text-lg font-bold">{item.price}</p>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketType;
