import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 
    fixed w-full z-50 
    backdrop-blur-md 
    bg-white/60 dark:bg-slate-900/70 
    border-b border-indigo-200 dark:border-slate-700 
    shadow-sm">

      <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Vanshika's Portfolio
      </h1>

      <div className="flex gap-4 items-center text-gray-700 dark:text-gray-200 text-sm">

        {/* Links */}
        <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
        <Link to="/login" className="hover:text-indigo-500 transition">Login</Link>
        <Link to="/register" className="hover:text-indigo-500 transition">Register</Link>
        <Link to="/todo" className="hover:text-indigo-500 transition">Todo</Link>
        <Link to="/calculator" className="hover:text-indigo-500 transition">Calculator</Link>
        <Link to="/counter" className="hover:text-indigo-500 transition">Counter</Link>
        <Link to="/stopwatch" className="hover:text-indigo-500 transition">Stopwatch</Link>
        <Link to="/student" className="hover:text-indigo-500 transition">Student</Link>
        <Link to="/weather" className="hover:text-indigo-500 transition">Weather</Link>
        <Link to="/map" className="hover:text-indigo-500 transition">Map</Link>

        {/* Theme Button */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-lg bg-indigo-500 text-white 
          hover:bg-indigo-600 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;