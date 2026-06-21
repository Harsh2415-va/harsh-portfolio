"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Data Science",
    description: "Data Analysis, Visualization & Insights",
  },
  {
    title: "AI / ML",
    description: "Machine Learning & Predictive Models",
  },
  {
    title: "Cloud Computing",
    description: "AWS Security, EC2, S3 & IAM",
  },
  {
    title: "Web Development",
    description: "Next.js, React & Modern UI",
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40">
      <h2 className="mb-16 text-center text-5xl font-bold">
        What I Work With
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.03,
            }}
            className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-10 shadow-sm"
          >
            <h3 className="text-3xl font-semibold">
              {skill.title}
            </h3>

            <p className="mt-4 text-gray-500">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}