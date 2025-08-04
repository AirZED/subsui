import { useState } from "react";
import { Plus, MapPin, TicketCheck } from "lucide-react";
import { Input } from "../components/ui/input";
import { SlGlobe } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { PiTicketLight } from "react-icons/pi";
import { TbUsersGroup, TbTargetArrow } from "react-icons/tb";
import { SlWallet } from "react-icons/sl";

import { FaCheck } from "react-icons/fa"; // Add FaCheck for save
import { Button } from "@components/ui/button";
import EventCreationSuccessModal from "@components/EventCreationSuccess";
import Modal, { useModal } from "@/components/modal";
import { useToast } from "@components/ui/use-toast";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [fromDate, setFromDate] = useState("Apr 16th 2025");
  const [fromTime, setFromTime] = useState("09:30 AM");
  const [toDate, setToDate] = useState("Apr 16th 2025");
  const [toTime, setToTime] = useState("02:30 PM");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [enableResale, setEnableResale] = useState(false);
  const [enableVariablePricing, setEnableVariablePricing] = useState(false);

  const [ticketPrice, setTicketPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [editingTicketPrice, setEditingTicketPrice] = useState(false);
  const [editingCapacity, setEditingCapacity] = useState(false);

  //   const successModal = useModal();

  const { toast } = useToast();

  // Handle form submission
  const handleCreateEvent = async () => {
    // Validate required fields
    if (!eventName.trim()) {
      //   toast({
      //     title: "Event Created Successfully",
      //     description: `${eventName} has been created.`,
      //   });
      return;
    }

    try {
      // Simulate API call for event creation
      console.log("Creating event with data:", {
        eventName,
        fromDate,
        fromTime,
        toDate,
        toTime,
        location,
        description,
        ticketPrice,
        capacity,
        enableResale,
        enableVariablePricing,
      });

      // Open success modal

      toast({
        title: "Event Created Successfully",
        description: `${eventName} has been created.`,
        variant: "success",
        icon: <TicketCheck className="text-green-500" />,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pt-[6rem] [&>*]:text-gray-500 [&>*]:text-[.8rem]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* Image Upload Section */}
        <div className="flex-1 bg-white rounded-2xl border-0 p-8 h-80 flex flex-col items-center justify-center long-dashed transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-500" />
          </div>
          <p className="text-brand-light-blue font-medium mb-1">Click here</p>
          <p className="text-gray-500 text-sm">or drag to upload image</p>
        </div>

        {/* Event Details Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-4">
          {/* Event Name */}
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full text-[2rem] font-semibold text-gray-800 placeholder-gray-400 border-none outline-none bg-transparent"
          />

          {/* Date and Time */}
          <div className="flex gap-6 flex ">
            <div className="bg-[#F5F5F5] p-4 rounded-md w-2/3 flex gap-7 ">
              <div className="flex flex-col items-start justify-evenly">
                <div className="flex items-center gap-1 ">
                  <div className="w-2 h-2 bg-[#9E9E9E] rounded-full"></div>
                  From
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#9E9E9E] rounded-full"></div>
                  To
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-[0.05rem]">
                <div className="flex items-center gap-[0.1rem]">
                  <Input
                    type="text"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="bg-[#E0E0E0] py-1 rounded-[5px] text-[.7rem] md:text-[.8rem] border-none outline-none"
                  />
                  <Input
                    type="text"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    className="bg-[#E0E0E0] py-1 rounded-[5px] text-[.7rem] md:text-[.8rem] border-none outline-none focus:bg-gray-200"
                  />
                </div>
                <div className="flex items-center gap-[0.1rem]">
                  <Input
                    type="text"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="bg-[#E0E0E0] rounded-[5px] text-[.7rem] md:text-[.8rem] border-none outline-none focus:bg-gray-200"
                  />
                  <Input
                    type="text"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                    className="bg-[#E0E0E0] py-1 rounded-[5px] text-[.7rem] md:text-[.8rem] border-none outline-none focus:bg-gray-200 "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-[#F5F5F5] p-4 rounded-md w-1/3">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                <SlGlobe className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Timezone</span>
              </div>
              <div className="text-sm text-gray-800 font-medium">GMT +1:00</div>
              <div className="text-xs text-gray-500">Lagos</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center bg-[#F5F5F5] px-4 py-1 rounded-md">
            <MapPin className="w-6 h-6 text-gray-400" />
            <Input
              className="border-none outline-none bg-transparent"
              placeholder="Add Event Location or Virtual Link"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>

          {/* Description */}
          <div className="flex gap-1 flex-col">
            <label className="font-medium ">Event Description</label>
            <textarea
              placeholder="Add description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Event Details */}
          <div className=" flex flex-col gap-1">
            <h3 className="font-medium">Event Details</h3>

            <div className="bg-[#F5F5F5] p-4">
              {/* Tickets */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <PiTicketLight className="text-[1.2rem] text-gray-400" />
                  <span className="">Ticket Price</span>
                </div>
                <div className="flex items-center space-x-2">
                  {editingTicketPrice ? (
                    <div className="flex items-center space-x-1">
                      <Input
                        type="text"
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(e.target.value)}
                        className="w-20 text-sm border border-gray-300 rounded px-2 py-1"
                        placeholder="0.00"
                      />
                      <span className="text-sm text-gray-500">SUI</span>
                      <FaCheck
                        className="cursor-pointer text-green-500"
                        onClick={() => setEditingTicketPrice(false)}
                      />
                    </div>
                  ) : (
                    <>
                      <span className="text-sm">
                        {ticketPrice ? `${ticketPrice} SUI` : "Free"}
                      </span>
                      <FaRegEdit
                        className="text-[1.2rem] text-gray-400 cursor-pointer"
                        onClick={() => setEditingTicketPrice(true)}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <TbUsersGroup className="text-[1.2rem] text-gray-400" />
                  <span className="">Capacity</span>
                </div>
                <div className="flex items-center space-x-2">
                  {editingCapacity ? (
                    <div className="flex items-center space-x-1">
                      <Input
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="w-20 text-sm border border-gray-300 rounded px-2 py-1"
                        placeholder="Unlimited"
                      />
                      <FaCheck
                        className="cursor-pointer text-green-500"
                        onClick={() => setEditingCapacity(false)}
                      />
                    </div>
                  ) : (
                    <>
                      <span className="text-sm">
                        {capacity ? capacity : "Unlimited"}
                      </span>
                      <FaRegEdit
                        className="text-[1.2rem] text-gray-400 cursor-pointer"
                        onClick={() => setEditingCapacity(true)}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Tickets */}

              {/* Capacity */}

              {/* Enable Resale */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <TbTargetArrow className="text-[1.2rem] text-gray-400" />
                  <span className="">Enable Resale</span>
                </div>
                <div
                  className={`w-9 h-5 rounded-full cursor-pointer transition-colors ${
                    enableResale ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  onClick={() => setEnableResale(!enableResale)}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform mt-0.5 ${
                      enableResale ? "translate-x-4.5" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </div>

              {/* Enable Variable Pricing */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <SlWallet className="text-[1.2rem] text-gray-400 " />
                  <span className="">Enable Variable Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">No</span>
                  <div
                    className={`w-9 h-5 rounded-full cursor-pointer transition-colors ${
                      enableVariablePricing ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    onClick={() =>
                      setEnableVariablePricing(!enableVariablePricing)
                    }
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform mt-0.5 ${
                        enableVariablePricing
                          ? "translate-x-4.5"
                          : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Event Button */}
          <Button
            onClick={handleCreateEvent}
            className="w-full bg-brand-light-blue text-white py-4 rounded-xl font-medium text-lg hover:bg-purple-700 transition-colors"
          >
            Create Event
          </Button>
        </div>
      </div>

      {/* <Modal
        isOpen={successModal.isOpen}
        onClose={successModal.closeModal}
        size="sm"
        showCloseButton={false}
        closeOnOverlayClick={false}
        closeOnEscape={false}
      >
        <EventCreationSuccessModal onClose={successModal.closeModal} />
      </Modal> */}
    </div>
  );
};

export default CreateEvent;
