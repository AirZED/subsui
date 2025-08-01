import React, { useState } from "react";
import {
    Search,
    Plus,
    Bell,
    Calendar,
    MapPin,
    Users,
    DollarSign,
    RotateCcw,
    Settings,
} from "lucide-react";
import { Input } from "../components/ui/input";

const CreateEvent = () => {
    const [eventName, setEventName] = useState("");
    const [fromDate, setFromDate] = useState("Apr 16th 2025");
    const [fromTime, setFromTime] = useState("09:30 AM");
    const [toDate, setToDate] = useState("Apr 16th 2025");
    const [toTime, setToTime] = useState("02:30 PM");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [isTicketsFree, setIsTicketsFree] = useState(true);
    const [isCapacityUnlimited, setIsCapacityUnlimited] = useState(true);
    const [enableResale, setEnableResale] = useState(false);
    const [enableVariablePricing, setEnableVariablePricing] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pt-[6rem]">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Image Upload Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 h-80 flex flex-col items-center justify-center border-dashed hover:border-purple-300 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
                            <Plus className="w-6 h-6 text-gray-400 group-hover:text-purple-500" />
                        </div>
                        <p className="text-purple-600 font-medium mb-1">Click here</p>
                        <p className="text-gray-500 text-sm">or drag to upload image</p>
                    </div>
                </div>

                {/* Event Details Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        {/* Event Name */}
                        <div className="mb-8">
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                className="w-full text-2xl font-bold text-gray-800 placeholder-gray-400 border-none outline-none bg-transparent"
                            />
                        </div>

                        {/* Date and Time */}
                        <div className="flex gap-6 mb-8 flex-col">
                            <div className=" bg-[#F5F5F5] p-4 rounded-md w-2/3 flex gap-7 ">
                                <div className="flex items-center flex-col items-start">
                                    <div className="flex items-center gap-1 ">
                                        <div className="w-2 h-2 bg-[#9E9E9E] rounded-full"></div>
                                        From
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-[#9E9E9E] rounded-full"></div>To
                                    </div>
                                </div>

                                <div className="border ">
                                    <div className="flex items-center">
                                        <Input
                                            type="text"
                                            value={fromDate}
                                            onChange={(e) => setFromDate(e.target.value)}
                                            className="bg-[#E0E0E0] py-1 rounded-[5px] text-sm border-none outline-none focus:bg-gray-200"
                                        />
                                        <Input
                                            type="text"
                                            value={fromTime}
                                            onChange={(e) => setFromTime(e.target.value)}
                                            className="bg-[#E0E0E0] py-1 rounded-[5px] text-sm border-none outline-none focus:bg-gray-200"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <Input
                                            type="text"
                                            value={toDate}
                                            onChange={(e) => setToDate(e.target.value)}
                                            className="bg-[#E0E0E0] rounded-[5px] text-sm border-none outline-none focus:bg-gray-200"
                                        />
                                        <Input
                                            type="text"
                                            value={toTime}
                                            onChange={(e) => setToTime(e.target.value)}
                                            className="bg-[#E0E0E0] py-1 rounded-md text-sm border-none outline-none focus:bg-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center bg-[#F5F5F5] p-4 rounded-md w-1/3">
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                                    <span className="font-medium">Timezone</span>
                                </div>
                                <div className="text-sm text-gray-800 font-medium">
                                    GMT +1:00
                                </div>
                                <div className="text-xs text-gray-500">Lagos</div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600 text-sm">
                                    Add Event Location or Virtual Link
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter location or virtual link"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-0 py-2 border-none outline-none text-gray-800 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-purple-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <label className="block text-gray-700 font-medium mb-3">
                                Event Description
                            </label>
                            <textarea
                                placeholder="Add description here..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                            />
                        </div>

                        {/* Event Details */}
                        <div className="space-y-6">
                            <h3 className="text-gray-700 font-medium mb-4">Event Details</h3>

                            {/* Tickets */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">Tickets</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Free</span>
                                    <div
                                        className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${isTicketsFree ? "bg-purple-600" : "bg-gray-300"
                                            }`}
                                        onClick={() => setIsTicketsFree(!isTicketsFree)}
                                    >
                                        <div
                                            className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform mt-0.5 ${isTicketsFree ? "translate-x-6" : "translate-x-0.5"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Capacity */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center space-x-3">
                                    <Users className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">Capacity</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Unlimited</span>
                                    <div
                                        className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${isCapacityUnlimited ? "bg-purple-600" : "bg-gray-300"
                                            }`}
                                        onClick={() => setIsCapacityUnlimited(!isCapacityUnlimited)}
                                    >
                                        <div
                                            className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform mt-0.5 ${isCapacityUnlimited
                                                ? "translate-x-6"
                                                : "translate-x-0.5"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Enable Resale */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center space-x-3">
                                    <RotateCcw className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">Enable Resale</span>
                                </div>
                                <div
                                    className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${enableResale ? "bg-purple-600" : "bg-gray-300"
                                        }`}
                                    onClick={() => setEnableResale(!enableResale)}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform mt-0.5 ${enableResale ? "translate-x-6" : "translate-x-0.5"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Enable Variable Pricing */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">Enable Variable Pricing</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">No</span>
                                    <div
                                        className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${enableVariablePricing ? "bg-purple-600" : "bg-gray-300"
                                            }`}
                                        onClick={() =>
                                            setEnableVariablePricing(!enableVariablePricing)
                                        }
                                    >
                                        <div
                                            className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform mt-0.5 ${enableVariablePricing
                                                ? "translate-x-6"
                                                : "translate-x-0.5"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Create Event Button */}
                        <div className="mt-8">
                            <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-medium text-lg hover:bg-purple-700 transition-colors">
                                Create Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
