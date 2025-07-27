import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import TicketPage from "./pages/Ticketpage.js";
import EventRegistrationPage from "./pages/events-page.tsx";

import TicketVerification from "./pages/TicketVerification.js";
import UpcomingEvents from "./pages/Upcoming-events.tsx";
import EventCreated from "./pages/event-created.tsx";
import Home from "@pages/new-home.tsx"
import { Header } from "@components/Header.tsx";





const App = () => {
  return (
    <div className="bg-[#000022] h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify-ticket" element={<TicketVerification />} />
        <Route path="/create-event" element={<TicketPage />} />
        <Route path="/events/:id" element={<EventRegistrationPage />} />
        <Route path="/new-events" element={<UpcomingEvents />} />
        <Route path="/event-created" element={<EventCreated />} />
      </Routes>
    </div>
  );
};

export default App;
