const TicketForm = ({ numTickets, handleNumTicketsChange }) => {
  return (
    <div>
      <div>
        <div className="mb-5">
          <label className="">
            <h1 className="text-white font-roboto">Number of Tickets</h1>
          </label>
        </div>

        <input
          type="number"
          value={numTickets}
          onChange={handleNumTicketsChange}
          min="1"
          className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff] items-center space-x-96"
        />
      </div>
    </div>
  );
};

export default TicketForm;
