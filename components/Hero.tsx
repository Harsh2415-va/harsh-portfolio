"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold tracking-tight md:text-8xl"
        >
          Harsh Vaishya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-gray-500"
        >
          Harsh Vaishya

Aspiring Software Engineer
Data Science • AI/ML • Cloud Computing

Building intelligent solutions through
data, automation, and modern software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
            Explore Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}