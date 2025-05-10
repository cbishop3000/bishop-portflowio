"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArtPage() {
  useEffect(() => {
    // Dynamically load the Behold widget script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans p-8">
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
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Artworks
      </motion.h2>

      {/* Here, we're embedding the widget directly */}
      <div className="widget-container">
        <behold-widget feed-id="dYGJMEPY0sKYf2qop0se"></behold-widget>
      </div>
    </main>
  );
}
