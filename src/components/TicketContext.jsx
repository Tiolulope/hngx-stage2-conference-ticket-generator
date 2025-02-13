import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketType, setTicketType] = useState("");
  const [numTickets, setNumTickets] = useState(1);

  return (
    <TicketContext.Provider
      value={{ ticketType, setTicketType, numTickets, setNumTickets }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
