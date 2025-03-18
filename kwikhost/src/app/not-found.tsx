"use client";

import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import Link from "next/link";

const LostInSpace = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 6 + 4, // Slower duration
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Floating File */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: [0, -5, 0],
          opacity: 1,
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 5, // Slower bobbing
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        {/* File Icon */}
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
          <Upload className="w-10 h-10 text-white" />
        </div>

        {/* Message */}
        <h2 className="text-white text-2xl font-bold mt-4">
          File Lost in Space!
        </h2>
        <p className="text-zinc-400 mt-2">
        We couldn&apos;t locate your file. It might be drifting in the void...
        </p>

        {/* Return Button */}
        <Link href="/">
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d96ce7",
            boxShadow: "0px 4px 20px rgba(217, 108, 231, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-purple-500 px-6 py-2 rounded-full text-white font-medium transition-all"
          >
          Return to Safety
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LostInSpace;
