// import React from "react";
import AttendeeDetails from "./components/AttendeeDetails";
import NavBar from "./components/NavBar";
import ReadyTicket from "./components/ReadyTicket";
import TicketSelection from "./components/TicketSelection";

const App = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start px-4 md:px-8 lg:px-16 py-6 gap-6"
      style={{
        background:
          "linear-gradient(0deg, #02191D, #02191D), radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
      }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center gap-6">
        <NavBar />
        <TicketSelection />
        <AttendeeDetails />
        <ReadyTicket />
      </div>
    </div>
  );
};

export default App;
