export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-gray-200 bg-white/80 px-8 py-4 backdrop-blur-md">
          <h1 className="font-semibold">Harsh Vaishya</h1>

          <ul className="hidden gap-8 text-sm md:flex">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            Harsh Vaishya
          </h1>

          <p className="mt-6 text-2xl text-gray-600">
            Aspiring Software Engineer
          </p>

          <p className="mt-2 text-lg text-gray-500">
            Data Science • AI/ML • Cloud Computing
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-8 py-4 text-white"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Harsh2415-va"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-8 py-4"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-vaishya-615a7427a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-8 py-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <p className="uppercase tracking-widest text-gray-400">
          About Me
        </p>

        <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Passionate about building intelligent solutions through Data Science,
          AI/ML, Cloud Computing and Software Development.
        </h2>

        <p className="mt-8 max-w-4xl text-lg text-gray-600">
          Computer Engineering student at Indus University with strong
          foundations in Python, C++, SQL, DSA and DBMS. Interested in AI,
          Cloud Computing, Software Engineering and Data Science.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-10">
            <h3 className="text-3xl font-semibold">Programming</h3>
            <p className="mt-4 text-gray-600">
              Python, C, C++, SQL
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-10">
            <h3 className="text-3xl font-semibold">Data Science & AI</h3>
            <p className="mt-4 text-gray-600">
              Machine Learning, Data Analysis, Data Visualization
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-10">
            <h3 className="text-3xl font-semibold">Development</h3>
            <p className="mt-4 text-gray-600">
              HTML, CSS, Next.js, React, Android Development
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-10">
            <h3 className="text-3xl font-semibold">Core Concepts</h3>
            <p className="mt-4 text-gray-600">
              DSA, DBMS, Problem Solving
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="space-y-8">
          <div className="rounded-[40px] bg-gray-100 p-12">
            <p className="text-blue-600">HTML • SQL</p>

            <h3 className="mt-4 text-4xl font-bold">
              College ERP System
            </h3>

            <p className="mt-6 text-gray-600">
              Developed a web-based ERP platform for managing student and
              academic records.
            </p>
          </div>

          <div className="rounded-[40px] bg-gray-100 p-12">
            <p className="text-blue-600">Android Development</p>

            <h3 className="mt-4 text-4xl font-bold">
              Travel Booking Application
            </h3>

            <p className="mt-6 text-gray-600">
              Android application for travel booking and itinerary management.
            </p>
          </div>

          <div className="rounded-[40px] bg-gray-100 p-12">
            <p className="text-blue-600">Python • AI</p>

            <h3 className="mt-4 text-4xl font-bold">
              AI Chatbot
            </h3>

            <p className="mt-6 text-gray-600">
              AI-powered chatbot capable of responding to user queries.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <h2 className="mb-10 text-5xl font-bold">
          Certifications
        </h2>

        <div className="rounded-3xl bg-gray-100 p-10">
          <h3 className="text-2xl font-semibold">
            Data Science Certification – Acmegrade
          </h3>

          <p className="mt-4 text-gray-600">
            Python, Data Analysis, Data Visualization, Statistics and Machine
            Learning Fundamentals.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-32 text-center"
      >
        <h2 className="text-5xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="mt-8 text-xl text-gray-600">
          harshvaishya2005@gmail.com
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/Harsh2415-va"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-6 py-3"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-vaishya-615a7427a"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-6 py-3"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-gray-500">
        © 2026 Harsh Vaishya. All rights reserved.
      </footer>
    </main>
  );
}