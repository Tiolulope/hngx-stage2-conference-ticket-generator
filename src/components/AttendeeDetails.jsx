import { useNavigate } from "react-router-dom";
import { useTicket } from "./TicketContext";
import { useState } from "react";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const { ticketType, numTickets } = useTicket();

  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!attendeeName || !email) {
      alert("please your name and email");
      return;
    }
    const attendeeData = {
      attendeeName,
      email,
      request,
      ticketType,
      numTickets,
    };
    console.log("Attendee Details:", attendeeData);

    navigate("/ready-ticket");
  };
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#08252B] p-6 md:p-10 border border-[#197686] rounded-2xl">
      <section className="flex flex-col space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <h1 className="text-2xl md:text-3xl font-mono">Attendee Details</h1>
          <span>
            <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
              Step 2/3
            </p>
          </span>
        </div>
        <div className="bg-[#13bcd6] h-[4px] rounded-sm w-[100%]"></div>
      </section>

      <div
        className="w-full min-h-[200px] p-4 md:p-6 text-white text-center flex items-center justify-center rounded-lg mt-6"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      >
        <p className="text-lg">
          You selected <strong>{numTickets}</strong> {ticketType} ticket(s).
        </p>
      </div>

      <hr className="bg-[#07373F] h-[4px] rounded-sm my-6" />

      {/* //Attendee Info //Name */}
      <form action="" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="text-white">
            <label htmlFor="name" className="block text-lg mb-2 font-roboto">
              Enter your name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={attendeeName}
              onChange={(e) => setAttendeeName(e.target.value)}
              className="w-full p-3 border border-[#197686] rounded-lg bg-transparent text-white outline-none focus:border-[#24A0B5] transition-all"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="text-white">
          <label htmlFor="email" className="block text-lg mb-2 font-roboto">
            Enter your Email
          </label>
          <div className="flex items-center border border-[#197686] rounded-lg p-3">
            <img src="/icon.png" alt="gmail-logo" className="w-5 h-5 mr-3" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@avioflagos.io"
              className="flex-1 bg-transparent text-white outline-none"
              required
            />
          </div>
        </div>

        {/* message */}
        <div className="text-white">
          <label htmlFor="request" className="block text-lg mb-2">
            Send Request
          </label>
          <textarea
            id="request"
            className="w-full mb-10 p-3 border border-[#197686] rounded-lg bg-transparent text-white outline-none focus:border-[#24A0B5] transition-all"
            placeholder="Your Requests Messages...."
            onChange={(e) => setRequest(e.target.value)}
            value={request}
          ></textarea>

          {/* <form>
          <input
            type="text"
            placeholder="j"
            className="w-full border rounded-[15px] flex p-4 mb-20 justify-center text-[#ffffff] items-center space-x-96"
          />
        </form> */}
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full md:w-1/2 h-12 border rounded-lg flex items-center justify-center border-[#24A0B5] bg-transparent text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all"
          >
            <span className="text-base font-medium font-mono cursor-pointer">
              Back
            </span>
          </button>

          <button
            type="submit"
            className="w-full md:w-1/2 h-12 rounded-lg flex items-center justify-center border border-[#07373F] bg-[#24A0B5] text-white hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-all"
          >
            <span className="text-base font-medium font-mono text-[#ffffff] cursor-pointer">
              Get My Free Ticket
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
