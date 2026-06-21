"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "College ERP System",
    duration: "Feb 2025 - Apr 2025",
    tech: "HTML • SQL",
    description:
      "Developed a web-based ERP platform for managing student and academic records. Integrated SQL database functionality for efficient storage and retrieval of information.",
  },
  {
    title: "Travel Booking Application",
    duration: "Mar 2026 - Apr 2026",
    tech: "Android Development",
    description:
      "Developed an Android application for travel booking and itinerary management. Designed user-friendly workflows and booking functionality.",
  },
  {
    title: "AI Chatbot",
    duration: "Jan 2026 - Feb 2026",
    tech: "Python • AI Concepts",
    description:
      "Built an AI-powered chatbot capable of responding to user queries and providing assistance. Focused on conversational design and user experience improvements.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center"
      >
        Featured Projects
      </motion.h2>

      <p className="text-center text-gray-500 mt-4">
        Some projects I've built while exploring technology.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="rounded-3xl border p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-blue-600 mt-3">
              {project.tech}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="px-5 py-2 rounded-full bg-black text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-5 py-2 rounded-full border"
              >
                Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}