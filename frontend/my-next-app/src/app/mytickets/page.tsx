"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Example ticket data
const TICKETS = [
  {
    id: 1,
    eventName: "Blockchain Summit 2025",
    date: "March 25, 2025",
    location: "San Francisco, CA",
    basePrice: 100,
    maxResaleMarkup: 20, // 20% above base price
  },
  {
    id: 2,
    eventName: "Concert: The Chainsmokers",
    date: "April 10, 2025",
    location: "Madison Square Garden",
    basePrice: 80,
    maxResaleMarkup: 15, // 15% above base price
  },
  {
    id: 3,
    eventName: "Tech Expo 2025",
    date: "May 5, 2025",
    location: "Online Event",
    basePrice: 50,
    maxResaleMarkup: 10, // 10% above base price
  },
];

export default function MyTicketsPage() {
  // Example state to handle resale price
  const [resalePrices, setResalePrices] = useState(
    TICKETS.reduce((acc, ticket) => {
      acc[ticket.id] = ticket.basePrice;
      return acc;
    }, {} as Record<number, number>)
  );

  const handleResaleChange = (ticketId: number, value: number) => {
    setResalePrices((prev) => ({ ...prev, [ticketId]: value }));
  };

  const handleResale = (ticketId: number) => {
    // Implement your resale logic here
    alert(`Reselling ticket #${ticketId} at $${resalePrices[ticketId]}`);
  };

  const handleTransfer = (ticketId: number) => {
    // Implement your transfer logic here
    alert(`Transferring ticket #${ticketId}`);
  };

  return (
    <div
      className="relative min-h-screen text-white"
      style={{ fontFamily: "Neue Haas Grotesk, sans-serif" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E21] to-[#161316] z-0" />

      {/* Navbar */}
      <header className="relative flex items-center justify-between px-8 py-4 z-10 bg-[#0E1E21]/60 backdrop-blur-md rounded-b-md">
        {/* Brand name */}
        <div className="text-2xl font-bold text-[#54A388]">AquaFi</div>
        
        {/* Example navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-[#54A388] transition">
            Home
          </a>
          <a href="#" className="hover:text-[#54A388] transition">
            Company
          </a>
          <a href="#" className="hover:text-[#54A388] transition">
            Blog
          </a>
          <a href="#" className="hover:text-[#54A388] transition">
            Help
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-[#54A388] rounded hover:bg-[#54A388] hover:text-black transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#54A388] text-black rounded hover:bg-[#3c8d6e] transition">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-10 md:px-8 md:py-16">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Tickets
        </motion.h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TICKETS.map((ticket) => {
            // Maximum resale price based on markup
            const maxResalePrice =
              ticket.basePrice +
              (ticket.basePrice * ticket.maxResaleMarkup) / 100;

            return (
              <motion.div
                key={ticket.id}
                className="bg-[#27363B] rounded-lg p-6 shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-xl font-semibold text-[#54A388]">
                    {ticket.eventName}
                  </h2>
                  <p className="mt-1 text-gray-200">
                    {ticket.date} • {ticket.location}
                  </p>
                </div>

                {/* QR Code Placeholder */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#161316] rounded flex items-center justify-center">
                    {/* Replace with a real QR code generator if desired */}
                    <span className="text-gray-500">QR CODE</span>
                  </div>
                </div>

                {/* Resale & Transfer */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-200">
                    <label htmlFor={`resale-${ticket.id}`} className="text-sm">
                      Resale Price:
                    </label>
                    <input
                      id={`resale-${ticket.id}`}
                      type="number"
                      className="w-20 bg-[#161316] text-white text-right px-2 py-1 rounded border border-[#54A388]"
                      value={resalePrices[ticket.id]}
                      min={ticket.basePrice}
                      max={maxResalePrice}
                      onChange={(e) =>
                        handleResaleChange(ticket.id, Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-[#54A388] text-black rounded py-2 hover:bg-[#3c8d6e] transition"
                      onClick={() => handleResale(ticket.id)}
                    >
                      Resale
                    </button>
                    <button
                      className="flex-1 border border-[#54A388] text-white rounded py-2 hover:bg-[#54A388] hover:text-black transition"
                      onClick={() => handleTransfer(ticket.id)}
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
