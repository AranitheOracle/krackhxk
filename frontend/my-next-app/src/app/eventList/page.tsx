"use client";

import React from "react";
import { useRouter } from "next/navigation";

const events = [
  {
    id: 1,
    title: "Music Festival 2025",
    image: "/images/music-festival.jpg",
    description: "An electrifying night with the best artists around the world.",
    location: "IIT Mandi Campus",
    time: "March 10, 2025 - 7:00 PM",
    remainingSeats: 50,
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    image: "/images/tech-conference.jpg",
    description: "Join the biggest tech innovators and leaders in this grand event.",
    location: "IIT Mandi Auditorium",
    time: "April 15, 2025 - 10:00 AM",
    remainingSeats: 30,
  },
  {
    id: 3,
    title: "Astronomy Night",
    image: "/images/astronomy-night.jpg",
    description: "A night under the stars with telescopes and expert discussions.",
    location: "Observatory, IIT Mandi",
    time: "May 5, 2025 - 8:00 PM",
    remainingSeats: 20,
  },
];

const EventList: React.FC = () => {
  const router = useRouter();

  const handleBuy = (id: number, seats: number) => {
    router.push(/eventList/payment/${id}?id=${id}&seats=${seats});
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#0E1E21] to-[#27363B]">
      <h1 className="text-4xl font-semibold text-[#54A388] text-center mb-8 tracking-wide">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#161316] rounded-2xl shadow-lg overflow-hidden border border-[#27363B] transition-transform transform hover:scale-105"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-white">
              <h2 className="text-2xl font-medium text-[#54A388]">{event.title}</h2>
              <p className="text-gray-400 mt-2">{event.description}</p>
              <p className="mt-2 text-[#FFFFFF]">📍 {event.location} | ⏰ {event.time}</p>
              <p className="mt-2 text-[#FFFFFF]">Seats Left: {event.remainingSeats}</p>
              <button
                onClick={() => handleBuy(event.id, event.remainingSeats)}
                className="mt-4 w-full text-center bg-[#54A388] text-[#161316] py-2 px-4 rounded-xl font-medium hover:bg-[#27363B] transition"
              >
                Buy Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;