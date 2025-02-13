import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReadyTicket = () => {
  const barcodeRef = useRef(null);
  const ticketRef = useRef(null); // Reference for the ticket container

  useEffect(() => {
    if (barcodeRef.current) {
      try {
        JsBarcode(barcodeRef.current, "123456789", {
          format: "CODE128",
          lineColor: "#000", // Black barcode lines
          background: "#fff", // White background
          width: 2,
          height: 50,
          displayValue: true, // Show ticket number
        });
      } catch (error) {
        console.log("Barcode generation error!", error);
      }
    }
  }, []);

  // Function to generate and download PDF
  const downloadPDF = () => {
    const ticketElement = ticketRef.current;

    html2canvas(ticketElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size

      pdf.addImage(imgData, "PNG", 10, 10, 190, 100); // Position and size
      pdf.save("ticket.pdf"); // Download as 'ticket.pdf'
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-[#08252B] p-6 md:p-10 border border-[#197686] rounded-2xl text-white">
      <section className="flex flex-col space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-mono">Ready</h1>
          <span>
            <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
              Step 3/3
            </p>
          </span>
        </div>
        <div className="bg-[#13bcd6] h-[4px] rounded-sm w-[100%]"></div>
      </section>

      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-Alatsi">
          Your Ticket is Booked!
        </h1>
        <p className="text-gray-300 mt-6">
          Check your email for a copy or{" "}
          <b
            className="text-white cursor-pointer hover:underline"
            onClick={downloadPDF}
          >
            download
          </b>
        </p>

        {/* Ticket Container for PDF Export */}
        <div
          ref={ticketRef}
          className="bg-white text-black p-6 rounded-md mt-6"
        >
          <h2 className="text-xl font-bold">Techember Fest &apos 25</h2>
          <p className="text-sm">
            📍 [Event Location] || March 15, 2025 | 7:00 PM
          </p>
          <p className="text-sm">Ticket ID: 123456789</p>
          {/* Barcode */}
          <svg ref={barcodeRef} className="mx-auto mt-4"></svg>
        </div>

        {/* Download PDF Button */}
        <button
          onClick={downloadPDF}
          className="mt-6 px-6 py-3 bg-[#24A0B5] text-white rounded-lg hover:bg-[#0a4a54] transition-all"
        >
          Download Ticket PDF
        </button>
      </div>
    </div>
  );
};

export default ReadyTicket;
