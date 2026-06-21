"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className="
            mx-auto
            mt-5
            flex
            max-w-6xl
            items-center
            justify-between
            rounded-full
            border
            border-white/30
            bg-white/70
            px-8
            py-4
            shadow-lg
            backdrop-blur-xl
          "
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            HV
          </a>

          {/* Desktop Navigation */}
          <div
            className="
              hidden
              items-center
              gap-8
              text-sm
              font-medium
              text-gray-600
              md:flex
            "
          >
            <a href="#home" className="transition hover:text-black">
              Home
            </a>

            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#skills" className="transition hover:text-black">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>

            <a href="#timeline" className="transition hover:text-black">
              Journey
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl transition duration-300 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-black
                px-4
                py-2
                text-sm
                text-white
                transition
                hover:scale-105
              "
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-vaishya-615a7427a"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-blue-600
                px-4
                py-2
                text-sm
                text-white
                transition
                hover:scale-105
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Harsh2415-va"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                px-4
                py-2
                text-sm
                transition
                hover:bg-gray-100
              "
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              mx-auto
              mt-3
              max-w-6xl
              rounded-3xl
              bg-white
              p-6
              shadow-lg
              md:hidden
            "
          >
            <div className="flex flex-col gap-4 text-gray-700">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#timeline" onClick={() => setMenuOpen(false)}>
                Journey
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <div id="home">
        <Hero />
      </div>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-40"
      >
        <h2 className="text-5xl font-bold tracking-tight">
          About Me
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          I'm Harsh Vaishya, a Computer Engineering undergraduate at
          Indus University with a strong interest in Software Development,
          Data Science, Artificial Intelligence, and Cloud Technologies.

          <br />
          <br />

          I enjoy building practical applications, solving complex
          problems, and continuously learning modern technologies.
          My goal is to leverage technology to create impactful
          solutions and grow as a software engineer.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Journey */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            md:flex-row
          "
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Harsh Vaishya
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Harsh2415-va"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-vaishya-615a7427a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}