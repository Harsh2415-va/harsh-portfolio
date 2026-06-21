export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-gray-200 bg-white/70 px-8 py-4 backdrop-blur-md">
        <h1 className="font-semibold">Harsh</h1>

        <ul className="flex gap-8 text-sm">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}