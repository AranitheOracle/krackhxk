"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white" style={{ fontFamily: "Neue Haas Grotesk, sans-serif" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E21] to-[#161316] z-0" />

      {/* 
        SIDE NAVBAR 
        - Hover on the extreme left side to expand.
        - Uses Montserrat for a distinct, modern look.
      */}
      <div
        className="group fixed top-0 left-0 h-screen z-50 w-4 hover:w-64 transition-all duration-300 bg-[#0E1E21]/60 backdrop-blur-md text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex flex-col h-full w-64 p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 space-y-8">
          <div className="text-2xl font-extrabold text-[#54A388]">AquaFi</div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-4">
            <a href="/eventList" className="hover:text-[#54A388] transition">
              Event List
            </a>
            <a href="/ResaleMarketplace" className="hover:text-[#54A388] transition">
              Resale Marketplace
            </a>
            <a href="/mytickets" className="hover:text-[#54A388] transition">
              My Tickets
            </a>
          </nav>

          {/* Auth buttons at the bottom */}
          <div className="mt-auto flex flex-col space-y-2">
            <button className="px-4 py-2 border border-[#54A388] rounded hover:bg-[#54A388] hover:text-black transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#54A388] text-black rounded hover:bg-[#3c8d6e] transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* TOP NAVBAR (with Montserrat) */}
      <header
        className="relative flex items-center justify-between px-8 py-4 z-10 bg-[#0E1E21]/60 backdrop-blur-md rounded-b-md"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {/* Brand name */}
        <div className="text-2xl font-bold text-[#54A388]">AquaFi</div>

        {/* Example navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#54A388] transition">
            Business
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

      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center text-center px-4 py-20 z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Secure, Scalable, and Fair – The Future of Event Ticketing on Blockchain!
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium mt-4 max-w-3xl text-[#54A388]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A blockchain-powered ticketing platform where each ticket is an NFT, ensuring authenticity, preventing scalping, and enabling fair resale with enforced royalties.
        </motion.h2>
      </main>

      {/* STATS SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-8 py-10 z-10">
        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold text-[#54A388]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            100k+
          </motion.h3>
          <p className="text-gray-200">Tickets Sold</p>
        </div>
        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold text-[#54A388]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            1.3b
          </motion.h3>
          <p className="text-gray-200">Market Volume</p>
        </div>
        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold text-[#54A388]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            21k
          </motion.h3>
          <p className="text-gray-200">Transactions</p>
        </div>
      </section>

      {/* TRANSACTION CARD IMAGE SECTION */}
      <section className="relative flex justify-center px-8 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl overflow-hidden"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          <img
            src="/aquaFiCard.png"
            alt="Transaction Card"
            className="w-full object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
}
