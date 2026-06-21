"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold"
      >
        Certifications
      </motion.h2>

      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            p-10
            shadow-sm
            hover:shadow-xl
            transition
          "
        >
          <h3 className="text-2xl font-semibold">
            Data Science Certification
          </h3>

          <p className="mt-2 text-blue-600">
            Acmegrade
          </p>

          <p className="mt-4 text-gray-600">
            Completed training in Python, Data Analysis,
            Data Visualization, Statistics, and Machine
            Learning fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}