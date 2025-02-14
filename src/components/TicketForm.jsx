// import { useNavigate } from "react-router-dom";

const TicketForm = ({ numTickets, setNumTickets }) => {
  const handleNumTicketsChange = (e) => {
    setNumTickets(Number(e.target.value));
  };
  return (
    <div className="my-4 w-full flex flex-col space-y-2 font-light">
      <label
        htmlFor="ticketCount"
        className="block text-white text-lg font-roboto mb-2"
      >
        Number of Tickets:
      </label>

      <input
        id="ticketCount"
        type="number"
        value={numTickets}
        onChange={handleNumTicketsChange}
        min="1"
        className="w-full p-3 md:p-4 border mb-10 border-[#197686] rounded-lg bg-transparent text-white  outline-none focus:border-[#24A0B5] transition-all"
      />
    </div>
  );
};

{
  /* <div className="my-4">
        <label className="block text-sm sm:text-base mb-2 font-light">
          Number of Tickets:
        </label>
        <Select
          options={quantityOptions}
          value={
            quantity ? { value: quantity, label: quantity.toString() } : null
          }
          onChange={(selectedOption) => {
            setQuantity(selectedOption.value);
            setQuantityError("");
          }}
          styles={customStyles}
          menuPlacement="bottom"
        />
        {quantityError && <p className="text-red-500 mt-2">{quantityError}</p>}
      </div> */
}

export default TicketForm;
