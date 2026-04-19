import React, { useEffect, useState } from "react";

function Hero() {

  // Typing Effect
  const roles = ["React Developer", "UI Designer", "Frontend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, char + 1));
      setChar(char + 1);

      if (char === roles[index].length) {
        setTimeout(() => {
          setChar(0);
          setIndex((index + 1) % roles.length);
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [char, index]);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800
      dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white
      relative transition-all duration-500"
    >

      {/* 🌟 Background Glow */}
      <div className="absolute w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* 📸 Profile */}
      <div className="relative z-10 mb-6">
        <div className="absolute inset-0 rounded-full bg-indigo-400 dark:bg-indigo-600 blur-xl opacity-40"></div>

        <img
          src="/Vanshikapic.jpeg"
          alt="profile"
          className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 
          border-white dark:border-gray-700 shadow-2xl object-cover"
        />
      </div>

      {/* 👤 Name */}
      <h1 className="text-4xl md:text-5xl font-bold z-10">
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">VANSHIKA AGRAWAL</span>
      </h1>

      {/* ✨ Typing Role */}
      <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 h-6 z-10">
        {text}
        <span className="animate-pulse">|</span>
      </p>

      {/* 🔗 Buttons */}
      <div className="mt-6 flex gap-4 z-10">
        <a
          href="https://github.com/vanshika2424agr"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition shadow-md"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vanshika-agrawal-coder24"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 rounded-lg border border-indigo-500 text-indigo-600 
          hover:bg-indigo-500 hover:text-white transition
          dark:text-indigo-400 dark:border-indigo-400"
        >
          LinkedIn
        </a>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 text-gray-400 dark:text-gray-500 animate-bounce">
        ↓ Scroll
      </div>

    </section>
  );
}

export default Hero;