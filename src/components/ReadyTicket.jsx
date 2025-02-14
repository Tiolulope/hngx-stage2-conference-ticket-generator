import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import barCode from "../assets/barCode.svg";
import locationPin from "../assets/locationPin.svg";
import calendar from "../assets/calendar.svg";

localStorage.setItem(
  "attendeeDetails",
  JSON.stringify({
    name: "John Doe",
    email: "johndoe@email.com",
    message: "No special requests",
    imageUrl: "https://via.placeholder.com/150",
  })
);

localStorage.setItem(
  "ticketSelection",
  JSON.stringify({
    ticket: { type: "VIP Ticket" },
    quantity: 1,
  })
);

localStorage.setItem(
  "attendeeDetails",
  JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    imageUrl: "",
    message: "No requests",
  })
);
localStorage.setItem(
  "ticketSelection",
  JSON.stringify({
    ticket: { type: "General Admission" },
    quantity: 2,
  })
);
// window.location.reload();

const TicketReady = () => {
  const navigate = useNavigate();
  const [attendee, setAttendee] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleSubmit = () => {
    localStorage.setItem("attendeeDetails", JSON.stringify(attendeeData));
    localStorage.setItem("ticketSelection", JSON.stringify(ticketData));
    navigate("/ticket-ready");
  };

  useEffect(() => {
    const storedDetails = localStorage.getItem("attendeeDetails");
    const savedTicket = localStorage.getItem("ticketSelection");

    console.log("Stored Details:", storedDetails);
    console.log("Saved Ticket:", savedTicket);

    if (storedDetails && savedTicket) {
      setAttendee(JSON.parse(storedDetails));
      setSelectedTicket(JSON.parse(savedTicket));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [JSON.stringify({ attendee, selectedTicket }, null, 2)],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "ticket_details.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-[#041E23] text-white rounded-2xl border border-[#197686]">
      <div className="flex justify-between">
        <p className="text-xl font-light mb-2 JejuMyeongjo">Ready</p>
        <p>Step 3/3</p>
      </div>
      <div className="loading-bar mb-6">
        <div className="filled-bar w-full bg-[#197686] h-1"></div>
      </div>

      <div className="text-center my-6 sm:my-10 flex flex-col gap-3">
        <p className="text-2xl sm:text-3xl font-semibold alatsi-regular">
          Your Ticket is Booked!
        </p>
        <p className="text-sm sm:text-base">
          Check your email for a copy or{" "}
          <span className="font-bold cursor-pointer" onClick={handleDownload}>
            download
          </span>
        </p>
      </div>

      <div className="box p-4 sm:p-6 max-w-lg mx-auto rounded-xl ticketBg">
        <div className="border-2 border-[#24A0B5] rounded-2xl p-4 sm:p-6">
          <div className="text-center flex flex-col gap-2">
            <p className="road-rage-regular text-3xl sm:text-5xl">
              Techember Fest &apos;&apos;25
            </p>
            <div className="flex justify-center items-center gap-1">
              <img src={locationPin} alt="Location" width={15} />
              <p className="text-gray-300 text-sm sm:text-base">
                [Event Location]
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={calendar} alt="Date" width={15} />
              <p className="text-gray-300 text-sm sm:text-base">
                March 15, 2025 | 7:00 PM
              </p>
            </div>
          </div>

          {attendee && selectedTicket && (
            <div className="mt-6">
              <img
                src={attendee.imageUrl || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-40 h-40 rounded-lg mx-auto border-4 border-[#24A0B5] object-cover"
              />
              <div className="overflow-x-auto">
                <table className="min-w-full bg-[#08343C] rounded-xl mt-4">
                  <tbody>
                    <tr className="border-b border-[#133D44]">
                      <td className="pl-3 pr-3 pt-3 pb-1 border-r border-[#133D44] w-1/2">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">
                          Name:
                        </div>
                        <div className="text-sm sm:text-base font-semibold">
                          {attendee.name}
                        </div>
                      </td>
                      <td className="pl-3 pr-3 pt-3 pb-1 w-1/2">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">
                          Email:
                        </div>
                        <div className="text-sm sm:text-base font-semibold">
                          {attendee.email}
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#133D44]">
                      <td className="pl-3 pr-3 pt-3 pb-1 border-r border-[#133D44] w-1/2">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">
                          Ticket Type:
                        </div>
                        <div className="text-sm sm:text-base font-light">
                          {selectedTicket?.ticket?.type?.split(" ")[0] || "N/A"}
                        </div>
                      </td>
                      <td className="pl-3 pr-3 pt-3 pb-1 w-1/2">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">
                          Ticket For:
                        </div>
                        <div className="text-sm sm:text-base font-light">
                          {selectedTicket.quantity}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="pl-3 pr-3 pt-3 pb-1">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">
                          Special Request?
                        </div>
                        <div className="text-sm sm:text-base font-light">
                          {attendee?.message || "N/A"}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-[85%] md:w-[74%] h-[3px] border-1 border-dashed border-[#197686] rounded-lg mx-auto my-0"></div>

      <div className="box p-4 sm:p-6 max-w-lg mx-auto ticketBg flex justify-center rounded-xl">
        <img src={barCode} alt="Barcode" className="w-[90%]" />
      </div>

      <div className="JejuMyeongjo text-sm flex flex-col-reverse sm:flex-row gap-4 mt-6 sm:mt-10">
        <button
          className="cursor-pointer w-full sm:w-[48%] bg-transparent border-[1px] border-[#24A0B5] hover:text-white py-3 rounded-lg hover:bg-[#197686] text-[#24A0B5]"
          onClick={() => {
            localStorage.removeItem("attendeeDetails");
            localStorage.removeItem("ticketSelection");
            navigate("/");
          }}
        >
          Book Another Ticket
        </button>

        <button
          className="cursor-pointer w-full sm:w-[48%] bg-[#197686] border-[1px] border-[#24A0B5] text-white py-3 rounded-lg hover:bg-transparent hover:text-[#197686] disabled:bg-gray-500"
          onClick={handleDownload}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketReady;
