"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    label: "Projects Built",
  },
  {
    number: "1",
    label: "Certification",
  },
  {
    number: "4+",
    label: "Technical Domains",
  },
  {
    number: "2027",
    label: "Graduation Year",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              rounded-3xl
              border
              p-8
              text-center
              shadow-sm
              hover:shadow-lg
              transition
            "
          >
            <h3 className="text-4xl font-bold">
              {stat.number}
            </h3>

            <p className="mt-3 text-gray-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}