"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaFilter } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import useEventStore, { EventType } from "@/store/eventStore";

const EventList: React.FC = () => {
  const router = useRouter();
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [venueFilter, setVenueFilter] = useState("");

  // Retrieve events from the store as EventType[]
  const events: EventType[] = useEventStore((state) => state.events as EventType[]);

  /**
   * Navigate to the payment page, using the event ID as part of the dynamic route
   * and passing the seats via query parameter.
   * Example final URL: /eventList/payment/123?seats=10
   */
  const handleBookTicket = (id: number, seats: number) => {
    router.push(`/eventList/payment/${id}?seats=${seats}`);
  };

  // Filter logic
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const matchesSearch = searchQuery
      ? event.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesDate = selectedDate
      ? eventDate.toDateString() === selectedDate.toDateString()
      : true;
    const matchesVenue = venueFilter
      ? event.location.toLowerCase().includes(venueFilter.toLowerCase())
      : true;
    return matchesSearch && matchesDate && matchesVenue;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1E21] to-[#27363B] p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-[#54A388] tracking-wide">
          Upcoming Events
        </h1>
        <div className="flex items-center gap-4">
          <button
            className="bg-[#54A388] p-2 rounded-lg hover:bg-[#27363B] transition"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FaSearch className="text-black" />
          </button>
          <button
            className="bg-[#54A388] p-2 rounded-lg hover:bg-[#27363B] transition"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <FaFilter className="text-black" />
          </button>
        </div>
      </div>

      {searchVisible && (
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none mb-4"
        />
      )}

      {filterVisible && (
        <div className="bg-[#161316] p-4 rounded-md mb-4 border border-gray-500">
          <h2 className="text-lg font-medium mb-2">Filter by:</h2>
          <div className="mb-3">
            <label className="block mb-1">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="p-2 rounded-md border border-gray-300 text-black w-full"
              placeholderText="Choose a date"
            />
          </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            className="relative bg-[#161316] rounded-2xl shadow-lg border border-[#27363B] overflow-hidden p-4"
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0px 10px 30px rgba(84, 163, 136, 0.6)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-center mt-4">
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
                <button
                  onClick={() => handleBookTicket(event.id, event.remainingSeats)}
                  className="mt-4 w-full text-center bg-blue-500 hover:bg-blue-600 p-2 rounded"
                >
                  Book Ticket
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
