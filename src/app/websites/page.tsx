'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const websites = [
{
    title: "Budeze HD",
    description: "A clean, bold cannabis website designed for conversion and clarity.",
    link: "https://budezehd.com",
    preview: "./BudezeHD.png"
  },
  {
    title: "Clash Fam Coffee",
    description: "Subscription-based coffee brand built for community, creativity, and chaos.",
    link: "https://clashfamcoffee.com",
    preview: "https://placehold.co/600x400?text=Clash+Fam+Coffee&font=roboto"
  },
  {
    title: "Chaos Temple",
    description: "Spiritual-tech hub and home of ritual code. Coming soon.",
    link: "#",
    preview: "https://placehold.co/600x400?text=Chaos+Temple&font=roboto"
  },
];

export default function WebsitesSection() {
  return (
    <main className="min-h-screen bg-black text-white font-sans p-8">
      {/* Back Arrow */}
      <div className="absolute top-4 left-4">
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

      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Websites
        </motion.h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {websites.map((site, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Placeholder Image */}
              <div className="w-full h-48 rounded-lg overflow-hidden border mb-4">
                <img
                  src={site.preview}
                  alt={`${site.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2">{site.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{site.description}</p>

              {/* Button */}
              {site.link !== "#" && (
                <Link href={site.link} target="_blank">
                  <button className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    Visit Site
                  </button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
