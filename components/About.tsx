"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-sm uppercase tracking-widest text-gray-400"
      >
        About Me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-8 text-4xl font-bold leading-tight md:text-6xl"
      >
        Passionate about building intelligent solutions through
        Data Science, AI/ML, Cloud Computing and modern software
        development.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 max-w-3xl text-lg text-gray-500"
      >
        I'm a Computer Engineering student who enjoys solving
        real-world problems through technology. My interests span
        Data Science, Artificial Intelligence, Machine Learning,
        Cloud Computing, and Full-Stack Development.
      </motion.p>
    </section>
  );
}