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
      <section className="relative bg-cover bg-center h-40">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <motion.h1
            className="text-5xl font-bold text-white z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Music
          </motion.h1>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto p-8">
        <div className="flex-none w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-xl relative">
          <motion.img
            src="/portbishop.jpg"
            alt="Bishop"
            className="w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </div>
        <div className="flex-1 p-6 lg:p-12 bg-gray-900 rounded-xl shadow-xl mt-8 lg:mt-0 ml-0 lg:ml-8">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Featured Track: "Talk"
          </motion.h2>
          <p className="text-lg mb-6">
            Listen to my latest track, "Talk", out now on SoundCloud.
          </p>
          <div className="space-x-4 flex items-center">
            <Link href="https://open.spotify.com/album/xyz">
              <FaSpotify className="text-2xl text-green-500 hover:text-green-400" />
            </Link>
            <Link href="https://soundcloud.com/bishop-173994695/talk">
              <FaSoundcloud className="text-2xl text-orange-500 hover:text-orange-400" />
            </Link>
            <Link href="https://music.apple.com/us/artist/xyz">
              <FaApple className="text-2xl text-gray-600 hover:text-gray-500" />
            </Link>
            <Link href="https://www.youtube.com/channel/xyz">
              <FaYoutube className="text-2xl text-red-500 hover:text-red-400" />
            </Link>
          </div>

          {/* SoundCloud Embed */}
          <div className="w-full mt-6">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bishop-173994695/talk&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Music Library Section */}
    <section className="max-w-6xl mx-auto p-8 mt-12">
        <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            Beats Library
        </motion.h3>

        {/* Overarching Container for the Beats */}
        <div className="overflow-x-auto flex pb-4 space-x-6">
            {beats.map((beat, index) => (
            <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-xl min-w-[300px] flex flex-col justify-center items-center border border-gray-300"
            >
                <h4 className="text-xl font-semibold mb-4 text-center text-black">{beat.title}</h4>
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
