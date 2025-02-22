"use client";

import { useState } from "react";

type ResaleTicket = {
  id: number;
  eventTitle: string;
  price: number;
  seller: string;
};

type Event = {
  title: string;
  originalPrice: number;
};

const upcomingEvents: Event[] = [
  { title: "Music Festival 2025", originalPrice: 1000 },
  { title: "Tech Conference 2025", originalPrice: 1200 },
  { title: "Comedy Night 2025", originalPrice: 800 },
];

const ResaleMarketplace = () => {
  const [tickets, setTickets] = useState<ResaleTicket[]>([
    {
      id: 1,
      eventTitle: "Music Festival 2025",
      price: 1200,
      seller: "Alice",
    },
    {
      id: 2,
      eventTitle: "Tech Conference 2025",
      price: 1500,
      seller: "Bob",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [price, setPrice] = useState("");

  const handleSellTicket = () => {
    if (!selectedEvent || !price)
      return alert("Please enter event details");

    const resalePrice = parseFloat(price);
    const minPrice = selectedEvent.originalPrice * 0.5;
    const maxPrice = selectedEvent.originalPrice * 1.5;

    if (resalePrice < minPrice || resalePrice > maxPrice) {
      return alert(
        `Price must be between ₹${minPrice.toFixed(2)} and ₹${maxPrice.toFixed(2)}`
      );
    }

    const newTicket: ResaleTicket = {
      id: tickets.length + 1,
      eventTitle: selectedEvent.title,
      price: resalePrice,
      seller: "You",
    };

    setTickets([...tickets, newTicket]);
    setSelectedEvent(null);
    setPrice("");
  };

  const handleDeleteTicket = (id: number) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#0E1E21] to-[#27363B] text-white">
      <h1 className="text-4xl font-semibold text-[#54A388] text-center mb-6">
        Ticket Resale Marketplace
      </h1>

      {/* Sell Ticket Form */}
      <div className="max-w-lg mx-auto bg-[#161316] p-6 rounded-xl shadow-lg border border-[#27363B]">
        <h2 className="text-2xl font-medium text-[#54A388] mb-4">
          Sell Your Ticket
        </h2>

        {/* Event Selection Dropdown */}
        <select
          value={selectedEvent?.title || ""}
          onChange={(e) => {
            const event = upcomingEvents.find(
              (ev) => ev.title === e.target.value
            );
            setSelectedEvent(event || null);
          }}
          className="w-full p-2 mb-4 rounded-lg text-black"
        >
          <option value="">Select Event</option>
          {upcomingEvents.map((event) => (
            <option key={event.title} value={event.title}>
              {event.title} (₹{event.originalPrice})
            </option>
          ))}
        </select>

        {/* Price Input with Limits */}
        <input
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg text-black"
        />

        <button
          onClick={handleSellTicket}
          className="w-full bg-[#54A388] text-[#161316] py-2 px-4 rounded-xl font-medium hover:bg-[#27363B] transition"
        >
          List for Resale
        </button>
      </div>

      {/* Resale Tickets Listing */}
      <h2 className="text-3xl text-center mt-8 text-[#54A388]">
        Available Tickets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tickets.length === 0 ? (
          <p className="text-center text-gray-400 col-span-3">
            No tickets available for resale.
          </p>
        ) : (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-[#161316] p-6 rounded-xl shadow-lg border border-[#27363B]"
            >
              <h3 className="text-2xl text-[#54A388]">
                {ticket.eventTitle}
              </h3>
              <p className="mt-2">Price: ₹{ticket.price}</p>
              <p className="text-gray-400">Seller: {ticket.seller}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-[#54A388] text-[#161316] py-2 px-4 rounded-xl font-medium hover:bg-[#27363B] transition">
                  Buy Ticket
                </button>
                {ticket.seller === "You" && (
                  <button
                    onClick={() => handleDeleteTicket(ticket.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-xl font-medium hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResaleMarketplace;
