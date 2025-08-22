import React, { useState } from "react";
import { Search, Plus, Bell, MapPin, User, Calendar } from "lucide-react";
import Modal, { useModal } from "../components/modal";
import EventDetail from "./new-event-details";
import { Button } from "@components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  time: string;
  organizer: string;
  location: string;
  image: string;
  isRegistered?: boolean;
  attendees: string[];
}

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [showEventDetail, setShowEventDetail] = useState<Event | null>(null);

  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "The SubSUI Reform",
      date: "April 11",
      day: "Saturday",
      time: "12:00 PM",
      organizer: "David Mabadeje",
      location: "Eko Hotels, Ikeja, Lagos",
      image: "/api/placeholder/200/120",
      isRegistered: true,
      attendees: ["avatar1", "avatar2", "avatar3", "avatar4"],
    },
    {
      id: "2",
      title: "The SubSUI Reform",
      date: "April 12",
      day: "Sunday",
      time: "12:00 PM",
      organizer: "David Mabadeje",
      location: "Eko Hotels, Ikeja, Lagos",
      image: "/api/placeholder/200/120",
      isRegistered: false,
      attendees: ["avatar1", "avatar2", "avatar3", "avatar4"],
    },
  ];

  const pastEvents: Event[] = [];

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const successModal = useModal();

  return (
    <div className="min-h-screen bg-gray-50">
      <Modal
        isOpen={showEventDetail !== null}
        onClose={successModal.closeModal}
        size="sm"
        showCloseButton={false}
        closeOnOverlayClick={false}
        closeOnEscape={false}
      >
        <EventDetail onClose={() => setShowEventDetail(null)} />
      </Modal>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 mt-[6rem]">
        {/* Page Title and Description */}
        <div className="mb-8">
          <h1 className="text-[2.5rem] font-semibold text-gray-900 mb-4">
            Events
          </h1>
          <p className="text-gray-600">
            Discover exciting events tailored just for you! Browse through
            various categories, search by location, or connect with registered
            communities to find the perfect gathering that suits your interests.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 space-x-8 border-b border-gray-200">
          <div className="flex bg-[#E6E6E6B2] p-1 w-fit rounded-md">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`py-2 w-[10rem] text-sm font-medium transition-colors rounded-md cursor-pointer ${
                activeTab === "upcoming"
                  ? "bg-white "
                  : "bg-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-1 w-[10rem] text-sm font-medium transition-colors rounded-md cursor-pointer ${
                activeTab === "past"
                  ? "bg-white "
                  : "bg-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Past
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {currentEvents.map((event) => (
            <div key={event.id} className="flex">
              {/* Date Column */}
              <div className="flex flex-col items-center w-24 mr-8">
                <div className="text-lg font-semibold text-gray-900">
                  {event.date}
                </div>
                <div className="text-sm text-gray-600">{event.day}</div>
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-4"></div>
                <div className="w-px bg-gray-300 flex-1 mt-2"></div>
              </div>

              {/* Event Card */}
              <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-2">
                      {event.time}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {event.title}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          By {event.organizer}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {event.location}
                        </span>
                      </div>
                    </div>

                    {/* Attendees */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex -space-x-4">
                        {event.attendees.map((_, index) => (
                          <div
                            key={index}
                            className="w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                          >
                            {String.fromCharCode(65 + index)}
                          </div>
                        ))}
                        <div className="w-7 h-7 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs">
                          +2
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
                      {event.isRegistered ? (
                        <Button className="bg-[#009900] text-white px-4 py-2 rounded-[16px] text-sm font-medium flex items-center space-x-2 hover:bg-[#009900]">
                          <Calendar className="w-4 h-4" />
                          <span className="text-[1rem]">Registered</span>
                        </Button>
                      ) : (
                        <Button className="bg-gray-900 text-white px-4 py-2 rounded-[16px] text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                          Register Now
                        </Button>
                      )}
                      <Button
                        onClick={setShowEventDetail.bind(null, event)}
                        className="text-gray-600 bg-transparent rounded-[16px] text-[0.9rem] hover:text-gray-800 transition-colors cursor-pointer"
                      >
                        See Details
                      </Button>
                    </div>
                  </div>

                  {/* Event Image */}
                  <div className="ml-6">
                    <div className="w-48 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="relative">
                        {/* Zen garden stones */}
                        <div className="w-12 h-16 bg-gray-700 rounded-full transform rotate-12 relative">
                          <div className="absolute -top-2 -right-1 w-8 h-10 bg-gray-600 rounded-full"></div>
                          <div className="absolute -bottom-1 left-1 w-6 h-8 bg-gray-800 rounded-full"></div>
                        </div>
                        {/* Small plant */}
                        <div className="absolute -top-6 right-2 w-1 h-8 bg-green-500 rounded-full transform rotate-12"></div>
                        <div className="absolute -top-4 right-1 w-1 h-6 bg-green-400 rounded-full transform -rotate-12"></div>
                        {/* Sand ripples */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-1 bg-orange-300 rounded-full opacity-30"></div>
                        <div className="absolute -bottom-6 -left-6 w-28 h-1 bg-orange-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-1 bg-orange-300 rounded-full opacity-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Past Events */}
        {activeTab === "past" && pastEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No past events
            </h3>
            <p className="text-gray-600">
              You haven't attended any events yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default EventsPage;
