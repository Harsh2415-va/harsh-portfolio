"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Cloud Security Detection & Response Platform",
    tech: "AWS • GuardDuty • IAM • EC2 • S3 • Elastic Stack",
    description:
      "Built a cloud security monitoring environment to detect and investigate threats in AWS infrastructure.",
  },
  {
    title: "Personal AI Memory OS",
    tech: "AI • Cloud • Search • Databases",
    description:
      "An intelligent memory system that stores, organizes and retrieves personal knowledge using AI.",
  },
  {
    title: "Data Science Analytics Dashboard",
    tech: "Python • Pandas • Machine Learning",
    description:
      "Interactive dashboard for analyzing datasets and generating actionable insights.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-40"
    >
      <h2 className="mb-20 text-center text-5xl font-bold">
        Featured Projects
      </h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[40px] bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-sm"
          >
            <p className="text-sm font-medium text-blue-600">
              {project.tech}
            </p>

            <h3 className="mt-4 text-4xl font-bold">
              {project.title}
            </h3>

            <p className="mt-6 max-w-3xl text-lg text-gray-600">
              {project.description}
            </p>

            <button className="mt-8 rounded-full bg-black px-6 py-3 text-white">
              View Project →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}