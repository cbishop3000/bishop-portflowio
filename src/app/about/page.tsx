'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function AboutContact() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex items-center justify-center relative">

      {/* Back Arrow Button (Fixed) */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="text-white text-3xl p-3 rounded-full bg-gray-900 hover:bg-gray-700 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &larr;
          </motion.button>
        </Link>
      </div>

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full p-4 sm:p-8">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/3 bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Name Block Above the Image */}
          <div className="bg-gray-900 text-white text-center py-4">
            <strong className="text-xl">Chris Bishop</strong>
          </div>

          {/* Image Section */}
          <img
            src="/portbishop.jpg"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Wrapper for About + Contact */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">

          {/* About Section */}
          <motion.div
            className="bg-gray-900 rounded-xl shadow-xl p-6 sm:p-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              Hey there! I'm a creative technologist, developer, and dreamer passionate about building things that matter.
              With experience in various technologies, I love pushing boundaries and creating innovative solutions.
              I'm always exploring new ways to blend art, tech, and everything in between.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gray-900 rounded-xl shadow-xl p-6 sm:p-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4">Contact</h3>
            <p className="mb-6">Feel free to reach out if you're interested in collaborating or just want to chat!</p>

            <div className="flex items-center gap-2 mb-4 text-lg">
              <FaPhoneAlt className="text-green-400" />
              <span><strong>Phone:</strong> (209) 287-0152</span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-lg">
              <FaEnvelope className="text-blue-400" />
              <span>
                <strong>Email:</strong>{" "}
                <a href="mailto:bishopwebgraphics@gmail.com" className="underline text-blue-400">
                  bishopwebgraphics@gmail.com
                </a>
              </span>
            </div>

            <p className="text-lg mb-2"><strong>Find Me On</strong></p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
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
          </motion.div>
        </div>

      </section>
    </main>
  );
}
