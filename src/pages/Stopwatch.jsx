import { useState, useEffect } from "react";

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let timer;
    if (run) {
      timer = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [run]);

  // Format time (hh:mm:ss)
  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    return `${hrs.toString().padStart(2, "0")} :
            ${mins.toString().padStart(2, "0")} :
            ${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-10 rounded-2xl shadow-xl text-center w-80">

        <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          Stopwatch
        </h2>

        {/* ⏱️ Time Display */}
        <div className="text-4xl font-mono mb-6 text-gray-800 dark:text-gray-200">
          {formatTime()}
        </div>

        {/* 🔘 Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">

          <button
            onClick={() => setRun(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Start
          </button>

          <button
            onClick={() => setRun(false)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Stop
          </button>

          <button
            onClick={() => {
              setRun(false);
              setTime(0);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Stopwatch;