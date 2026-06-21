"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech Computer Engineering",
    description:
      "Began Computer Engineering studies at Indus University, Ahmedabad.",
  },
  {
    year: "2025",
    title: "College ERP System",
    description:
      "Developed a web-based ERP platform for managing student and academic records.",
  },
  {
    year: "2026",
    title: "AI Chatbot",
    description:
      "Built an AI-powered chatbot focused on conversational assistance and user experience.",
  },
  {
    year: "2026",
    title: "Travel Booking Application",
    description:
      "Created an Android application for travel booking and itinerary management.",
  },
  {
    year: "2026",
    title: "Data Science Certification",
    description:
      "Completed Data Science training covering Python, Data Analysis, Visualization, Statistics, and ML.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-5xl px-6 py-40"
    >
      <h2 className="text-center text-5xl font-bold">
        My Journey
      </h2>

      <div className="mt-20 border-l-2 border-gray-200 pl-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative mb-16"
          >
            <div className="absolute -left-[41px] h-5 w-5 rounded-full bg-black" />

            <p className="text-sm font-semibold text-gray-500">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}