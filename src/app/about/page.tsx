'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Importing Next.js Link for navigation
import { FaPhoneAlt, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Importing icons

export default function AboutContact() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex items-center justify-center">
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto p-8">
        {/* Back Arrow Button */}
        <div className="absolute top-4 left-4">
          <Link href="/">
            <motion.button
              className="text-white text-3xl p-2 rounded-full hover:bg-gray-700 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              &larr; {/* Left arrow (←) */}
            </motion.button>
          </Link>
        </div>

        {/* Left: Card with picture */}
        <div className="flex-none w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-xl relative overflow-hidden">
          <motion.img
            src="/portbishop.jpg" // Replace with your image path
            alt="Your Name"
            className="w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </div>

        {/* Right: About Section */}
        <div className="flex-1 p-6 lg:p-12 bg-gray-900 rounded-xl shadow-xl mt-8 lg:mt-0 ml-0 lg:ml-8 h-full overflow-y-auto">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg mb-6">
            Hey there! I'm a creative technologist, developer, and dreamer passionate about building things that matter. With experience in various technologies, I love pushing boundaries and creating innovative solutions. I'm always exploring new ways to blend art, tech, and everything in between.
          </p>
        </div>

        {/* Right: Contact Section */}
        <div className="flex-1 p-6 lg:p-12 bg-gray-900 rounded-xl shadow-xl mt-8 lg:mt-0 ml-0 lg:ml-8 h-full overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4">Contact</h3>
            <p className="mb-6">Feel free to reach out if you're interested in collaborating or just want to chat!</p>
            <div className="text-lg mb-4 flex items-center space-x-2">
              <FaPhoneAlt className="text-green-400" />
              <span><strong>Phone:</strong> (209) 287-0152</span>
            </div>
            <div className="text-lg mb-4 flex items-center space-x-2">
              <FaEnvelope className="text-blue-400" />
              <span>
                <strong>Email:</strong>{" "}
                <a href="mailto:bishopwebgraphics@gmail.com" className="text-blue-400">
                  bishopwebgraphics@gmail.com
                </a>
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-lg"><strong>Find Me On</strong></p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
