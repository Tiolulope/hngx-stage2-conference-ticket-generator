// import React from "react";
import NavBar from "./components/NavBar";
import TicketSelection from "./components/TicketSelection";

const App = () => {
  return (
    <div
      className=" max-w-full body flex flex-col justify-start items-center gap10
    "
      style={{
        background:
          "linear-gradient(0deg, #02191D, #02191D), radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
      }}
    >
      <div>
        <NavBar />
        <TicketSelection />
      </div>
    </div>
  );
};

export default App;
