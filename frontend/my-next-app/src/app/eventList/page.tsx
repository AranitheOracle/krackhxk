"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaFilter } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Events Data
const events = [
  {
    id: 1,
    title: "Music Festival 2025",
    image: "/images/music-festival.jpg",
    description: "An electrifying night with the best artists around the world.",
    location: "IIT Mandi Campus",
    time: "March 10, 2025 - 7:00 PM",
    remainingSeats: 50,
    type: "Music",
    date: new Date("2025-03-10"),
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    image: "/images/tech-conference.jpg",
    description: "Join the biggest tech innovators and leaders in this grand event.",
    location: "IIT Mandi Auditorium",
    time: "April 15, 2025 - 10:00 AM",
    remainingSeats: 30,
    type: "Tech",
    date: new Date("2025-04-15"),
  },
  {
    id: 3,
    title: "Astronomy Night",
    image: "/images/astronomy-night.jpg",
    description: "A night under the stars with telescopes and expert discussions.",
    location: "Observatory, IIT Mandi",
    time: "May 5, 2025 - 8:00 PM",
    remainingSeats: 20,
    type: "Astronomy",
    date: new Date("2025-05-05"),
  },
];

const EventList: React.FC = () => {
  const router = useRouter();

  // State for Search and Filters
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [venueFilter, setVenueFilter] = useState("");

  // Function to handle buying tickets
  const handleBuy = (id: number, seats: number) => {
    router.push(`/eventList/payment/${id}?id=${id}&seats=${seats}`);
  };

  // Filtering Events based on Search and Filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch = searchQuery
      ? event.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesDate = selectedDate
      ? event.date.toDateString() === selectedDate.toDateString()
      : true;

    const matchesVenue = venueFilter
      ? event.location.toLowerCase().includes(venueFilter.toLowerCase())
      : true;

    return matchesSearch && matchesDate && matchesVenue;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1E21] to-[#27363B] p-6 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-[#54A388] tracking-wide">
          Upcoming Events
        </h1>
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            className="bg-[#54A388] p-2 rounded-lg hover:bg-[#27363B] transition"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FaSearch className="text-black" />
          </button>

          {/* Filter Button */}
          <button
            className="bg-[#54A388] p-2 rounded-lg hover:bg-[#27363B] transition"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <FaFilter className="text-black" />
          </button>
        </div>
      </div>

      {/* Search Box (Visible on Click) */}
      {searchVisible && (
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none mb-4"
        />
      )}

      {/* Filter Options (Visible on Click) */}
      {filterVisible && (
        <div className="bg-[#161316] p-4 rounded-md mb-4 border border-gray-500">
          <h2 className="text-lg font-medium mb-2">Filter by:</h2>

          {/* Date Picker for Date Filter */}
          <div className="mb-3">
            <label className="block mb-1">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="p-2 rounded-md border border-gray-300 text-black w-full"
              placeholderText="Choose a date"
            />
          </div>

          {/* Venue Filter */}
          <div className="mb-3">
            <label className="block mb-1">Venue:</label>
            <input
              type="text"
              placeholder="Enter venue..."
              value={venueFilter}
              onChange={(e) => setVenueFilter(e.target.value)}
              className="p-2 rounded-md border border-gray-300 text-black w-full focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Scrollable Events List (One Below Another) */}
      <div className="max-h-[calc(100vh-250px)] overflow-y-auto space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#161316] rounded-2xl shadow-lg overflow-hidden border border-[#27363B] transition-transform transform hover:scale-105 p-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-lg"
              />

              {/* Event Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-medium text-[#54A388]">
                  {event.title}
                </h2>
                <p className="text-gray-400 mt-2">{event.description}</p>
                <p className="mt-2 text-[#FFFFFF]">
                  📍 {event.location} | ⏰ {event.time}
                </p>
                <p className="mt-2 text-[#FFFFFF]">
                  Seats Left: {event.remainingSeats}
                </p>

                {/* Buy Ticket Button */}
                <button
                  onClick={() => handleBuy(event.id, event.remainingSeats)}
                  className="mt-4 w-full text-center bg-[#54A388] text-[#161316] py-2 px-4 rounded-xl font-medium hover:bg-[#27363B] hover:text-[#54A388] transition"
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
