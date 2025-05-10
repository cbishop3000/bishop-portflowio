'use client';

import React from "react";
import { motion } from "framer-motion";

const CornerButton = ({ label, position, link }: { label: string; position: string; link: string }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ rotate: 15, scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`absolute ${position} bg-white text-black m-4 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all`}
  >
    <a href={link} className="block w-full h-full flex items-center justify-center"> 
      {label} {/* Ensures the link is clickable and fills the whole button */}
    </a> 
  </motion.button>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Full-bleed video section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/bishop.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Corner Buttons */}
        <CornerButton label="About & Contact" position="top-0 left-0" link="/about" />
        <CornerButton label="Websites" position="top-0 right-0" link="/websites" />
        <CornerButton label="Music" position="bottom-0 left-0" link="/music" />
        <CornerButton label="Art" position="bottom-0 right-0" link="/art" />
      </section>

      {/* Support Me Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-[40%] flex flex-col sm:flex-row items-center gap-2 sm:space-x-2 z-10">
        <motion.a
          href="https://cash.app/$chrismadechrispaid"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-400 transition w-30"
        >
          💸 Cash
        </motion.a>
        <motion.a
          href="https://venmo.com/Chris-Bishop-153"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-400 transition w-30"
        >
          📲 Venmo
        </motion.a>
      </div>
    </main>
  );
}
