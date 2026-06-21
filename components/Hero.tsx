"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
      id="home"
    >
      <div className="max-w-5xl w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-500 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Harsh Vaishya
          </h1>


          <h2 className="text-2xl md:text-4xl mt-5 text-gray-600">
            Computer Engineering Student
          </h2>


          <p className="mt-8 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
            I build modern web applications and explore
            Data Science, Artificial Intelligence, Machine Learning,
            and Cloud Technologies.
          </p>


          <div className="flex justify-center gap-5 mt-10">

            <a
              href="#projects"
              className="
              px-7 py-3
              rounded-full
              bg-black
              text-white
              hover:scale-105
              transition
              "
            >
              View Projects
            </a>


            <a
              href="/RESUME.pdf"
              className="
              px-7 py-3
              rounded-full
              border
              hover:bg-gray-100
              transition
              "
            >
              Resume
            </a>

          </div>


        </motion.div>


        {/* Animated background glow */}

        <motion.div
          animate={{
            scale:[1,1.1,1],
            opacity:[0.4,0.7,0.4]
          }}
          transition={{
            duration:5,
            repeat:Infinity
          }}
          className="
          absolute
          top-40
          left-1/2
          -translate-x-1/2
          w-96
          h-96
          rounded-full
          bg-blue-300
          blur-3xl
          -z-10
          "
        />

      </div>
    </section>
  );
}