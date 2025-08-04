import React, { useState } from 'react';
import { Search, Plus, Bell, MapPin, User, Calendar } from 'lucide-react';

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
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    const upcomingEvents: Event[] = [
        {
            id: '1',
            title: 'The SubSUI Reform',
            date: 'April 11',
            day: 'Saturday',
            time: '12:00 PM',
            organizer: 'David Mabadeje',
            location: 'Eko Hotels, Ikeja, Lagos',
            image: '/api/placeholder/200/120',
            isRegistered: true,
            attendees: ['avatar1', 'avatar2', 'avatar3', 'avatar4']
        },
        {
            id: '2',
            title: 'The SubSUI Reform',
            date: 'April 12',
            day: 'Sunday',
            time: '12:00 PM',
            organizer: 'David Mabadeje',
            location: 'Eko Hotels, Ikeja, Lagos',
            image: '/api/placeholder/200/120',
            isRegistered: false,
            attendees: ['avatar1', 'avatar2', 'avatar3', 'avatar4']
        }
    ];

    const pastEvents: Event[] = [];

    const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
        

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8 mt-[6rem]">
                {/* Page Title and Description */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Events</h1>
                    <p className="text-gray-600">
                        Discover exciting events tailored just for you! Browse through various categories, search by location,
                        or connect with registered communities to find the perfect gathering that suits your interests.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="flex space-x-8 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'upcoming'
                                ? 'border-purple-600 text-purple-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'past'
                                ? 'border-purple-600 text-purple-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
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
                                <div className="text-lg font-semibold text-gray-900">{event.date}</div>
                                <div className="text-sm text-gray-600">{event.day}</div>
                                <div className="w-3 h-3 bg-gray-400 rounded-full mt-4"></div>
                                <div className="w-px bg-gray-300 flex-1 mt-2"></div>
                            </div>

                            {/* Event Card */}
                            <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-2">{event.time}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h3>

                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <User className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm text-gray-600">By {event.organizer}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm text-gray-600">{event.location}</span>
                                            </div>
                                        </div>

                                        {/* Attendees */}
                                        <div className="flex items-center space-x-2 mb-4">
                                            <div className="flex -space-x-2">
                                                {event.attendees.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                                                    >
                                                        {String.fromCharCode(65 + index)}
                                                    </div>
                                                ))}
                                                <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs">
                                                    +2
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center space-x-4">
                                            {event.isRegistered ? (
                                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>Registered</span>
                                                </button>
                                            ) : (
                                                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                                                    Register Now
                                                </button>
                                            )}
                                            <button className="text-gray-600 text-sm hover:text-gray-800 transition-colors">
                                                See Details
                                            </button>
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
                {activeTab === 'past' && pastEvents.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Calendar className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No past events</h3>
                        <p className="text-gray-600">You haven't attended any events yet.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default EventsPage;