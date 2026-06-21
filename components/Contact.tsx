"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-6 text-lg text-gray-500">
          Open to internships, collaborations, and exciting
          opportunities in software development, AI, and data science.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border p-8 text-center">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="mt-3 text-gray-500">
            harshvaishya2005@gmail.com
          </p>
        </div>

        <div className="rounded-3xl border p-8 text-center">
          <h3 className="text-xl font-semibold">Location</h3>
          <p className="mt-3 text-gray-500">
            Ahmedabad, Gujarat
          </p>
        </div>

        <div className="rounded-3xl border p-8 text-center">
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/harsh-vaishya-615a7427a"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-blue-600"
          >
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
}