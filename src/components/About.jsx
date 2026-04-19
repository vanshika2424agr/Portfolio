import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-center bg-slate-100 dark:bg-slate-800 dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-6 text-indigo-600">
        About Me
      </h2>

      {/* Intro */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
      I build modern, responsive web applications using React, JavaScript, and Tailwind CSS. 
      Currently a virtual intern at ShadowFox and a former summer intern at IBM, 
      I’m passionate about creating impactful digital experiences and exploring AI-driven solutions
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow-md">
          🎓 CSE Student
        </div>
        <div className="bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow-md">
          💻 Frontend Developer
        </div>
        <div className="bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow-md">
          ⚡ React & Tailwind
        </div>
        <div className="bg-white dark:bg-slate-700 px-6 py-4 rounded-xl shadow-md">
          🚀 Fast Learner
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
        Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","SQL","AI"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;