import { Routes, Route } from "react-router-dom";
import TicketPage from "./pages/Ticketpage.js";

import TicketVerification from "./pages/TicketVerification.js";
import UpcomingEvents from "./pages/Upcoming-events.tsx";
import EventCreated from "./pages/event-created.tsx";
import Home from "@/pages/home.tsx";
import { Header } from "@components/Header.tsx";
import CreateEvent from "@pages/create-event.tsx";
import { Toaster } from "@components/ui/toaster.tsx";
import EventsPage from "./pages/new-event.tsx";
import EventDetail from "./pages/new-event-details.tsx";

const App = () => {
  return (
    <div className=" h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify-ticket" element={<TicketVerification />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/new-events" element={<UpcomingEvents />} />
        <Route path="/event-created" element={<EventCreated />} />
        <Route path="/event" element={<EventsPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
