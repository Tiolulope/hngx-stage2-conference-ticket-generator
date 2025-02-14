// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AttendeeDetails from "./components/AttendeeDetails";
import NavBar from "./components/NavBar";
import ReadyTicket from "./components/ReadyTicket";
import TicketSelection from "./components/TicketSelection";
// import TicketForm from "./components/TicketForm";
import { TicketProvider } from "./components/TicketContext";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <TicketProvider>
      <Router>
        <NavBar />
        <div
          className="w-full min-h-screen flex flex-col items-center justify-start px-4 md:px-8 lg:px-16 py-6 gap-6"
          style={{
            background:
              "linear-gradient(0deg, #02191D, #02191D), radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
          }}
        >
          <div className="min-hscreen bg-[#041e23] p-6 flex justify-center items-center">
            <Routes>
              <Route path="/" element={<TicketSelection />} />
              <Route path="/attendee-details" element={<AttendeeDetails />} />
              <Route path="/ready-ticket" element={<ReadyTicket />} />
              <Route path="/about-page" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TicketProvider>
  );
};

export default App;
