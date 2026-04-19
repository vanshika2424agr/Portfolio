import { useNavigate } from "react-router-dom";

function Projects() {

  const navigate = useNavigate();

  const projects = [
    {
      name: "Todo App",
      desc: "Manage daily tasks with add, delete & complete",
      path: "/todo",
      icon: "📝"
    },
    {
      name: "Calculator",
      desc: "Mobile-style calculator with all operations",
      path: "/calculator",
      icon: "🧮"
    },
    {
      name: "Counter",
      desc: "Simple counter with increment & reset",
      path: "/counter",
      icon: "🔢"
    },
    {
      name: "Stopwatch",
      desc: "Track time with start, stop & reset",
      path: "/stopwatch",
      icon: "⏱️"
    },
    {
      name: "Weather App",
      desc: "Search any city & view weather instantly",
      path: "/weather",
      icon: "🌤️"
    },
    {
      name: "Student Manager",
      desc: "Add, delete & manage student records",
      path: "/student",
      icon: "🎓"
    }
  ];

  return (
    <div className="py-20 px-6 text-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <h2 className="text-3xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => navigate(p.path)}
            className="cursor-pointer bg-white dark:bg-slate-800 
            p-6 rounded-2xl shadow-lg 
            border border-indigo-200 dark:border-slate-600
            hover:shadow-2xl hover:scale-105 transition duration-300"
          >

            {/* Icon */}
            <div className="text-4xl mb-3">{p.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold">
              {p.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              {p.desc}
            </p>

            {/* Open Button */}
            <div className="mt-4">
              <button className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600">
                Open
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;