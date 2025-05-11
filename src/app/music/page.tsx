"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from "react-icons/fa";

// Define your beats
const beats = [
  {
    title: "NO COPS",
    filename: "COPSZZ.wav",
    cover: "/portbishop.jpg",
  },
  {
    title: "KHAOS",
    filename: "dingDONKKKK.wav",
    cover: "/portbishop.jpg",
  },
  {
    title: "Chrome Temple",
    filename: "drip.wav",
    cover: "/portbishop.jpg",
  },
  // Add more beats here
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative">
      {/* Back Arrow Button */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="text-white text-3xl p-2 rounded-full hover:bg-gray-700 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &larr;
          </motion.button>
        </Link>
      </div>

      {/* Banner Section */}
      <section className="relative bg-cover bg-center h-10">
        
      </section>

      {/* Beats Section (full width) */}
      <section className="max-w-4xl mx-auto p-8 mt-12">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Beats Library
        </motion.h3>

        <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">
          {beats.map((beat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xl w-full flex flex-col justify-center items-center border border-gray-300"
            >
              <h4 className="text-2xl font-semibold mb-4 text-center text-black">
                {beat.title}
              </h4>
              <audio controls className="w-full">
                <source src={`/${beat.filename}`} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
