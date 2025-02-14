import { useNavigate } from "react-router-dom";
import { useTicket } from "./TicketContext";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudDownload, Mail } from "lucide-react";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const { ticketType, numTickets } = useTicket();

  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setImageUrl(fileUrl);
        setImageError("");
      } else {
        setImageError("Invalid file type. Please upload an image.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!attendeeName || !email) {
      alert("Please enter your name and email.");
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
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#08252B] p-6 md:p-10 border-[1px] border-[#197686] rounded-2xl">
      <section className="flex flex-col space-y-3">
        <div className="flex justify-between text-white">
          <p className="text-xl md:text-3xl mb-2 font-light font-mono">
            Attendee Details
          </p>
          <span>
            <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
              Step 2/3
            </p>
          </span>
        </div>
        <div className="loading-bar mb-6">
          <div className="filled-bar" style={{ width: "80%" }}></div>
        </div>
      </section>

      <div
        className="w-full min-h-[200px] p-4 md:p-6 text-white text-center flex items-center justify-center rounded-lg mt-6"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
        }}
      >
        <div className="max-w-lg mx-auto p-4 sm:p-6 bg-[#08252b] text-white rounded-2xl border border-[#197686]">
          <div className="bg-[#052228] p-4 sm:p-6 border border-[#07373F] rounded-2xl">
            <h2 className="text-sm font-semibold mb-4">Upload Photo</h2>
            <div className="bg-[#041E23] p-0 sm:px-20 h-40 flex justify-center w-fit sm:w-full mx-auto">
              <span
                {...getRootProps()}
                className="flex justify-center items-center bg-[#0E464F] border-[3px] border-[#24A0B5] rounded-2xl cursor-pointer h-40 w-40 py-6"
              >
                <input {...getInputProps()} />
                {isLoading ? (
                  <p className="text-center text-white text-xs">Uploading...</p>
                ) : imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-40 h-40 object-contain rounded-2xl"
                  />
                ) : (
                  <p className="text-center text-white text-xs flex flex-col items-center gap-3">
                    <CloudDownload />
                    {isDragActive
                      ? "Drop the file here..."
                      : "Drag & drop or click to upload"}
                  </p>
                )}
              </span>
            </div>
            {imageError && <p className="text-red-500 mt-2">{imageError}</p>}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        <div className="text-white">
          <label htmlFor="name" className="block text-lg mb-2">
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

        <div className="text-white">
          <label htmlFor="email" className="block text-lg mb-2">
            Enter your Email
          </label>
          <div className="flex items-center border border-[#197686] rounded-lg p-3">
            <Mail className="text-white mr-2" />
            {/* <img src="./icon.png" alt="gmail-logo" className="w-5 h-5 mr-3" /> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@example.com"
              className="flex-1 bg-transparent text-white outline-none"
              required
            />
          </div>
        </div>

        <div className="text-white">
          <label htmlFor="request" className="block text-lg mb-2">
            Send Request (Optional)
          </label>
          <textarea
            id="request"
            className="w-full mb-10 p-3 border border-[#197686] rounded-lg bg-transparent text-white outline-none focus:border-[#24A0B5] transition-all"
            placeholder="Your request message..."
            onChange={(e) => setRequest(e.target.value)}
            value={request}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full md:w-1/2 h-12 border rounded-lg flex items-center justify-center border-[#24A0B5] bg-transparent text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition-all"
          >
            Back
          </button>

          <button
            type="submit"
            className="w-full md:w-1/2 h-12 rounded-lg flex items-center justify-center border border-[#07373F] bg-[#24A0B5] text-white hover:bg-[#0a4a54] hover:border-[#0a4a54] transition-all"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
