"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Data Science",
    description: "Python, Pandas, NumPy, Data Analysis & Visualization",
  },
  {
    title: "Machine Learning",
    description: "Model Building, Feature Engineering & Predictive Analytics",
  },
  {
    title: "Cloud Security",
    description: "AWS, CloudTrail, GuardDuty, IAM, EC2 & S3",
  },
  {
    title: "Web Development",
    description: "Next.js, React, Tailwind CSS & Responsive Design",
  },
  {
    title: "Programming",
    description: "Python, C++, JavaScript & Problem Solving",
  },
  {
    title: "Databases",
    description: "MySQL, SQL Queries & Database Design",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center text-5xl font-bold tracking-tight"
      >
        What I Work With
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mb-20 max-w-2xl text-center text-lg text-gray-500"
      >
        Technologies and domains I use to build modern applications,
        analyze data, and develop intelligent solutions.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="
              rounded-[32px]
              border
              border-gray-200
              bg-gradient-to-br
              from-white
              to-gray-50
              p-10
              shadow-sm
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <h3 className="text-2xl font-semibold">
              {skill.title}
            </h3>

            <p className="mt-4 leading-relaxed text-gray-500">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}